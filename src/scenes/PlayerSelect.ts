import { Scene, GameObjects } from 'phaser'
import { ANIM_IDLE } from "../../static/assets/swordsman_animations";
import {ANIM_E_IDLE} from "./enchantress_animations";
export class PlayerSelector extends Scene
{
    title!: GameObjects.Text;
    start1!: GameObjects.Text;
    start2!: GameObjects.Text;
    player1!: GameObjects.Image;
    player2!: GameObjects.Image;
    player3!: GameObjects.Image;
    backToMain!: GameObjects.Text;
    background!: GameObjects.Image;
    constructor ()
    {
        super('PlayerSelector');
    }
    create ()
    {

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
  
      
      this.backToMain = this.add.text(75, 50, '< Main Menu >', {
        fontFamily: 'Arial Black', fontSize: 15, color: '#ffffff',
          stroke: '#000000', strokeThickness: 8,
          align: 'center'
        }).setOrigin(0.5)
        .setInteractive();  
        this.backToMain.on('pointerdown', () => {
          this.scene.sleep('PlayerSelector').run('MainMenu')      
      })
       this.player1 = this.add.sprite(325, 275, 'Idle').setInteractive().setScale(4).play(ANIM_IDLE)
        
      this.player2 = this.add.sprite(700, 275, 'EnchantressIdle').setInteractive().setScale(4).play(ANIM_E_IDLE)
        
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

     

       this.title = this.add.text(512, 125, 'Character Select', {
            fontFamily: 'Arial Black', fontSize: 90   , color: '#ffffff',
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