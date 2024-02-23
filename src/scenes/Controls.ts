import { Scene, GameObjects } from 'phaser';

export class Controls extends Scene
{
    background!: GameObjects.Image;
    logo!: GameObjects.Image;
    title!: GameObjects.Text;

    constructor ()
    {
        super('Controls');
    }

    create ()
    {
        console.log("hello")
        this.background = this.add.image(512, 384, 'background');

        this.logo = this.add.image(512, 300, 'logo');

        this.input.on('pointerdown', () => {
            console.log("clicked")
            this.scene.sleep('Controls').run('MainMenu')
        });
    }
}
