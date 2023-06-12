package main;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Graphics2D;

import javax.swing.JPanel;

import entity.Player;
import object.SuperObject;
import tile.TileManager;

// To run threat, we need to implement Runnable to the GamePanel class 
public class GamePanel extends JPanel implements Runnable{
	
	// SCREEN SETTINGS 
	final int originalTileSize = 16; // 16x16 tile - default size of character, npc's, etc. (traditional size for characters in 2D games)
	final int scale = 3; // the size of the character will be 16x16 pixels, but will look 48x48 -> (16 X 3 or originalTileSize X scale)
	
	public final int tileSize = originalTileSize * scale; 
	public final int maxScreenCol = 16; // 16 tiles going from left to right 
	public final int maxScreenRow = 12; // 12 tiles going from top to bottom  (total ratio is 4:3)
	public final int screenWidth = tileSize * maxScreenCol; // (48 X 16 = 768)
	public final int screenHeight = tileSize * maxScreenRow; // (48 X 12 = 576) -> total size of game screen will be 768x576 tiles
	
	// WORLD SETTINGS
	public final int maxWorldCol = 50;
	public final int maxWorldRow = 50;
	public final int worldWidth = tileSize * maxWorldCol;
	public final int worldHeight = tileSize * maxWorldRow;
	
	
	// FPS
	int FPS = 60;
	
	// Classes
	
	TileManager tileM = new TileManager(this);
	
	// Instantiate KeyHandler
	KeyHandler keyH = new KeyHandler();
	
	// Thread is useful when you want to process 60 updates / second (or, 60 frames per second, or 60fps)
	Thread gameThread;
	
	public CollisionChecker cChecker = new CollisionChecker(this);
	
	public AssetSetter aSetter = new AssetSetter(this);
	
	public Player player = new Player(this, keyH);
	
	
	public SuperObject obj[] = new SuperObject[10];
	
	
	
	public GamePanel() {
		
		this.setPreferredSize(new Dimension(screenWidth, screenHeight));
		this.setBackground(Color.black);
		
		// If set true, all the drawing from this component will be done in an off-screen painting buffer. In short, it can improve game's rendering performance. 
		this.setDoubleBuffered(true);
		
		this.addKeyListener(keyH);
		
		this.setFocusable(true);
	}
	
	public void startGameThread() {
		
		// Passing this GamePanel() class to this Thread constructor
		gameThread = new Thread(this);
		// Automatically call 
		gameThread.start();
		
	}
	
	public void setupGame() {
		
		aSetter.setObject();
		
	}
	
	// Basically when we start the gameThreat, it automatically runs this run() method
	@Override
	public void run() {
		
		double drawInterval = 1000000000/FPS;
		double delta = 0;
		long lastTime = System.nanoTime();
		long currentTime;
		long timer = 0;
		int drawCount = 0;
		
		
		while (gameThread != null) {
			
			currentTime = System.nanoTime();
			
			delta += (currentTime - lastTime) / drawInterval;
			
			timer += (currentTime - lastTime);
			
			lastTime = currentTime;
			
			if (delta > 1) {
				update();
				
				repaint();	
				
				delta--;
				drawCount++;
			}
			
			if (timer >= 1000000000) {
				System.out.println("FPS: " + drawCount);
				drawCount = 0;
				timer = 0;
			}
		}
		
			// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	//		double drawInterval = 1000000000/FPS; // 0.0166666 seconds
	//		
	//		// when internal system hits nextDrawTime, draw the screen again
	//		double nextDrawTime = System.nanoTime() + drawInterval;
	//		
	//		
	//		while (gameThread != null) {
			
//			// Two things that will happen when the game is running
//			// 		At 60fps, this will occur 60 times per second 
//			// 1. UPDATE: update information such as character position
//			update();
//			
//			// 2. DRAW: draw the screen with the updated information
//			repaint();
//			
//			
//			try {
//				
//				double remainingTime = nextDrawTime - System.nanoTime();
//				remainingTime = remainingTime/1000000;
//				
//				// write this just in case 
//				if (remainingTime < 0) {
//					remainingTime = 0;
//				}
//				
//				Thread.sleep((long) remainingTime);
//				
//				nextDrawTime += drawInterval;
//				
//			} catch (InterruptedException e) {
//				
//				e.printStackTrace();
//				
//			}
			
//		}
		
	}
	
	public void update() {
		
		player.update();

		
	}
	
	// Using the Graphics class
	public void paintComponent(Graphics g) {
		
		super.paintComponent(g);
		
		// Grahpics2D extends the Graphics class
		// Used for more sophisticated control
		
		Graphics2D g2 = (Graphics2D)g;
		
		// Draw tiles before player so the background tiles are the bottom layer and not the player
		tileM.draw(g2);
		
		for (int i = 0; i < obj.length; i++) {
			if(obj[i] != null) {
				obj[i].draw(g2, this);
			}
		}
		
		player.draw(g2);
		
		g2.dispose();
	}

}
