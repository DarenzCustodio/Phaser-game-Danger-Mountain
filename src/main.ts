import { Boot } from './scenes/Boot';
import Level from './scenes/Level';
import { MainMenu } from './scenes/MainMenu';
import { Preloader } from './scenes/Preloader';

import { Game, Types } from "phaser";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 3000,
    height: 2000,
    parent: 'game-container',
    backgroundColor: 0x27ae60,
    scale: {
        

        // mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
        default: "arcade", 
        arcade: {
            debug: false,
            gravity: {
                y: 300
            }
        }
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        Level
    ],
    zoom:1.15
   
};

export default new Game(config);

