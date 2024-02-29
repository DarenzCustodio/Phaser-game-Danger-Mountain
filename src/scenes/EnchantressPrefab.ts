
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import { ANIM_E_DEAD, ANIM_E_IDLE, ANIM_E_JUMP, ANIM_E_RUN } from "./enchantress_animations";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface EnchantressPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class EnchantressPrefab extends Phaser.Physics.Arcade.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 407, y ?? 472, texture || "EnchantressIdle", frame ?? 0);

		scene.physics.add.existing(this, false);
		this.body.setSize(128, 128, false);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public autoPlayEnhantressAnimation: string = "e_Idle";

	/* START-USER-CODE */

	awake(){
		this.play(this.autoPlayEnhantressAnimation);
	}
	die(){
		// this.setTint(0xff0000);
		this.play(ANIM_E_DEAD);
	}
	moveLeft(){
		this.setVelocityX(-300);
		this.play(ANIM_E_RUN, true)
	}

	moveRight(){
		this.setVelocityX(300);
		this.play(ANIM_E_RUN, true);
	}
	stopMoving(){
		this.setVelocity(0);
	    this.setVelocityY(300);
		this.play(ANIM_E_IDLE, true);
	}
	jump(){
		this.setVelocityY(-420);
		this.play(ANIM_E_JUMP, true)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
