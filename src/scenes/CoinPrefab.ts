
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface CoinPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class CoinPrefab extends Phaser.Physics.Arcade.Image {
	sound: any;
	load: any;

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 195, y ?? 325, texture || "coin3", frame);

		this.scaleX = 2.929085177093522;
		this.scaleY = 2.655114589252231;
		scene.physics.add.existing(this, false);
		this.body.setSize(16, 16, false);

		/* START-USER-CTR-CODE */

		this.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));


		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	// preload(){
	// 	this.load.audio({
    //         key: "coinMusic",
    //         url: "static/assets/collectCoin.mp3",
    //         });
	// }

	// create(){
	// 	const coinSound = this.sound.add("coinMusic");
	// 	coinSound.play({ loop: false });
	// }

	collected(){
		this.disableBody(true, true);
	}
	resetCoin(){
		this.enableBody(true, this.x, 0, true, true);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
