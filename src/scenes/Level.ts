// You can write more code here
/* START OF COMPILED CODE */

import Phaser from "phaser";
import SnowGround2Prefab from "./SnowGround2Prefab";
import SnowPlatformLeftPrefab from "./SnowPlatformLeftPrefab";
import SnowPlatformMiddlePrefab from "./SnowPlatformMiddlePrefab";
import SnowPlatformRightPrefab from "./SnowPlatformRightPrefab";
import SwordsmanPrefab from "./SwordsmanPrefab";
import EnchantressPrefab from "./EnchantressPrefab";
import CoinPrefab from "./CoinPrefab";
import ScorePrefab from "../gameComponents/ScorePrefab";
/* START-USER-IMPORTS */
import BombPrefab from "../gameComponents/BombPrefab";
import SnowballPrefab from "./SnowballPrefab";
import { ANIM_IDLE } from "../../static/assets/swordsman_animations";
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// runRight
		const runRight = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// jump
		const jump = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// runLeft
		const runLeft = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// attackKey
		const attackKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// e_runRightKey
		const e_runRightKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// e_jumpKey
		const e_jumpKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// e_runLeftKey
		const e_runLeftKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// background_glacial_mountains
		const background_glacial_mountains = this.add.image(1725, 710, "background_glacial_mountains");
		background_glacial_mountains.scaleX = 19.160102056153434;
		background_glacial_mountains.scaleY = 10.78231466082158;

		// snowGroundLayer
		const snowGroundLayer = this.add.layer();

		// SnowGround2
		const snowGround2 = new SnowGround2Prefab(this, -265, 1195);
		snowGroundLayer.add(snowGround2);

		// SnowGround_1
		const snowGround_1 = new SnowGround2Prefab(this, -140, 1195);
		snowGround_1.flipX = false;
		snowGround_1.flipY = false;
		snowGroundLayer.add(snowGround_1);

		// SnowGround_2
		const snowGround_2 = new SnowGround2Prefab(this, -15, 1195);
		snowGroundLayer.add(snowGround_2);

		// SnowGround_3
		const snowGround_3 = new SnowGround2Prefab(this, 110, 1195);
		snowGround_3.flipX = false;
		snowGround_3.flipY = false;
		snowGroundLayer.add(snowGround_3);

		// SnowGround_4
		const snowGround_4 = new SnowGround2Prefab(this, 235, 1195);
		snowGroundLayer.add(snowGround_4);

		// SnowGround_5
		const snowGround_5 = new SnowGround2Prefab(this, 610, 1195);
		snowGround_5.flipX = false;
		snowGround_5.flipY = false;
		snowGroundLayer.add(snowGround_5);

		// SnowGround_6
		const snowGround_6 = new SnowGround2Prefab(this, 485, 1195);
		snowGroundLayer.add(snowGround_6);

		// SnowGround_7
		const snowGround_7 = new SnowGround2Prefab(this, 360, 1195);
		snowGround_7.flipX = false;
		snowGround_7.flipY = false;
		snowGroundLayer.add(snowGround_7);

		// SnowGround_8
		const snowGround_8 = new SnowGround2Prefab(this, 735, 1195);
		snowGroundLayer.add(snowGround_8);

		// SnowGround_9
		const snowGround_9 = new SnowGround2Prefab(this, 1360, 1195);
		snowGround_9.flipX = false;
		snowGround_9.flipY = false;
		snowGroundLayer.add(snowGround_9);

		// SnowGround_10
		const snowGround_10 = new SnowGround2Prefab(this, 1485, 1195);
		snowGroundLayer.add(snowGround_10);

		// SnowGround_12
		const snowGround_12 = new SnowGround2Prefab(this, 1235, 1195);
		snowGroundLayer.add(snowGround_12);

		// SnowGround_13
		const snowGround_13 = new SnowGround2Prefab(this, 1110, 1195);
		snowGround_13.flipX = false;
		snowGround_13.flipY = false;
		snowGroundLayer.add(snowGround_13);

		// SnowGround_14
		const snowGround_14 = new SnowGround2Prefab(this, 985, 1195);
		snowGroundLayer.add(snowGround_14);

		// SnowGround_15
		const snowGround_15 = new SnowGround2Prefab(this, 860, 1195);
		snowGround_15.flipX = false;
		snowGround_15.flipY = false;
		snowGroundLayer.add(snowGround_15);

		// SnowGround_11
		const snowGround_11 = new SnowGround2Prefab(this, 1585, 1195);
		snowGroundLayer.add(snowGround_11);

		// SnowGround_16
		const snowGround_16 = new SnowGround2Prefab(this, 2710, 1195);
		snowGround_16.flipX = false;
		snowGround_16.flipY = false;
		snowGroundLayer.add(snowGround_16);

		// SnowGround_17
		const snowGround_17 = new SnowGround2Prefab(this, 2835, 1195);
		snowGroundLayer.add(snowGround_17);

		// SnowGround_18
		const snowGround_18 = new SnowGround2Prefab(this, 2960, 1195);
		snowGround_18.flipX = false;
		snowGround_18.flipY = false;
		snowGroundLayer.add(snowGround_18);

		// SnowGround_22
		const snowGround_22 = new SnowGround2Prefab(this, 2585, 1195);
		snowGroundLayer.add(snowGround_22);

		// SnowGround_23
		const snowGround_23 = new SnowGround2Prefab(this, 2210, 1195);
		snowGround_23.flipX = false;
		snowGround_23.flipY = false;
		snowGroundLayer.add(snowGround_23);

		// SnowGround_24
		const snowGround_24 = new SnowGround2Prefab(this, 2335, 1195);
		snowGroundLayer.add(snowGround_24);

		// SnowGround_25
		const snowGround_25 = new SnowGround2Prefab(this, 2460, 1195);
		snowGround_25.flipX = false;
		snowGround_25.flipY = false;
		snowGroundLayer.add(snowGround_25);

		// SnowGround_26
		const snowGround_26 = new SnowGround2Prefab(this, 2085, 1195);
		snowGroundLayer.add(snowGround_26);

		// SnowGround_27
		const snowGround_27 = new SnowGround2Prefab(this, 1960, 1195);
		snowGround_27.flipX = false;
		snowGround_27.flipY = false;
		snowGroundLayer.add(snowGround_27);

		// SnowGround_28
		const snowGround_28 = new SnowGround2Prefab(this, 1835, 1195);
		snowGroundLayer.add(snowGround_28);

		// SnowGround_29
		const snowGround_29 = new SnowGround2Prefab(this, 1710, 1195);
		snowGround_29.flipX = false;
		snowGround_29.flipY = false;
		snowGroundLayer.add(snowGround_29);

		// snowPlatformLayer
		const snowPlatformLayer = this.add.layer();

		// snowPlatformLeftPrefab
		const snowPlatformLeftPrefab = new SnowPlatformLeftPrefab(this, 335, 900);
		snowPlatformLayer.add(snowPlatformLeftPrefab);

		// snowPlatformMiddle
		const snowPlatformMiddle = new SnowPlatformMiddlePrefab(this, 460, 900);
		snowPlatformLayer.add(snowPlatformMiddle);

		// snowPlatformRight
		const snowPlatformRight = new SnowPlatformRightPrefab(this, 585, 900);
		snowPlatformLayer.add(snowPlatformRight);

		// snowPlatformLeftPrefab_1
		const snowPlatformLeftPrefab_1 = new SnowPlatformLeftPrefab(this, 905, 735);
		snowPlatformLayer.add(snowPlatformLeftPrefab_1);

		// snowPlatformRight_1
		const snowPlatformRight_1 = new SnowPlatformRightPrefab(this, 1155, 735);
		snowPlatformLayer.add(snowPlatformRight_1);

		// snowPlatformMiddle_1
		const snowPlatformMiddle_1 = new SnowPlatformMiddlePrefab(this, 1030, 735);
		snowPlatformLayer.add(snowPlatformMiddle_1);

		// snowPlatformLeftPrefab_2
		const snowPlatformLeftPrefab_2 = new SnowPlatformLeftPrefab(this, 1505, 925);
		snowPlatformLayer.add(snowPlatformLeftPrefab_2);

		// snowPlatformRight_2
		const snowPlatformRight_2 = new SnowPlatformRightPrefab(this, 1755, 925);
		snowPlatformLayer.add(snowPlatformRight_2);

		// snowPlatformMiddle_2
		const snowPlatformMiddle_2 = new SnowPlatformMiddlePrefab(this, 1630, 925);
		snowPlatformLayer.add(snowPlatformMiddle_2);

		// snowPlatformLeftPrefab_3
		const snowPlatformLeftPrefab_3 = new SnowPlatformLeftPrefab(this, 2020, 725);
		snowPlatformLayer.add(snowPlatformLeftPrefab_3);

		// snowPlatformMiddle_3
		const snowPlatformMiddle_3 = new SnowPlatformMiddlePrefab(this, 2145, 725);
		snowPlatformLayer.add(snowPlatformMiddle_3);

		// snowPlatformRight_3
		const snowPlatformRight_3 = new SnowPlatformRightPrefab(this, 2270, 725);
		snowPlatformLayer.add(snowPlatformRight_3);

		// snowPlatformLeftPrefab_4
		const snowPlatformLeftPrefab_4 = new SnowPlatformLeftPrefab(this, 2525, 915);
		snowPlatformLayer.add(snowPlatformLeftPrefab_4);

		// snowPlatformRight_4
		const snowPlatformRight_4 = new SnowPlatformRightPrefab(this, 2775, 915);
		snowPlatformLayer.add(snowPlatformRight_4);

		// snowPlatformMiddle_4
		const snowPlatformMiddle_4 = new SnowPlatformMiddlePrefab(this, 2650, 915);
		snowPlatformLayer.add(snowPlatformMiddle_4);

		// swordsman
		const swordsman = new SwordsmanPrefab(this, 16, 1043);
		this.add.existing(swordsman);
		swordsman.body.collideWorldBounds = true;

		// enchantress
		const enchantress = new EnchantressPrefab(this, 205, 1050);
		this.add.existing(enchantress);

		// coinsLayer
		const coinsLayer = this.add.layer();

		// coin_1
		const coin_1 = new CoinPrefab(this, 360, 760);
		coinsLayer.add(coin_1);

		// coin_2
		const coin_2 = new CoinPrefab(this, 560, 735);
		coinsLayer.add(coin_2);

		// coin_3
		const coin_3 = new CoinPrefab(this, 835, 985);
		coinsLayer.add(coin_3);

		// coin_4
		const coin_4 = new CoinPrefab(this, 975, 620);
		coinsLayer.add(coin_4);

		// coin_5
		const coin_5 = new CoinPrefab(this, 1135, 640);
		coinsLayer.add(coin_5);

		// coin_6
		const coin_6 = new CoinPrefab(this, 1300, 1045);
		coinsLayer.add(coin_6);

		// coin_7
		const coin_7 = new CoinPrefab(this, 1605, 825);
		coinsLayer.add(coin_7);

		// coin_8
		const coin_8 = new CoinPrefab(this, 2020, 1005);
		coinsLayer.add(coin_8);

		// coin_9
		const coin_9 = new CoinPrefab(this, 2100, 605);
		coinsLayer.add(coin_9);

		// coin_10
		const coin_10 = new CoinPrefab(this, 2630, 780);
		coinsLayer.add(coin_10);

		// snowballsLayer
		const snowballsLayer = this.add.layer();

		// scoreText
		const scoreText = new ScorePrefab(this, 20, 995);
		this.add.existing(scoreText);
		scoreText.tintFill = true;
		scoreText.tintTopLeft = 14603783;
		scoreText.tintTopRight = 14603783;
		scoreText.tintBottomLeft = 14603783;
		scoreText.tintBottomRight = 14603783;
		scoreText.setStyle({ "fontFamily": "Courier", "fontSize": "40px" });

		// lists
		const platforms_: Array<any> = [];
		const snowGround = [snowGround2, snowGround_29, snowGround_28, snowGround_27, snowGround_26, snowGround_25, snowGround_24, snowGround_23, snowGround_22, snowGround_18, snowGround_17, snowGround_16, snowGround_11, snowGround_15, snowGround_14, snowGround_13, snowGround_12, snowGround_10, snowGround_9, snowGround_8, snowGround_7, snowGround_6, snowGround_5, snowGround_4, snowGround_3, snowGround_2, snowGround_1];
		const snowPlatforms = [snowPlatformRight, snowPlatformMiddle];

		// swordsman_snowGround_collider
		const swordsman_snowGround_collider = this.physics.add.collider(swordsman, snowGroundLayer.list);

		// swordsman_snowPlatforms_collider
		this.physics.add.collider(swordsman, snowPlatformLayer.list);

		// coins_snowGround_collider
		const coins_snowGround_collider = this.physics.add.collider(coinsLayer.list, snowGroundLayer.list);

		// coins_snowPlatforms_collider
		const coins_snowPlatforms_collider = this.physics.add.collider(coinsLayer.list, snowPlatformLayer.list);

		// swordsman_coins_collider
		const swordsman_coins_collider = this.physics.add.overlap(swordsman, coinsLayer.list, this.collectCoins as any, undefined, this);

		// snowballs_snowGround_collider
		const snowballs_snowGround_collider = this.physics.add.collider(snowballsLayer.list, snowGroundLayer.list);

		// snowballs_snowPlatforms_collider
		const snowballs_snowPlatforms_collider = this.physics.add.collider(snowballsLayer.list, snowPlatformLayer.list);

		// swordsman_snowballs_collider
		const swordsman_snowballs_collider = this.physics.add.collider(swordsman, snowballsLayer.list, this.hitSnowball as any, undefined, this);

		// enchantress_snowGround_collider
		const enchantress_snowGround_collider = this.physics.add.collider(enchantress, snowGroundLayer.list);

		// enchantress_snowPlatforms_collider
		this.physics.add.collider(enchantress, snowPlatformLayer.list);

		// enchantress_coins_collider
		const enchantress_coins_collider = this.physics.add.overlap(enchantress, coinsLayer.list, this.enchantressCollectCoins as any, undefined, this);

		// enchantress_snowballs_collider
		const enchantress_snowballs_collider = this.physics.add.collider(enchantress, snowballsLayer.list, this.enchantressHitSnowball as any, undefined, this);

		this.swordsman = swordsman;
		this.enchantress = enchantress;
		this.coinsLayer = coinsLayer;
		this.snowballsLayer = snowballsLayer;
		this.scoreText = scoreText;
		this.runRight = runRight;
		this.jump = jump;
		this.runLeft = runLeft;
		this.attackKey = attackKey;
		this.e_runRightKey = e_runRightKey;
		this.e_jumpKey = e_jumpKey;
		this.e_runLeftKey = e_runLeftKey;
		this.platforms_ = platforms_;
		this.snowGround = snowGround;
		this.snowPlatforms = snowPlatforms;

		this.events.emit("scene-awake");
	}

	private swordsman!: SwordsmanPrefab;
	private enchantress!: EnchantressPrefab;
	private coinsLayer!: Phaser.GameObjects.Layer;
	private snowballsLayer!: Phaser.GameObjects.Layer;
	private scoreText!: ScorePrefab;
	private runRight!: Phaser.Input.Keyboard.Key;
	private jump!: Phaser.Input.Keyboard.Key;
	private runLeft!: Phaser.Input.Keyboard.Key;
	private attackKey!: Phaser.Input.Keyboard.Key;
	private e_runRightKey!: Phaser.Input.Keyboard.Key;
	private e_jumpKey!: Phaser.Input.Keyboard.Key;
	private e_runLeftKey!: Phaser.Input.Keyboard.Key;
	private platforms_!: Array<any>;
	private snowGround!: SnowGround2Prefab[];
	private snowPlatforms!: Array<SnowPlatformRightPrefab|SnowPlatformMiddlePrefab>;

	/* START-USER-CODE */
    private gameOver = false;
    // Write your code here
    preload(){
        this.load.setPath('assets')
        this.load.audio({
          key: "coinMusic",
          url: "/collectCoin.mp3",
          });
    }

    create() {
        this.editorCreate();
        this.initCamera();
            this.swordsman.setPosition(74, 1000)
            this.swordsman.clearTint();
            this.swordsman.play(ANIM_IDLE)
            this.physics.resume()
                    this.input.keyboard?.addKey("P").on("down", () => {
                        this.scene.sleep("Level").run("PauseMenu");
                      });
                      this.input.keyboard?.addKey("Q").on("down", () => {
                          this.scene.sleep("Level").run("MainMenu"); 
                          this.swordsman.setPosition(74, 1000);
                          this.scoreText.addScore(0);
                      });
        this.sound.add("coinMusic");
    }
    private initCamera(): void {
        this.cameras.main.setSize(this.game.scale.width, this.game.scale.height);
        this.cameras.main.startFollow(this.swordsman, true, 0.09, 0.09);
        this.cameras.main.setZoom(0.5);
      }

	  private enchantressCollectCoins(player: EnchantressPrefab, coin: CoinPrefab){

        coin.collected();

        this.sound.play('coinMusic', {volume: 1});

        this.scoreText.addScore(10);
        if(this.noCoinActive()){
            for(const obj of this.coinsLayer.list){
                const coin = obj as CoinPrefab;
                coin.resetCoin();
            }
            var snowballX = (this.enchantress.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
            // spawn snowball 
            const snowball = new SnowballPrefab(this, snowballX, 0)
            this.snowballsLayer.add(snowball)
        }
    }

	private enchantressHitSnowball(enchantress: EnchantressPrefab, snowball: SnowballPrefab){
        this.physics.pause();
        enchantress.die();
        this.gameOver = true;
    }

    private collectCoins(player: SwordsmanPrefab, coin: CoinPrefab){

        coin.collected();

        this.sound.play('coinMusic', {volume: 1});
        this.scoreText.addScore(10);
        if(this.noCoinActive()){
            for(const obj of this.coinsLayer.list){
                const coin = obj as CoinPrefab;
                coin.resetCoin();
            }
            var snowballX = (this.swordsman.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
            // spawn snowball 
            const snowball = new SnowballPrefab(this, snowballX, 0)
            this.snowballsLayer.add(snowball)
        }
    }
    private hitSnowball(swordsman: SwordsmanPrefab, snowball: SnowballPrefab){
        this.physics.pause();
        swordsman.die();
        this.gameOver = true;
    }
    private noCoinActive(){
        for(const coin of this.coinsLayer.list){
            if(coin.active){
                return false;
            }
        }
        return true;
    }
    update(){
        if(this.gameOver){
            return;
        }
        this.scoreText.x = this.swordsman.body.position.x;
        this.scoreText.y = this.swordsman.body.position.y; 
        this.updateSwordsman();
		this.updateEnchantress();
    }
    private updateSwordsman(){
        // swordsman 
        if(this.runLeft.isDown){
            this.swordsman.setFlipX(true)
            this.swordsman.moveLeft()
        }else if(this.runRight.isDown){
            this.swordsman.setFlipX(false)
            this.swordsman.moveRight()
        }else if(this.attackKey.isDown){
            this.swordsman.attack()
        }
        else {
            this.swordsman.stopMoving();
        }
        if(this.jump.isDown){
            if(this.swordsman.y > 600){
                this.swordsman.jump();
            }
            // this.swordsman.jump();
        }
    }

	private updateEnchantress(){
        // Enchantress
        if(this.e_runLeftKey.isDown){
            this.enchantress.setFlipX(true)
            this.enchantress.moveLeft()
        }else if(this.e_runRightKey.isDown){
            this.enchantress.setFlipX(false)
            this.enchantress.moveRight()
        }else {
            this.enchantress.stopMoving();
        }
        if(this.e_jumpKey.isDown){
            if(this.enchantress.y > 600){
                this.enchantress.jump();
            }
            // this.swordsman.jump();
        }
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
// You can write more code here
