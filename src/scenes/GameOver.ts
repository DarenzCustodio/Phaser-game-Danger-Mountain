import { Scene, GameObjects } from 'phaser';
import { currentUser, setCurrentUser } from './currentUser';
import axios from 'axios';

export class GameOver extends Scene {
    background!: GameObjects.Image;
    title!: GameObjects.Text;
    returnToMainMenuText!: GameObjects.Text;
    scoreText!: GameObjects.Text;
    score: number = 0

    constructor() {
        super('GameOver');
    }

    init(data: { score: number }) {
        this.score = data.score;
    }

    create() {
       if (currentUser !== "Guest"){
            axios
              .post("https://game-app-be-v2.onrender.com/leaderboard", {
                username: currentUser,
                score: this.score,
              }).then((result) => {
              })
              .catch((error) => {
                console.log("Unsuccesful request", error);
              });

            }
          
      
        const screenWidth = 1024;
        const screenHeight = 768;
        this.scale.resize(screenWidth, screenHeight);

        // Create and position the background image
        this.background = this.add.image(screenWidth / 2, screenHeight / 2, "background");
        this.background.setScale(screenWidth / this.background.width, screenHeight / this.background.height);

        // Add translucent rectangle
        const graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 0.5);
        graphics.fillRoundedRect(10, 60, 1000, 700, 20);
        graphics.setDepth(0);

        // Add title
        this.title = this.add.text(512, 260, `GAME OVER!`, {
            fontFamily: 'Arial Black', fontSize: 90, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.scoreText =  this.add.text(512, 450, `Score: ${this.score}`, {
            fontFamily: 'Arial Black', fontSize: 60, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        // Display return to main menu message
        const returnMessage = '< Click here to return to the main menu >';
        this.returnToMainMenuText = this.add.text(512, 650, returnMessage, {
            fontFamily: 'Arial Black', fontSize: 24, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setInteractive();
        this.returnToMainMenuText.on('pointerdown', () => {
                this.scene.stop('GameOver').start('MainMenu'); 
         
        }).setOrigin(0.5);
    }
}

