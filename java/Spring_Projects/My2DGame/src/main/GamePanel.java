package main;

import java.awt.Color;
import java.awt.Dimension;

import javax.swing.JPanel;

public class GamePanel extends JPanel{
	
	// SCREEN SETTINGS 
	final int originalTileSize = 16; // 16x16 tile - default size of character, npc's, etc. (traditional size for characters in 2D games)
	final int scale = 3; // the size of the character will be 16x16 pixels, but will look 48x48 -> (16 X 3 or originalTileSize X scale)
	
	final int tileSize = originalTileSize * scale; 
	final int maxScreenCol = 16; // 16 tiles going from left to right 
	final int maxScreenRow = 12; // 12 tiles going from top to bottom  (total ratio is 4:3)
	final int screenWidth = tileSize * maxScreenCol; // (48 X 16 = 768)
	final int screenHeight = tileSize * maxScreenRow; // (48 X 12 = 576) -> total size of game screen will be 768x576 tiles
	
	public GamePanel() {
		
		this.setPreferredSize(new Dimension(screenWidth, screenHeight));
		this.setBackground(Color.black);
		
		// If set true, all the drawing from this component will be done in an off-screen painting buffer. In short, it can improve game's rendering performance. 
		this.setDoubleBuffered(true);
	}

}
