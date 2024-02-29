

import { Scene, GameObjects } from 'phaser';

export class PauseMenu extends Scene
{
  quitGame!: GameObjects.Text
  resumeGame!: GameObjects.Text
  background!: GameObjects.Image
  title!: GameObjects.Text

    constructor ()
    {
        super('PauseMenu');
    }

    create ()
    {

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
      this.title = this.add.text(512, 260, `Game Paused`, {
          fontFamily: 'Arial Black', fontSize: 90, color: '#ffffff',
          stroke: '#000000', strokeThickness: 8,
          align: 'center'
      }).setOrigin(0.5);

        this.quitGame = this.add.text(512, 550, '< Quit >', {
            fontFamily: 'Arial Black', fontSize: 60, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5)
          .setInteractive();
        this.quitGame.on('pointerdown', () => {
            this.scene.sleep(
            'PauseMenu').stop('Level').run('MainMenu')      
        }).setOrigin(0.5);

        this.resumeGame = this.add.text(512, 425, '< Resume >', {
          fontFamily: 'Arial Black', fontSize: 60, color: '#ffffff',
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
