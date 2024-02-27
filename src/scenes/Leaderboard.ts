import { Scene, GameObjects, Game } from 'phaser';
import axios from "axios";

export class Leaderboard extends Scene
{
    background!: GameObjects.Image;
    title!: GameObjects.Text;
    backToMenuText!: GameObjects.Text;


    constructor ()
    {
        super('Leaderboard');
    }

    create() {
        // Configure the game to fit within a specific size
        const screenWidth = 1024;
        const screenHeight = 768;
    
        // Set the size of the game canvas
        this.scale.resize(screenWidth, screenHeight);
    
        // Create and position the background image
        this.background = this.add.image(screenWidth / 2, screenHeight / 2, "background");
    
        // Adjust the scale of the background image to fit the screen
        this.background.setScale(screenWidth / this.background.width, screenHeight / this.background.height);
    
        // Add translucent rectangle
        const x = 10;
        const y = 60;
        const width = 1000;
        const height = 700;
        const cornerRadius = 20;
        const fillColor = 0x000000;
        const alpha = 0.5; // Translucency (0 to 1)
        const graphics = this.add.graphics();
        graphics.fillStyle(fillColor, alpha);
        graphics.fillRoundedRect(x, y, width, height, cornerRadius);
        graphics.setDepth(0); // sets layer
    
        this.title = this.add.text(512, 120, 'Leaderboard', {
            fontFamily: 'Arial Black', fontSize: 90, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.backToMenuText = this.add.text(25, 25, '< Back to Main Menu >', {
            fontFamily: 'Arial Black', fontSize: 18, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setInteractive();
        this.backToMenuText.on('pointerdown', () => {
            this.scene.sleep('Leaderboard').run('MainMenu')
        });

        axios
      .get("https://game-app-backend.onrender.com/leaderboard")
      .then((response) => {
        return response.data;
      })
      .then((leaderboardData: any) => {
        this.displayLeaderboard(leaderboardData);
      });
  }

  displayLeaderboard(leaderboardData: any) {
    this.add.text(200, 200, "Username                Score 🪙", {
        fontFamily: 'Arial Black', fontSize: 45, color: '#ffffff',
        stroke: '#000000', strokeThickness: 8,
        align: 'center',
        
    });
    leaderboardData.forEach((row: any, index: number) => {
      this.add.text(
        250,
        275 + index * 40,
        `${row.username}`,
        {
            fontFamily: 'Arial Black', fontSize: 26, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center',
        }
      )
      this.add.text(
        725,
        275 + index * 40,
        `${row.score}`,
        {
            fontFamily: 'Arial Black', fontSize: 26, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center',
        }
      );
    });      

    }
}