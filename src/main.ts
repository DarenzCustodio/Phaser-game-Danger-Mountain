import { Boot } from './scenes/Boot';
import { Controls } from './scenes/Controls';
import  Level from "./scenes/Level";
import Level2 from './scenes/Level2';
import { MainMenu } from './scenes/MainMenu';
import { PlayerSelector } from './scenes/PlayerSelect';
import { Preloader } from './scenes/Preloader';
import { PauseMenu } from './scenes/PauseMenu'
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
                y: 300,
                x: 0
            }
        }
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        Level,
        Controls,
        PlayerSelector,
        PauseMenu
        Level2 
    ],
};

export default new Game(config);

