
// You can write more code here

/* START OF COMPILED CODE */

import Phaser, { GameObjects } from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface gemPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class gemPrefab extends Phaser.Physics.Arcade.Image {
	
	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "spr_coin_azu", frame ?? 0);

		scene.physics.add.existing(this, false);
		this.body.collideWorldBounds = true;
		this.body.setSize(64, 16, false);

		/* START-USER-CTR-CODE */
		this.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	
	collected(){

		this.disableBody(true, true);
		
	}
	resetStar(){
		this.enableBody(true, this.x, 0, true, true);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
