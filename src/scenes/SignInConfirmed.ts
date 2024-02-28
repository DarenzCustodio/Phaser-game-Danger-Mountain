import { Scene, GameObjects } from 'phaser';
import { currentUser, setCurrentUser } from './currentUser';

export class SignInConfirmed extends Scene {
    background!: GameObjects.Image;
    title!: GameObjects.Text;
    returnToMainMenuText!: GameObjects.Text;

    constructor() {
        super('SignInConfirmed');
    }

    create() {
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
        this.title = this.add.text(512, 260, `Welcome, ${currentUser}!`, {
            fontFamily: 'Arial Black', fontSize: 65, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        // Display return to main menu message
        const returnMessage = '< Click here to return to the main menu >';
        this.returnToMainMenuText = this.add.text(512, 400, returnMessage, {
            fontFamily: 'Arial Black', fontSize: 24, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setInteractive();
        this.returnToMainMenuText.on('pointerdown', () => {
            this.scene.stop('SignInConfirmed').start('MainMenu');
        }).setOrigin(0.5);
    }
}