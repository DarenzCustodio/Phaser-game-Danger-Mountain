
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class layer_2_Prefab extends Phaser.GameObjects.Layer {

	constructor(scene: Phaser.Scene) {
		super(scene);

		// p140
		const p140 = scene.physics.add.staticImage(1081, 776, "14", 0);
		p140.body.setSize(128, 93, false);
		this.add(p140);

		// p150
		const p150 = scene.physics.add.staticImage(1205, 776, "15", 0);
		p150.body.setSize(128, 93, false);
		this.add(p150);

		// p160
		const p160 = scene.physics.add.staticImage(1325, 776, "16", 0);
		p160.body.setSize(128, 93, false);
		this.add(p160);

		const up1 = scene.physics.add.staticImage(1550, 776, "14", 0);
		up1.body.setSize(128, 93, false);
		this.add(up1);

		// p150
		const up2 = scene.physics.add.staticImage(1670, 776, "15", 0);
		up2.body.setSize(128, 93, false);
		this.add(up2);

		// p160
		const up3 = scene.physics.add.staticImage(1790, 776, "16", 0);
		up3.body.setSize(128, 93, false);
		this.add(up3);

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
