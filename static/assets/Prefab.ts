
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */

import { ANIM_IDLE,ANIM_RIGHT_KNIGHT} from "./knight-animations"
/* END-USER-IMPORTS */

export default interface Prefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Prefab extends Phaser.Physics.Arcade.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 129, y ?? 183, texture || "knight_idle", frame ?? 0);

		this.scaleX = 0.2;
		this.scaleY = 0.2;
		scene.physics.add.existing(this, false);
		this.body.setSize(587, 707, false);

		/* START-USER-CTR-CODE */
		this.scene.events.once("scene-awake",()=> this.awake());
		/* END-USER-CTR-CODE */
	}

	public automatic_animation: string = "right-knight";

	/* START-USER-CODE */

	awake(){
		this.play(this.automatic_animation);
	}
	die(){
		console.log('inside prefab');
		
		this.setTint(0xff0000);
		this.play(ANIM_IDLE);
	}
	moveLeft(){
		this.setVelocityX(-160);
		this.play(ANIM_RIGHT_KNIGHT, true);
		this.setFlipX(true)
	}

	moveRight(){
		this.setVelocityX(160);
		this.play(ANIM_RIGHT_KNIGHT, true);
		this.setFlipX(false)
		
	}

	stopMoving(){
		this.setVelocity(0);
		// this.setVelocityY(200);
		this.play(ANIM_IDLE, true);
	}
	jump(){
		this.setVelocityY(-150);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
