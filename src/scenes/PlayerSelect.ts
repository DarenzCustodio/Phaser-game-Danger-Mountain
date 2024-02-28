import { Scene, GameObjects } from 'phaser'
export class PlayerSelector extends Scene
{
    title!: GameObjects.Text;
    start1!: GameObjects.Text;
    start2!: GameObjects.Text;
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
       this.player1 = this.add.sprite(450, 350, 'Idle').setInteractive()
        
      this.player2 = this.add.sprite(550, 350, 'EnchantressIdle').setInteractive()
        
      //Group the player
      const playerGroup = this.add.group([this.player1,this.player2]);

      //Select a character for playing
      this.player1.on("pointerdown", () =>{
        // this.player2.postFX.destroy();
        this.player1.preFX?.addGlow();
        this.player2.preFX?.clear();
          this.start1.setInteractive();
          this.start1.setVisible(true);
      });

      this.player2.on("pointerdown", () =>{
        // this.player1.postFX.destroy();
        this.player1.preFX?.clear();
        this.player2.preFX?.addGlow();
          this.start2.setInteractive();
          this.start2.setVisible(true);
      });

     

       this.title = this.add.text(512, 125, 'Character Selector', {
            fontFamily: 'Arial Black', fontSize: 40   , color: '#ffffff',
              stroke: '#000000', strokeThickness: 8,
              align: 'center'
            }).setOrigin(0.5);
  
        //start scene with selected character
        this.start1 = this.add.text(512, 600, '< Play Game >', {
          fontFamily: 'Arial Black', fontSize: 45, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5)
        .setInteractive().setVisible(false);
        this.start1.on('pointerdown', () => {
            // this.scene.sleep('PlayerSelector').run('Level')
            this.scene.start("Level", {image: "Idle"});	      
        })
        this.start2 = this.add.text(512, 600, '< Play Game >', {
          fontFamily: 'Arial Black', fontSize: 45, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5)
        .setInteractive().setVisible(false);
        this.start2.on('pointerdown', () => {
            // this.scene.sleep('PlayerSelector').run('Level')
            this.scene.start("Level", {image: "EnchantressIdle"});
        })
      }
      
}