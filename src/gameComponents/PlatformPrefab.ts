
// You can write more code here

/* START OF COMPILED CODE */
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface PlatformPrefab {

	 body: Phaser.Physics.Arcade.StaticBody;
}

export default class PlatformPrefab extends Phaser.Physics.Arcade.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 250, y ?? 87, texture || "platform", frame);

		

		console.log("Is scene a valid Phaser.Scene instance?", scene instanceof Phaser.Scene);
		this.tintFill = true;
		this.tintTopLeft = 15577895;
		this.tintTopRight = 15577895;
		this.tintBottomLeft = 625975;
		scene.physics.add.existing(this, true);
		this.body.setSize(400, 32, false);

		/* START-USER-CTR-CODE */
		// Write your code here.
		
		this.scene.events.once("scene-awake", ()=> {
			this.refreshBody();
		})


		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
