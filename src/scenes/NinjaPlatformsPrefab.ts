
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class NinjaPlatformsPrefab extends Phaser.GameObjects.Layer {

	constructor(scene: Phaser.Scene) {
		super(scene);

		// p10
		const p10 = scene.physics.add.staticImage(79, 1197.9825439453125, "1", 0);
		p10.body.setSize(128, 128, false);
		this.add(p10);

		// p30
		const p30 = scene.physics.add.staticImage(207, 1196, "3", 0);
		// p30.body.collideWorldBounds = true;
		p30.body.setSize(128, 128, false);
		this.add(p30);

		// p1
		const p1 = scene.physics.add.staticImage(432.0186767578125, 1241.0213623046875, "1", 0);
		p1.setOrigin(1.3434156273248687, 0.8436137740953171);
		// p1.body.collideWorldBounds = true;
		p1.body.setSize(128, 128, false);
		this.add(p1);

		// _1
		const _1 = scene.physics.add.staticImage(452.0614929199219, 1197.038818359375, "3", 0);
		// _1.body.collideWorldBounds = true;
		_1.body.setSize(128, 128, false);
		this.add(_1);

		// _2
		const _2 = scene.physics.add.staticImage(670.891845703125, 1240.0657958984375, "1", 0);
		_2.setOrigin(1.3434156273248687, 0.8436137740953171);
		// _2.body.collideWorldBounds = true;
		_2.body.setSize(128, 128, false);
		this.add(_2);

		// _3
		const _3 = scene.physics.add.staticImage(690.9346313476562, 1196.083251953125, "3", 0);
		// _3.body.collideWorldBounds = true;
		_3.body.setSize(128, 128, false);
		this.add(_3);

		// _4
		const _4 = scene.physics.add.staticImage(914.7919921875, 1242.0926513671875, "1", 0);
		_4.setOrigin(1.3434156273248687, 0.8436137740953171);
		// _4.body.collideWorldBounds = true;
		_4.body.setSize(128, 128, false);
		this.add(_4);

		// _5
		const _5 = scene.physics.add.staticImage(934.8347778320312, 1198.110107421875, "3", 0);
		// _5.body.collideWorldBounds = true;
		_5.body.setSize(128, 128, false);
		this.add(_5);

		// _6
		const _6 = scene.physics.add.staticImage(1898.5157470703125, 1196.13232421875, "3", 0);
		// _6.body.collideWorldBounds = true;
		_6.body.setSize(128, 128, false);
		this.add(_6);

		// _7
		const _7 = scene.physics.add.staticImage(1159.63818359375, 1242.0047607421875, "1", 0);
		_7.setOrigin(1.3434156273248687, 0.8436137740953171);
		// _7.body.collideWorldBounds = true;
		_7.body.setSize(128, 128, false);
		this.add(_7);

		// _8
		const _8 = scene.physics.add.staticImage(1169.6810302734375, 1198.022216796875, "3", 0);
		// _8.body.collideWorldBounds = true;
		_8.body.setSize(128, 128, false);
		this.add(_8);

		// _9
		const _9 = scene.physics.add.staticImage(1395.69970703125, 1241.0435791015625, "1", 0);
		_9.setOrigin(1.3434156273248687, 0.8436137740953171);
		// _9.body.collideWorldBounds = true;
		_9.body.setSize(128, 128, false);
		this.add(_9);

		// _10
		const _10 = scene.physics.add.staticImage(1634.5728759765625, 1240.0880126953125, "1", 0);
		_10.setOrigin(1.3434156273248687, 0.8436137740953171);
		// _10.body.collideWorldBounds = true;
		_10.body.setSize(128, 128, false);
		this.add(_10);

		// _11
		const _11 = scene.physics.add.staticImage(1415.7425537109375, 1197.06103515625, "3", 0);
		// _11.body.collideWorldBounds = true;
		_11.body.setSize(128, 128, false);
		this.add(_11);

		// _12
		const _12 = scene.physics.add.staticImage(1654.6156005859375, 1196.10546875, "3", 0);
		// _12.body.collideWorldBounds = true;
		_12.body.setSize(128, 128, false);
		this.add(_12);

		// _13
		const _13 = scene.physics.add.staticImage(1879.4730224609375, 1240.1148681640625, "1", 0);
		_13.setOrigin(1.3434156273248687, 0.8436137740953171);
		// _13.body.collideWorldBounds = true;
		_13.body.setSize(128, 128, false);
		this.add(_13);

		// _14
		const _14 = scene.physics.add.staticImage(2986.156005859375, 1196.1925048828125, "3", 0);
		// _14.body.collideWorldBounds = true;
		_14.body.setSize(128, 128, false);
		this.add(_14);

		// _15
		const _15 = scene.physics.add.staticImage(2237.2783203125, 1240.06494140625, "1", 0);
		_15.setOrigin(1.3434156273248687, 0.8436137740953171);
		// _15.body.collideWorldBounds = true;
		_15.body.setSize(128, 128, false);
		this.add(_15);

		// _16
		const _16 = scene.physics.add.staticImage(2258.321044921875, 1196.0823974609375, "3", 0);
		// _16.body.collideWorldBounds = true;
		_16.body.setSize(128, 128, false);
		this.add(_16);

		// _17
		const _17 = scene.physics.add.staticImage(2483.33984375, 1240.103759765625, "1", 0);
		_17.setOrigin(1.3434156273248687, 0.8436137740953171);
		// _17.body.collideWorldBounds = true;
		_17.body.setSize(128, 128, false);
		this.add(_17);

		// _18
		const _18 = scene.physics.add.staticImage(2722.212890625, 1240.148193359375, "1", 0);
		_18.setOrigin(1.3434156273248687, 0.8436137740953171);
		// _18.body.collideWorldBounds = true;
		_18.body.setSize(128, 128, false);
		this.add(_18);

		// _19
		const _19 = scene.physics.add.staticImage(2493.382568359375, 1196.1212158203125, "3", 0);
		// _19.body.collideWorldBounds = true;
		_19.body.setSize(128, 128, false);
		this.add(_19);

		// _20
		const _20 = scene.physics.add.staticImage(2742.255859375, 1197.1656494140625, "3", 0);
		// _20.body.collideWorldBounds = true;
		_20.body.setSize(128, 128, false);
		this.add(_20);

		// _21
		const _21 = scene.physics.add.staticImage(2966.113037109375, 1241.175048828125, "1", 0);
		_21.setOrigin(1.3434156273248687, 0.8436137740953171);
		// _21.body.collideWorldBounds = true;
		_21.body.setSize(128, 128, false);
		this.add(_21);

		// _22
		const _22 = scene.physics.add.staticImage(3311.714599609375, 1238.484619140625, "1", 0);
		_22.setOrigin(1.3434156273248687, 0.8436137740953171);
		// _22.body.collideWorldBounds = true;
		_22.body.setSize(128, 128, false);
		this.add(_22);

		// _23
		const _23 = scene.physics.add.staticImage(3639.77587890625, 1237.5234375, "1", 0);
		_23.setOrigin(1.3434156273248687, 0.8436137740953171);
		// _23.body.collideWorldBounds = true;
		_23.body.setSize(128, 128, false);
		this.add(_23);

		// _24
		const _24 = scene.physics.add.staticImage(3659.81884765625, 1193.5408935546875, "3", 0);
		// _24.body.collideWorldBounds = true;
		_24.body.setSize(128, 128, false);
		this.add(_24);

		// _25
		const _25 = scene.physics.add.staticImage(3888.649169921875, 1236.56787109375, "1", 0);
		_25.setOrigin(1.3434156273248687, 0.8436137740953171);
		// _25.body.collideWorldBounds = true;
		_25.body.setSize(128, 128, false);
		this.add(_25);

		// _26
		const _26 = scene.physics.add.staticImage(3908.69189453125, 1192.5853271484375, "3", 0);
		// _26.body.collideWorldBounds = true;
		_26.body.setSize(128, 128, false);
		this.add(_26);

		// _27
		const _27 = scene.physics.add.staticImage(4132.54931640625, 1236.5947265625, "1", 0);
		_27.setOrigin(1.3434156273248687, 0.8436137740953171);
		// _27.body.collideWorldBounds = true;
		_27.body.setSize(128, 128, false);
		this.add(_27);

		// _28
		const _28 = scene.physics.add.staticImage(4152.59228515625, 1192.6121826171875, "3", 0);
		// _28.body.collideWorldBounds = true;
		_28.body.setSize(128, 128, false);
		this.add(_28);

		// _29
		const _29 = scene.physics.add.staticImage(4389.3955078125, 1241.5068359375, "1", 0);
		_29.setOrigin(1.3434156273248687, 0.8436137740953171);
		// _29.body.collideWorldBounds = true;
		_29.body.setSize(128, 128, false);
		this.add(_29);

		// _30
		const _30 = scene.physics.add.staticImage(4627.45703125, 1241.545654296875, "1", 0);
		_30.setOrigin(1.3434156273248687, 0.8436137740953171);
		// _30.body.collideWorldBounds = true;
		_30.body.setSize(128, 128, false);
		this.add(_30);

		// _31
		const _31 = scene.physics.add.staticImage(4404.4384765625, 1196.5242919921875, "3", 0);
		// _31.body.collideWorldBounds = true;
		_31.body.setSize(128, 128, false);
		this.add(_31);

		// _32
		const _32 = scene.physics.add.staticImage(3332.75732421875, 1194.5020751953125, "3", 0);
		// _32.body.collideWorldBounds = true;
		_32.body.setSize(128, 128, false);
		this.add(_32);

		// _33
		const _33 = scene.physics.add.staticImage(4633.5, 1195.5631103515625, "3", 0);
		// _33.body.collideWorldBounds = true;
		_33.body.setSize(128, 128, false);
		this.add(_33);

		// _34
		const _34 = scene.physics.add.staticImage(4862.330078125, 1238.590087890625, "1", 0);
		_34.setOrigin(1.3434156273248687, 0.8436137740953171);
		// _34.body.collideWorldBounds = true;
		_34.body.setSize(128, 128, false);
		this.add(_34);

		// _35
		const _35 = scene.physics.add.staticImage(4882.373046875, 1194.6075439453125, "3", 0);
		// _35.body.collideWorldBounds = true;
		_35.body.setSize(128, 128, false);
		this.add(_35);

		// _36
		const _36 = scene.physics.add.staticImage(5106.23046875, 1238.616943359375, "1", 0);
		_36.setOrigin(1.3434156273248687, 0.8436137740953171);
		// _36.body.collideWorldBounds = true;
		_36.body.setSize(128, 128, false);
		this.add(_36);

		// _37
		const _37 = scene.physics.add.staticImage(5126.27294921875, 1194.6343994140625, "3", 0);
		// _37.body.collideWorldBounds = true;
		_37.body.setSize(128, 128, false);
		this.add(_37);

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
