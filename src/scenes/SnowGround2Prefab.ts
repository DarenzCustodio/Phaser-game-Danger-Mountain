
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface SnowGround2Prefab {

	 body: Phaser.Physics.Arcade.StaticBody;
}

export default class SnowGround2Prefab extends Phaser.Physics.Arcade.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 420, y ?? 275, texture || "11", frame);

		this.flipX = true;
		scene.physics.add.existing(this, true);
		this.body.setSize(128, 128, false);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
