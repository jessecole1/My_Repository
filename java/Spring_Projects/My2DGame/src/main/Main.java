package main;

import javax.swing.JFrame;

public class Main {
	
	public static void main(String[] args) {
		
		// JFrame is a class that is used to create GUIs
		JFrame window = new JFrame();
		window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		window.setResizable(false);
		window.setTitle("Jesse's First 2D Game");
		
		// Adding the GamePanel() class to the JFrame window 
		// The GamePanel() is a JPanel with a bit more extra functions
		GamePanel gamePanel = new GamePanel();
		window.add(gamePanel);
		
		// Causes this window to be sized to fit the preferred size and layouts of it's sub-components (=GamePanel)
		window.pack();
		
		// Not specifying the location of the window on the screen. It will always be at the center 
		window.setLocationRelativeTo(null);
		window.setVisible(true);
		
		// Starts the function that sets the gameThread variable to a new thread
		gamePanel.startGameThread();
		
		
	}

}
