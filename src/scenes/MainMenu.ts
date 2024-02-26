import { Scene, GameObjects } from 'phaser';
// import images from '.../public/assets/*.png';
export class MainMenu extends Scene
{
    background!: GameObjects.Image;
    logo!: GameObjects.Image;
    title!: GameObjects.Text;
    controlsText!: GameObjects.Text;
    startGameText!: GameObjects.Text;
    PlayerSelector!: GameObjects.Text;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {

        // Configure the game to fit within a specific size
        const screenWidth = 1024;
        const screenHeight = 768;

        // Set the size of the game canvas
        this.scale.resize(screenWidth, screenHeight);

        // Create and position the background image
        this.background = this.add.image(screenWidth / 2, screenHeight / 2, "background");

        // Adjust the scale of the background image to fit the screen
        this.background.setScale(screenWidth / this.background.width, screenHeight / this.background.height);


        this.title = this.add.text(512, 230, 'Danger Mountain', {
            fontFamily: 'Arial Black', fontSize: 90, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.startGameText = this.add.text(512, 400
            , '< Start Game >', {
            fontFamily: 'Arial Black', fontSize: 60, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setInteractive();
        this.startGameText.on('pointerdown', () => {
            console.log('Settings button clicked');
            this.scene.sleep('MainMenu').run('PlayerSelector')      
        }).setOrigin(0.5);

        

        this.controlsText = this.add.text(50, 50, 'Controls', {
            fontFamily: 'Arial', fontSize: 24, color: '#ffffff',
            backgroundColor: '#333333',
            padding: { x: 10, y: 5 },
        }).setInteractive();
        this.controlsText.on('pointerdown', () => {
            console.log('Settings button clicked');
            this.scene.sleep('MainMenu').run('Controls')
           
        });


      
    

        // this.input.on('pointerdown', () => {
        //     console.log("clicked")
        //     this.scene.sleep('MainMenu').run('Level')
        // });
    }
}
