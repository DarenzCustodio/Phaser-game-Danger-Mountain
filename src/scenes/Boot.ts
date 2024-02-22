import { Scene } from 'phaser';
import preloadAssetPackUrl from "../../static/assets/preload-asset-pack.json";
import assetPackUrl from "../../static/assets/asset-pack.json"
// import animationsUrl from "../../static/assets/animations.json"

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.
        // this.load.pack("pack", preloadAssetPackUrl);
        // this.load.pack("animations", animationsUrl)
        this.load.pack("assets", assetPackUrl)
        this.load.pack("pack", preloadAssetPackUrl);
        this.load.image('background', 'assets/bg.png');
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
