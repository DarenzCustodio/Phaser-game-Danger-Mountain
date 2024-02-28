import { Scene, GameObjects } from 'phaser'
export class PlayerSelector extends Scene
{
    title!: GameObjects.Text;
    start!: GameObjects.Text;
    player1!: GameObjects.Image;
    player2!: GameObjects.Image;
    player3!: GameObjects.Image;
    backToMain!: GameObjects.Text;
    constructor ()
    {
        super('PlayerSelector');
    }
    create ()
    {
      this.backToMain = this.add.text(75, 50, 'Main Menu ', {
        fontFamily: 'Arial Black', fontSize: 15, color: '#ffffff',
          stroke: '#000000', strokeThickness: 8,
          align: 'center'
        }).setOrigin(0.5)
        .setInteractive();  
        this.backToMain.on('pointerdown', () => {
          this.scene.sleep('PlayerSelector').run('MainMenu')      
      })
       this.player1 = this.add.image(412, 350, 'Idle')
        
      this.player2 = this.add.image(512, 380, 'idle-ninja')
        .setInteractive()
        this.player2.on('pointerdown', () => {
         
        })
        this.player2.scaleX = 0.165
        this.player2.scaleY = 0.165
        
      this.player3 = this.add.image(612, 375, 'idleknight');
      this.player3.scaleX = 0.155
      this.player3.scaleY = 0.155
          // this.load.image('background', "assets/mainMenuBackground.png")
      
          this.title = this.add.text(512, 125, 'Character Selector', {
            fontFamily: 'Arial Black', fontSize: 40   , color: '#ffffff',
              stroke: '#000000', strokeThickness: 8,
              align: 'center'
            }).setOrigin(0.5);
  
        this.start = this.add.text(512, 600, '< Play Game >', {
          fontFamily: 'Arial Black', fontSize: 45, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5)
        .setInteractive();
        this.start.on('pointerdown', () => {
            this.scene.sleep('PlayerSelector').run('Level')      
        })
      }
}