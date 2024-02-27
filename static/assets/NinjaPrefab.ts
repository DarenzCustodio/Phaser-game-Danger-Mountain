
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import {ANIM_RUN_NINJA, ANIM_IDLE_NINJA, ANIM_DEAD_NINJA, ANIM_DIE_NINJA, ANIM_ATTACK_NINJA, ANIM_CLIMB_NINJA} from "./ninja-animations"
/* END-USER-IMPORTS */

export default interface NinjaPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class NinjaPrefab extends Phaser.Physics.Arcade.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "idle-ninja", frame ?? 0);

		this.scaleX = 0.5;
		this.scaleY = 0.5;
		scene.physics.add.existing(this, false);
		this.body.setSize(240, 450, false);

		// player-platform-collider
		// scene.physics.add.collider(idle_ninja0, platforms.list);

		/* START-USER-CTR-CODE */
		this.scene.events.once("scene-awake",()=> this.awake())
		/* END-USER-CTR-CODE */
	}

	public ninjaanimation: string = "idle-ninja";

	/* START-USER-CODE */

	awake(){
		this.play(this.ninjaanimation);
	}
	die(){
		console.log('inside nipre');
		
		this.setTint(0xff0000);
		this.play(ANIM_DEAD_NINJA, true);
		this.play(ANIM_DIE_NINJA, true);
	}
	moveLeft(){
		this.setVelocityX(-200);
		this.play(ANIM_RUN_NINJA, true);
		this.setFlipX(true)
	}

	moveRight(){
		this.setVelocityX(200);
		this.play(ANIM_RUN_NINJA, true);
		this.setFlipX(false)
		
	}

	stopMoving(){
		this.setVelocity(0);
		// this.setVelocityY(200);
		this.play(ANIM_IDLE_NINJA, true);
	}
	jump(){
		this.setVelocityX(300);
		this.setVelocityY(-600);
	}
	attack(){
		this.setVelocityX(160);
		this.play(ANIM_ATTACK_NINJA,true);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
