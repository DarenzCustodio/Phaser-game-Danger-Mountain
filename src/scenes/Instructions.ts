import { Scene, GameObjects, Game } from 'phaser';

export class Instructions extends Scene
{
    background!: GameObjects.Image;
    logo!: GameObjects.Image;
    title!: GameObjects.Text;
    backToMenuText!: GameObjects.Text;
    keyboard!: GameObjects.Image;
    up!: GameObjects.Image;
    down!: GameObjects.Image;
    left!: GameObjects.Image;
    right!: GameObjects.Image;
    upText!: GameObjects.Text;
    downText!: GameObjects.Text;
    leftText!: GameObjects.Text;
    rightText!: GameObjects.Text;
    spaceBarText!: GameObjects.Text;
    instructionsText!: GameObjects.Text;

    constructor ()
    {
        super('Instructions');
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

        
        const x2 = 25;
        const y2 = 530;
        const width2 = 975;
        const height2 = 220;
        const cornerRadius2 = 20;
        const fillColor2 = 0x000000;
        const alpha2 = 1; // Translucency (0 to 1)
        const graphics2 = this.add.graphics();
        graphics.fillStyle(fillColor, alpha);
        graphics.fillRoundedRect(x2, y2, width2, height2, cornerRadius2);
        graphics.setDepth(0); // sets layer
    
    
        this.keyboard = this.add.image(250, 350, "arrowKeys");
        this.keyboard.setScale(0.7);
        this.keyboard.setDepth(1)
        this.keyboard.setOrigin(0.5); 

        this.up = this.add.image(600, 200, "UP");
        this.up.setScale(0.3);
        this.up.setDepth(1); 

        this.upText = this.add.text(635, 175, "- Jump", {
            fontFamily: 'Arial Black', fontSize: 35, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        })

        this.down = this.add.image(600, 275, "DOWN");
        this.down.setScale(0.3);
        this.down.setDepth(1); 

        this.downText = this.add.text(635, 250, "- N/A", {
            fontFamily: 'Arial Black', fontSize: 35, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        })

        this.left = this.add.image(600, 350, "LEFT");
        this.left.setScale(0.3);
        this.left.setDepth(1); 

        this.leftText = this.add.text(635, 325, "- Move Left", {
            fontFamily: 'Arial Black', fontSize: 35, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        })

        this.right = this.add.image(600, 425, "RIGHT");
        this.right.setScale(0.3);
        this.right.setDepth(1); 

        this.rightText = this.add.text(635, 400, "- Move Right", {
            fontFamily: 'Arial Black', fontSize: 35, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        })

        this.spaceBarText = this.add.text(570, 475, "[SPACEBAR] - Attack", {
            fontFamily: 'Arial Black', fontSize: 35, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        })
    
        this.title = this.add.text(512, 120, 'Controls', {
            fontFamily: 'Arial Black', fontSize: 90, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        const instructionsText = this.add.text(x2 + 20, y2 + 10, 
            `Instructions:\n - Collect all the coins in the Level\n - Once all coins have been collected, more coins will fall as well as  some obstacles and enemies!\n - Once you have been hit then it is game over\n - Have Fun!`, 
            {
                fontFamily: 'Arial Black', 
                fontSize: 24, 
                color: '#ffffff',
                stroke: '#000000',
                strokeThickness: 8,
                align: 'left',
                wordWrap: { width: width2 - 40 },
                lineSpacing: 0
            }
        );
    
        this.backToMenuText = this.add.text(25, 25, '< Back to Main Menu >', {
            fontFamily: 'Arial Black', fontSize: 18, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setInteractive();
        this.backToMenuText.on('pointerdown', () => {
           this.scene.sleep('Instructions').run('MainMenu')
        });
    }
}
