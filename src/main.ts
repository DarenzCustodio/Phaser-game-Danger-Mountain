import { Boot } from './scenes/Boot';
import Level from './scenes/Level';
import { MainMenu } from './scenes/MainMenu';
import { Preloader } from './scenes/Preloader';
import Level2 from './scenes/Level2';
import { Game, Types } from "phaser";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 3000,
    height: 1250,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Phaser.Scale.FIT,
    },
    physics: {
        default: "arcade", 
        arcade: {
            debug: false,
            gravity: {
                y: 300,
                x: 0
            }
        }
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        Level2
    ]
};

export default new Game(config);

