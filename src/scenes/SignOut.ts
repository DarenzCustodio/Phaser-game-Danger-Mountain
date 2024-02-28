import { Scene, GameObjects } from 'phaser';

import { currentUser, setCurrentUser} from './currentUser';

export class SignOut extends Scene {
    background!: GameObjects.Image;
    title!: GameObjects.Text;
    backToMenuText!: GameObjects.Text;
    signInForm!: HTMLFormElement;
    submitButton!: HTMLButtonElement;
    signInText!: GameObjects.Text;
    signUpText!: GameObjects.Text;
    slash!: GameObjects.Text;
    isSignIn: boolean = true;
    formContent: string = '';

    constructor() {
        super('SignOut');
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
        this.title = this.add.text(512, 120, 'Account Login', {
            fontFamily: 'Arial Black', fontSize: 90, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

           // Display logout confirmation message
           const logoutMessage = `Hi ${currentUser}, are you sure you want to log out?`;
           const logoutMessageText = this.add.text(512, 400, logoutMessage, {
               fontFamily: 'Arial Black', fontSize: 24, color: '#ffffff',
               stroke: '#000000', strokeThickness: 8,
               align: 'center'
           }).setOrigin(0.5);
   
           // Add options for yes and no
           const yesText = this.add.text(512, 475, '< Yes >', {
               fontFamily: 'Arial Black', fontSize: 24, color: '#ffffff',
               stroke: '#000000', strokeThickness: 8,
               align: 'center'
           }).setInteractive();
           yesText.on('pointerdown', () => {
               setCurrentUser('Guest'); // Set currentUser to Guest
               this.scene.sleep('SignOut').start('MainMenu');
           }).setOrigin(0.5);

   
           const noText = this.add.text(512, 550, '< No >', {
               fontFamily: 'Arial Black', fontSize: 24, color: '#ffffff',
               stroke: '#000000', strokeThickness: 8,
               align: 'center'
           }).setInteractive();
           noText.on('pointerdown', () => {
               this.scene.sleep('SignOut').run('MainMenu');
           }).setOrigin(0.5);

    }
}