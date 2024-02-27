import { Scene, GameObjects, Game } from 'phaser';

export class Settings extends Scene
{
    background!: GameObjects.Image;
    title!: GameObjects.Text;
    backToMenuText!: GameObjects.Text;


    constructor ()
    {
        super('Settings');
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
    
        this.title = this.add.text(512, 120, 'Settings', {
            fontFamily: 'Arial Black', fontSize: 90, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

    const musicText = this.add.text(100, 325, '< Music >', {
        fontFamily: 'Arial Black', fontSize: 50, color: '#ffffff',
        stroke: '#000000', strokeThickness: 8,
    }).setInteractive();

    const musicOnText = this.add.text(400, 325, '< ON >', {
        fontFamily: 'Arial Black', fontSize: 50, color: '#ffffff',
        stroke: '#000000', strokeThickness: 8,
    }).setInteractive();

    const musicSlashText = this.add.text(575, 325, ' / ', {
        fontFamily: 'Arial Black', fontSize: 50, color: '#ffffff',
        stroke: '#000000', strokeThickness: 8,
    });

    const musicOffText = this.add.text(620, 325, '< OFF >', {
        fontFamily: 'Arial Black', fontSize: 50, color: '#808080',
        stroke: '#000000', strokeThickness: 8,
    }).setInteractive();

    const sfxText = this.add.text(100, 450, '< SFX >', {
        fontFamily: 'Arial Black', fontSize: 50, color: '#ffffff',
        stroke: '#000000', strokeThickness: 8,
    }).setInteractive();

    const sfxOnText = this.add.text(400, 450, '< ON >', {
        fontFamily: 'Arial Black', fontSize: 50, color: '#ffffff',
        stroke: '#000000', strokeThickness: 8,
    }).setInteractive();

    const sfxSlashText = this.add.text(575, 450, ' / ', {
        fontFamily: 'Arial Black', fontSize: 50, color: '#ffffff',
        stroke: '#000000', strokeThickness: 8,
    });

    const sfxOffText = this.add.text(610, 450, '< OFF >', {
        fontFamily: 'Arial Black', fontSize: 50, color: '#808080',
        stroke: '#000000', strokeThickness: 8,
    }).setInteractive();

    musicOnText.on('pointerdown', () => {
        musicOnText.setColor('#ffffff');
        musicOffText.setColor('#808080');
    });

    musicOffText.on('pointerdown', () => {
        musicOffText.setColor('#ffffff');
        musicOnText.setColor('#808080');
    });

    sfxOnText.on('pointerdown', () => {
        sfxOnText.setColor('#ffffff');
        sfxOffText.setColor('#808080');
    });

    sfxOffText.on('pointerdown', () => {
        sfxOffText.setColor('#ffffff');
        sfxOnText.setColor('#808080');
    });

    this.backToMenuText = this.add.text(25, 25, '< Back to Main Menu >', {
        fontFamily: 'Arial Black', fontSize: 18, color: '#ffffff',
        stroke: '#000000', strokeThickness: 8,
        align: 'center'
    }).setInteractive();
    this.backToMenuText.on('pointerdown', () => {
        this.scene.sleep('Settings').run('MainMenu')
    });
    }
}