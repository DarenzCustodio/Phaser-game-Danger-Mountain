
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PlatformPrefab from "../gameComponents/PlatformPrefab";
import PlayerPrefab from "../gameComponents/PlayerPrefab";
import StarPrefab from "../gameComponents/StarPrefab";
import ScorePrefab from "../gameComponents/ScorePrefab";
import Prefab from "../../static/assets/Prefab";
/* START-USER-IMPORTS */
import BombPrefab from "../gameComponents/BombPrefab";
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// leftKey
		const leftKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// rightKey
		const rightKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// upKey
		const upKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// right
		const right = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// left
		const left = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// up
		const up = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// raoni_dorim_mountains_day_highress_01
		const raoni_dorim_mountains_day_highress_01 = this.add.image(1047.686500929647, 614.48876953125, "raoni-dorim-mountains-day-highress-01");
		raoni_dorim_mountains_day_highress_01.scaleX = -2.0578809413272423;
		raoni_dorim_mountains_day_highress_01.scaleY = 4.009677200020188;
		raoni_dorim_mountains_day_highress_01.setOrigin(0.5019708745293673, 0.5);

		// platformsLayer
		const platformsLayer = this.add.layer();

		// platformPrefab
		const platformPrefab = new PlatformPrefab(this, 1220, 1185);
		platformPrefab.scaleX = 3.9;
		platformPrefab.scaleY = 1;
		platformPrefab.tintTopLeft = 7689220;
		platformPrefab.tintTopRight = 7689220;
		platformPrefab.tintBottomLeft = 7689220;
		platformPrefab.tintBottomRight = 7689220;
		platformsLayer.add(platformPrefab);

		// platformPrefab_1
		const platformPrefab_1 = new PlatformPrefab(this, 1200, 1217);
		platformPrefab_1.scaleX = 4;
		platformPrefab_1.scaleY = 1;
		platformPrefab_1.tintTopLeft = 7689220;
		platformPrefab_1.tintTopRight = 7689220;
		platformPrefab_1.tintBottomLeft = 7689220;
		platformPrefab_1.tintBottomRight = 7689220;
		platformsLayer.add(platformPrefab_1);

		// platformPrefab_2
		const platformPrefab_2 = new PlatformPrefab(this, 1240, 1157);
		platformPrefab_2.scaleX = 3.8;
		platformPrefab_2.scaleY = 1;
		platformPrefab_2.tintTopLeft = 7689220;
		platformPrefab_2.tintTopRight = 7689220;
		platformPrefab_2.tintBottomLeft = 7689220;
		platformPrefab_2.tintBottomRight = 7689220;
		platformsLayer.add(platformPrefab_2);

		// platformPrefab_3
		const platformPrefab_3 = new PlatformPrefab(this, 1000, 1249);
		platformPrefab_3.scaleX = 5;
		platformPrefab_3.scaleY = 1;
		platformPrefab_3.tintTopLeft = 1399324;
		platformPrefab_3.tintTopRight = 1399324;
		platformPrefab_3.tintBottomLeft = 1399324;
		platformPrefab_3.tintBottomRight = 1399324;
		platformsLayer.add(platformPrefab_3);

		// player
		const player = new PlayerPrefab(this, 74, 1210);
		this.add.existing(player);

		// starsLayer
		const starsLayer = this.add.layer();

		// star
		const star = new StarPrefab(this, 1565, 1065);
		starsLayer.add(star);

		// star_1
		const star_1 = new StarPrefab(this, 931, 1081);
		starsLayer.add(star_1);

		// star_2
		const star_2 = new StarPrefab(this, 1347, 1067);
		starsLayer.add(star_2);

		// star_3
		const star_3 = new StarPrefab(this, 1184, 1066);
		starsLayer.add(star_3);

		// star_4
		const star_4 = new StarPrefab(this, 446, 1140);
		starsLayer.add(star_4);

		// star_5
		const star_5 = new StarPrefab(this, 695, 1108);
		starsLayer.add(star_5);

		// bombsLayer
		const bombsLayer = this.add.layer();

		// scoreText
		const scoreText = new ScorePrefab(this, 46, 19);
		this.add.existing(scoreText);

		// player0
		this.add.image(371, 1209, "player", 0);

		// player1
		const player1 = new Prefab(this, 182, 1161);
		this.add.existing(player1);
		player1.flipX = false;
		player1.flipY = false;
		player1.body.collideWorldBounds = true;

		// 130
		this.add.image(645, 956, "13", 0);

		// 140
		this.add.image(768, 957, "14", 0);

		// 150
		this.add.image(892, 957, "15", 0);

		// 2
		this.add.image(1448, 953, "2");

		// star_6
		

		// star_7
		const star_7 = this.add.image(776, 872, "star");
		star_7.angle += 1;

		// star_8
		const star_8 = this.add.image(875, 872, "star");
		star_8.angle += 1;

		// star_9
		const star_9 = this.add.image(1443, 850, "star");
		star_9.angle += 1;

		// lists
		const platforms_ = [platformPrefab_2, platformPrefab_1, platformPrefab];

		// player_platforms_collider
		const player_platforms_collider = this.physics.add.collider(player, platformsLayer.list);

		// stars_platforms_collider
		const stars_platforms_collider = this.physics.add.collider(starsLayer.list, platformsLayer.list);

		// player_stars_collider
		const player_stars_collider = this.physics.add.overlap(player, starsLayer.list, this.collectStar as any, undefined, this );

		// bombs_platforms_collider
		const bombs_platforms_collider = this.physics.add.collider(bombsLayer.list, platformsLayer.list);

		// player_bombs_collider
		const player_bombs_collider = this.physics.add.collider(player, bombsLayer.list, this.hitBomb as any, undefined, this);

		// knight_platforms_collider
		this.physics.add.collider(player1, platformsLayer.list);

		// player (prefab fields)
		player.autoPlayAnimation = "left ";

		this.player = player;
		this.starsLayer = starsLayer;
		this.bombsLayer = bombsLayer;
		this.scoreText = scoreText;
		this.player1 = player1;
		this.leftKey = leftKey;
		this.rightKey = rightKey;
		this.upKey = upKey;
		this.right = right;
		this.left = left;
		this.up = up;
		this.platforms_ = platforms_;

		this.events.emit("scene-awake");
	}

	private player!: PlayerPrefab;
	private starsLayer!: Phaser.GameObjects.Layer;
	private bombsLayer!: Phaser.GameObjects.Layer;
	private scoreText!: ScorePrefab;
	private player1!: Prefab;
	private leftKey!: Phaser.Input.Keyboard.Key;
	private rightKey!: Phaser.Input.Keyboard.Key;
	private upKey!: Phaser.Input.Keyboard.Key;
	private right!: Phaser.Input.Keyboard.Key;
	private left!: Phaser.Input.Keyboard.Key;
	private up!: Phaser.Input.Keyboard.Key;
	private platforms_!: PlatformPrefab[];

	/* START-USER-CODE */

	private gameOver = false;

	// Write your code here

	create() {
		this.editorCreate();
		this.initCamera();



        this.input.on('pointerdown', () => {
            this.scene.sleep('Level').run('MainMenu')
			this.player.setPosition(74, 1210)
        });

		
	}
	// player
	// const player = new PlayerPrefab(this, 74, 1210);
	// this.add.existing(player);


	private initCamera(): void {
		this.cameras.main.setSize(this.game.scale.width, this.game.scale.height);
		this.cameras.main.startFollow(this.player1, true, 0.09, 0.09);
		this.cameras.main.setZoom(1.75);
	  }

	private collectStar(player1: Prefab, star: StarPrefab){
		star.collected();

		this.scoreText.addScore(10);

		if(this.noStarActive()){

			// spawn the stars again 
			// for(const obj of this.starsLayer.list){
			// 	const star = obj as StarPrefab;

			// 	star.resetStar();
			// }
			// spawn a bomb 
			var bombX = (this.player1.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

			const bomb = new BombPrefab(this, bombX, 0);
			this.bombsLayer.add(bomb);
		}
	}

	private hitBomb(player: Prefab, bomb: BombPrefab){
		this.physics.pause();
		this.player1.die();
		this.gameOver = true;
	}


	private noStarActive(){

		for(const star of this.starsLayer.list){
			if(star.active){
				return false;
			}
		}
		return true;
	}

	update(){
		if(this.gameOver){
			return;
		}

		// move to the left 
		this.updatePlayer();
	}

	private updatePlayer() {
		
		if (this.left.isDown) {
			this.player1.moveLeft();

		} else if (this.right.isDown) {
			this.player1.moveRight()
		} else {
			this.player1.stopMoving();

		}
		if (this.up.isDown && (this.player.body.touching.down || this.player.body.onFloor())) {
			this.player1.jump();
		}
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
