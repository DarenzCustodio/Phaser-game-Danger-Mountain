
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Scene2PlatformPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Scene2PlatformPrefab extends Phaser.Physics.Arcade.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "1", frame ?? 0);

		this.setOrigin(1.3434156273248687, 0.8436137740953171);
		scene.physics.add.existing(this, false);
		this.body.collideWorldBounds = true;
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
