import { Scene, GameObjects } from 'phaser'

export class PlayerSelector extends Scene
{
    title!: GameObjects.Text;
    start!: GameObjects.Text;
    player1!: GameObjects.Text;
    player2!: GameObjects.Text;
    player3!: GameObjects.Text;
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

       this.player1 = this.add.text(412, 350, 'player1 ', {
        fontFamily: 'Arial Black', fontSize: 20, color: '#ffffff',
          stroke: '#000000', strokeThickness: 8,
          align: 'center'
        }).setOrigin(0.5)
        

        this.player2 = this.add.text(512, 350, 'player2 ', {
          fontFamily: 'Arial Black', fontSize: 20, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
          }).setOrigin(0.5)
        


          this.player3 = this.add.text(612, 350, 'player3 ', {
            fontFamily: 'Arial Black', fontSize: 20, color: '#ffffff',
              stroke: '#000000', strokeThickness: 8,
              align: 'center'
            }).setOrigin(0.5);

          // this.load.image('background', "assets/mainMenuBackground.png")
      
          this.title = this.add.text(512, 125, 'Character Selector', {
            fontFamily: 'Arial Black', fontSize: 40, color: '#ffffff',
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
