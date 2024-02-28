
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import {ANIM_ATTACK, ANIM_DEAD, ANIM_IDLE, ANIM_JUMP, ANIM_RUN} from "../../static/assets/swordsman_animations"
/* END-USER-IMPORTS */

export default interface SwordsmanPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class SwordsmanPrefab extends Phaser.Physics.Arcade.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 484, y ?? 225, texture || "Idle", frame ?? 0);

		scene.physics.add.existing(this, false);
		this.body.collideWorldBounds = true;
		this.body.setSize(128, 128, false);

		/* START-USER-CTR-CODE */


		this.scene.events.once("scene-awake", () => this.awake());
		/* END-USER-CTR-CODE */
	}

	public automatic_idle_animation: string = "idle";

	/* START-USER-CODE */

	awake(){
		this.play(this.automatic_idle_animation);
	}
	die(){
		// this.setTint(0xff0000);
		this.play(ANIM_DEAD);
	}
	moveLeft(){
		this.setVelocityX(-300);
		this.play(ANIM_RUN, true)
	}

	moveRight(){
		this.setVelocityX(300);
		this.play(ANIM_RUN, true);
	}
	attack(){
		this.play(ANIM_ATTACK, true)
	}

	stopMoving(){
		this.setVelocity(0);
	    this.setVelocityY(200);
		this.play(ANIM_IDLE, true);
	}
	jump(){
		this.setVelocityY(-420);
		this.play(ANIM_JUMP, true)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
