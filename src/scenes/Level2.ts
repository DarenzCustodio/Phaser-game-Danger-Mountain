
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import NinjaPrefab from "../../static/assets/NinjaPrefab";
import NinjaPlatformsPrefab from "./NinjaPlatformsPrefab";
import layer_2_Prefab from "./layer_2_Prefab";
import gemPrefab from "./gemPrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level2 extends Phaser.Scene {
	
	
	constructor() {
		super("Level2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// right
		const right = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// left
		const left = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// up
		const up = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// down
		const down = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// space
		const space = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// bG
		const bG = this.add.image(546, 372, "BG");
		bG.scaleX = 6;
		bG.scaleY = 3;

		// idle_ninja0
		const idle_ninja0 = new NinjaPrefab(this, 50, 1024);
		this.add.existing(idle_ninja0);
		idle_ninja0.body.bounce.x = 0;
		idle_ninja0.body.bounce.y = 0;
		idle_ninja0.body.collideWorldBounds = true;
		idle_ninja0.body.checkCollision.up = true;
		idle_ninja0.body.checkCollision.down = true;
		idle_ninja0.body.checkCollision.left = true;
		idle_ninja0.body.checkCollision.right = true;
		idle_ninja0.body.pushable = true;

		//enemy Knight
		// const knight_enemy = this.physics.add.sprite(700,1024, "knight_idle");
		// this.add.existing(knight_enemy);
		// knight_enemy.body.bounce.x = 0;
		// knight_enemy.body.bounce.y = 0;
		// knight_enemy.body.collideWorldBounds = true;
		// knight_enemy.body.checkCollision.up = true;
		// knight_enemy.body.checkCollision.down = true;
		// knight_enemy.body.checkCollision.left = true;
		// knight_enemy.body.checkCollision.right = true;
		// knight_enemy.body.pushable = true;


		// monedaP0
		const monedaP0 = new gemPrefab(this,585, 1018, "MonedaP", 0);
		monedaP0.body.collideWorldBounds = true;
		monedaP0.body.setSize(80, 16, false);

		// cactus__1_0
		const cactus__1_0 = this.physics.add.image(1019, 1022, "Cactus (1)", 0);
		cactus__1_0.body.collideWorldBounds =true;
		cactus__1_0.setVelocity(0);
		cactus__1_0.scaleX = 1.5;
		cactus__1_0.scaleY = 1.5;

		// cactus__2_0
		const cactus__2_0 = this.physics.add.image(2561, 1060, "Cactus (2)", 0);
		cactus__2_0.body.collideWorldBounds = true;
		cactus__2_0.setVelocity(0);
		cactus__2_0.scaleX = 3;
		cactus__2_0.scaleY = 3;

		// bush__1_0
		const bush__1_0 = this.add.image(-522, 600, "Bush (1)", 0);
		bush__1_0.scaleX = 10;
		bush__1_0.scaleY = 10;

		// skeleton0
		const skeleton0 = this.add.image(2275, 558, "Skeleton", 0);
		skeleton0.scaleX = 3;
		skeleton0.scaleY = 3;
		skeleton0.angle = -10;

		// layer_1
		const layer_1 = new NinjaPlatformsPrefab(this);
		this.add.existing(layer_1);

		// gemlayer
		const gemlayer = this.add.layer();

		// monedaR0
		const monedaR0 = new gemPrefab(this,1061, 692, "MonedaR", 0);
		monedaR0.body.collideWorldBounds = true;
		monedaR0.body.setSize(80, 16, false);
		gemlayer.add(monedaR0);

		// monedaR4
		const monedaR4 = new gemPrefab(this,1157, 691, "MonedaR", 4);
		monedaR4.body.collideWorldBounds = true;
		monedaR4.body.setSize(80, 16, false);
		gemlayer.add(monedaR4);

		// monedaR
		const monedaR = new gemPrefab(this,1279, 696, "MonedaR", 0);
		monedaR.body.collideWorldBounds = true;
		monedaR.body.setSize(80, 16, false);
		gemlayer.add(monedaR);

		// spr_coin_azu0
		const spr_coin_azu0 = new gemPrefab(this,405, 1020, "spr_coin_azu", 0);
		spr_coin_azu0.body.collideWorldBounds = true;
		spr_coin_azu0.body.setSize(64, 16, false);
		gemlayer.add(spr_coin_azu0);

		// spr_coin_strip40
		const spr_coin_strip40 = new gemPrefab(this,767, 1010, "spr_coin_strip4", 0);
		spr_coin_strip40.body.collideWorldBounds = true;
		spr_coin_strip40.body.setSize(64, 16, false);
		gemlayer.add(spr_coin_strip40);

		// monedaR_1
		const monedaR_1 = new gemPrefab(this,1275, 1002, "MonedaR", 0);
		monedaR_1.body.collideWorldBounds = true;
		monedaR_1.body.setSize(80, 16, false);
		gemlayer.add(monedaR_1);

		// spr_coin_azu
		const spr_coin_azu = new gemPrefab(this,1433, 995, "spr_coin_azu", 0);
		spr_coin_azu.body.collideWorldBounds = true;
		spr_coin_azu.body.setSize(64, 16, false);
		gemlayer.add(spr_coin_azu);

		// spr_coin_strip
		const spr_coin_strip = new gemPrefab(this,1833, 1066, "spr_coin_strip4", 0);
		spr_coin_strip.body.collideWorldBounds = true;
		spr_coin_strip.body.setSize(64, 16, false);
		gemlayer.add(spr_coin_strip);

		// layer_2
		const layer_2 = new layer_2_Prefab(this);
		this.add.existing(layer_2);

		// lists
		// const platforms = [p140, p150, p160, p10, p1, p30, _1, _2, _3, _37, _36, _35, _34, _33, _32, _31, _30, _29, _28, _27, _26, _25, _24, _23, _22, _21, _20, _19, _18, _17, _16, _15, _14, _13, _12, _11, _10, _9, _8, _7, _6, _5, _4];
		const gemList = [spr_coin_azu0, monedaR, monedaR4, monedaR0, monedaP0, spr_coin_strip40, monedaR_1, spr_coin_azu, spr_coin_strip];

		// ninja_platform_collider
		const ninja_platform_collider = this.physics.add.collider(idle_ninja0, layer_1.list);

		// Gem_PlayerCollider
		const gem_PlayerCollider = this.physics.add.collider(idle_ninja0, gemlayer.list,this.collectGem as any, undefined, this);// this.collectGem as any, undefined, this

		// gem_platform_collider
		const gem_platform_collider = this.physics.add.collider(gemlayer.list, layer_1.list);

		// platform_layer2_collider
		const platform_layer2_collider = this.physics.add.collider(layer_1.list, layer_2.list);

		// ninja_layer2_collider
		const ninja_layer2_collider = this.physics.add.collider(idle_ninja0, layer_2.list);

		// gem_layer2_collider
		const gem_layer2_collider = this.physics.add.collider(gemlayer.list, layer_2.list);

		//knight_enemy
		// const knight_enemy_platform_collider = this.physics.add.collider(knight_enemy, layer_1.list)

		// const knight_enemy_ninja_collider = this.physics.add.collider(idle_ninja0, knight_enemy, this.hitEnemies);

		const enemy = this.physics.add.group();

		this.physics.add.collider(cactus__1_0, layer_1.list);

		this.physics.add.collider(cactus__2_0, layer_1.list);

		this.physics.add.collider(idle_ninja0, cactus__1_0, this.hitEnemy,undefined,this);

		this.idle_ninja0 = idle_ninja0;
		this.right = right;
		this.left = left;
		this.up = up;
		this.down = down;
		this.space = space;
		this.gemList = gemList;

		this.events.emit("scene-awake");
	}

	private idle_ninja0!: NinjaPrefab;
	private right!: Phaser.Input.Keyboard.Key;
	private left!: Phaser.Input.Keyboard.Key;
	private up!: Phaser.Input.Keyboard.Key;
	private down!: Phaser.Input.Keyboard.Key;
	private space!: Phaser.Input.Keyboard.Key;
	private gemList!: Phaser.Physics.Arcade.Image[];

	/* START-USER-CODE */
	private gameOver = false;
	// Write your code here

	create() {
		
		this.editorCreate();
		this.initCamera();
		// scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px' });
        this.input.on('pointerdown', () => {
            this.scene.sleep('Level2').run('MainMenu')
			this.idle_ninja0.body.setGravityY(300);
			this.idle_ninja0.setPosition(50, 1024)
        });


	}
	private initCamera(): void {
		this.cameras.main.setSize(this.game.scale.width, this.game.scale.height);
		this.cameras.main.startFollow(this.idle_ninja0, true, 0.09, 0.09);
		this.cameras.main.setZoom(1);
	  }
    private collectGem (player:NinjaPrefab, coin:gemPrefab)
	  {
		
		coin.collected();
		
	  }
	private hitEnemy(idle_ninja0:any, cactus__1_0:any){
		
		// console.log(idle_ninja0.anims.currentAnim.key,'frame');
		
		// idle_ninja0.setTint(0xff0000);
		
		if(idle_ninja0.anims.currentAnim.key === 'attack-ninja'){
			console.log('attack mode');
			cactus__1_0.disableBody(true,true);
		}else {
				console.log('running');
				this.physics.pause();
				idle_ninja0.setTint(0xff0000);

				idle_ninja0.anims.play('die-ninja');
			
		}
		
		// idle_ninja0.anims.play('ANIM_DIE_NINJA');
	    this.gameOver = true;
	}
	// private hitEnemies(idle_ninja0 :any, knight_enemy:any){
	// 	console.log(idle_ninja0.anims.currentAnim.key,'player');
	// 	// console.log(knight_enemy.anims.currentAnim.key,'enemy');
		
	// 	if(idle_ninja0.anims.currentAnim.key === 'attack-ninja'){
	// 		console.log('attack mode');
	// 		knight_enemy.disableBody(true,true);
	// 	}else {
	// 			console.log('running');
	// 		     this.physics.pause();
	// 			// knight_enemy.physics.pause();
	// 			idle_ninja0.die()
			
	// 	}
		
	// 	// idle_ninja0.anims.play('ANIM_DIE_NINJA');
	//     this.gameOver = true;
	// }
	  update(){
		if(this.gameOver){
			// this.scene.restart();
			// this.events.emit("scene-awake");
			return;
		}

		// move to the left 
		this.updatePlayer();
	}

	private updatePlayer() {

		if (this.left.isDown) {
			this.idle_ninja0.moveLeft();

		} else if (this.right.isDown) {
			this.idle_ninja0.moveRight()
		} else {
			this.idle_ninja0.stopMoving();

		}
		if (this.up.isDown && (this.idle_ninja0.body.touching.down || this.idle_ninja0.body.onFloor())) {
			this.idle_ninja0.jump();
		}
		if(this.space.isDown){
			this.idle_ninja0.attack();		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
