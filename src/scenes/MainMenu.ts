import { Scene, GameObjects } from 'phaser';

export class MainMenu extends Scene
{
    background!: GameObjects.Image;
    logo!: GameObjects.Image;
    title!: GameObjects.Text;
    controlsText!: GameObjects.Text;
    leaderBoardsText!: GameObjects.Text;
    settingsText!: GameObjects.Text;
    startGameText!: GameObjects.Text;
    playingAsText!: GameObjects.Text;
    signInText!: GameObjects.Text;
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
            this.scene.sleep('MainMenu').run('PlayerSelector')      
        }).setOrigin(0.5);

        this.signInText = this.add.text(512, 525, '< Sign in >', {
            fontFamily: 'Arial Black', fontSize: 24, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setInteractive();
        this.signInText.on('pointerdown', () => {
            this.scene.sleep('MainMenu').run('Controls')
        }).setOrigin(0.5);

        this.playingAsText  = this.add.text(512, 475, '< Playing as: Guest >', {
            fontFamily: 'Arial Black', fontSize: 24, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setInteractive();
        this.playingAsText.on('pointerdown', () => {
            this.scene.sleep('MainMenu').run('Controls')
        }).setOrigin(0.5);

        

        this.controlsText = this.add.text(25, 50, '< Instructions >', {
            fontFamily: 'Arial Black', fontSize: 24, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setInteractive();
        this.controlsText.on('pointerdown', () => {
            this.scene.sleep('MainMenu').run('Instructions')
        });

        this.leaderBoardsText = this.add.text(410, 50, '< Leaderboards >', {
            fontFamily: 'Arial Black', fontSize: 24, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setInteractive();
        this.leaderBoardsText.on('pointerdown', () => {
            this.scene.sleep('MainMenu').run('Controls')
        });
        this.settingsText = this.add.text(825, 50, '< Settings >', {
            fontFamily: 'Arial Black', fontSize: 24, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setInteractive();
        this.settingsText.on('pointerdown', () => {
            this.scene.sleep('MainMenu').run('Settings')
        });

             // const swordsman = new SwordsmanPrefab(this, 16, 1043)
        // this.add.existing(swordsman);

        const backgroundMusic = this.sound.add("bgMusic");
        console.log(backgroundMusic, "bgmusic");

        backgroundMusic.play({ loop: true, volume: 0.3 });

    

        // this.input.on('pointerdown', () => {
        //     console.log("clicked")
        //     this.scene.sleep('MainMenu').run('Level')
        // });
    }
}
