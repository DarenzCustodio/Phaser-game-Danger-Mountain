

import { Scene, GameObjects } from 'phaser';

export class PauseMenu extends Scene
{
  quitGame!: GameObjects.Text
  resumeGame!: GameObjects.Text

    constructor ()
    {
        super('PauseMenu');
    }

    create ()
    {


        this.quitGame = this.add.text(512, 230, 'Quit', {
            fontFamily: 'Arial Black', fontSize: 50, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5)
          .setInteractive();
        this.quitGame.on('pointerdown', () => {
            this.scene.sleep(
            'PauseMenu').stop('Level').run('MainMenu')      
        }).setOrigin(0.5);

        this.resumeGame = this.add.text(512, 560, 'Resume', {
          fontFamily: 'Arial Black', fontSize: 50, color: '#ffffff',
          stroke: '#000000', strokeThickness: 8,
          align: 'center'
      }).setOrigin(0.5)
        .setInteractive();
      this.resumeGame.on('pointerdown', () => {
          this.scene.sleep(
          'PauseMenu').run('Level')      
      }).setOrigin(0.5);

    }
}
