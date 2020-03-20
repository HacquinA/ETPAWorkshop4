class Scene3 extends Phaser.Scene {
    constructor() {
        super("Scene_3");
    }

    init(data){
    	this.platforms;
    	this.echelle;
    	this.vide;
    	this.playerM;
	}

   preload() {
   		this.load.spritesheet('pauline','assets/Pauline.png',{frameWidth: 20, frameHeight: 24});
   		this.load.spritesheet('mario','assets/Mario.png',{frameWidth: 18, frameHeight: 16});
   		this.load.spritesheet('Dk','assets/DonkeyKong.png',{frameWidth: 28, frameHeight: 30});
   		this.load.spritesheet('tonneau','assets/Tonneau.png',{frameWidth: 12, frameHeight: 12});
   		this.load.image('platformD','assets/platformD.png');
   		this.load.image('sol','assets/platformD.png');
   		this.load.image('echelle','assets/echelle.png');
   		this.load.image('back','assets/back.png');
   		

	}

	create() { 
		
	//Monde 
		this.add.image(512,385,'back');

		this.platforms = this.physics.add.staticGroup();
		this.platforms.create(200,570, 'platformD');
		this.platforms.create(800,470, 'platformD');
		this.platforms.create(350,350, 'platformD');
		this.platforms.create(900,250, 'platformD');
		this.platforms.create(400,150, 'platformD');

		this.sol = this.physics.add.staticGroup();
		this.sol.create(510,710, 'sol');
		this.sol.angle(175);

	//Tonneau

		this.tonneau = this.physics.add.sprite(90,120,'tonneau');
        this.tonneau.direction = 'right';
        this.tonneau.setBounce(0.02);
        this.tonneau.setCollideWorldBounds(true);
        this.tonneau.body.setGravityY(350);
        this.physics.add.collider(this.tonneau,this.sol);
        this.physics.add.collider(this.tonneau,this.platforms);

	/*
		this.sol = this.physics.add.Group({
			key: 'tonneau',
			repeat: 0,
			setXY: {x: 90, y: 120, stepX: 70}
		});

		this.physics.add.overlap(this.tonneau, this.playerM,null,this);
		this.tonneau.children.iterate(function(tonneau) {
			tonneau.setGravityY(-300).setScale(2).setCollideWorldBounds(true);

		});

		function PopTonneau{
			this.tonneau.children.iterate(function(child){
				child.enableBody(true, 90,120, true, true);
			
			});
		}

		this.timedEvent = this.time.delayedCall(1000, PopTonneau, [], this);
		
		this.anims.create({
		    key: 'left',
		    frames: this.anims.generateFrameNumbers('tonneau', { start: 0, end: 3}),
		    frameRate: 10,
		    repeat: -1
		});*/

		this.anims.create({
		    key: 'right',
		    frames: this.anims.generateFrameNumbers('tonneau', { start: 0, end: 3 }),
		    frameRate: 10,
		    repeat: -1
		});
		this.anims.create({
			key: 'mvt_tonneau',
			frames: this.anims.generateFrameNumbers('tonneau', {start: 0, end: 2}),
			frameRate: 5,
			repeat: -1
		}); 



		

		//this.platforms.create(220,200, 'platform');

		

		this.cursors = this.input.keyboard.createCursorKeys(); 

		// DK

		this.Dk = this.physics.add.sprite(100,120,'Dk');
		this.Dk.direction = 'rightDK';
		this.Dk.setBounce(0.02);
		this.Dk.setCollideWorldBounds(true);
		this.Dk.body.setGravityY(350);
		this.physics.add.collider(this.Dk,this.sol);
		this.physics.add.collider(this.Dk,this.platforms);

		//Pauline 

		this.pauline = this.physics.add.sprite(50,120,'pauline');
		this.pauline.direction = 'rightP';
		this.pauline.setBounce(0.02);
		this.pauline.setCollideWorldBounds(true);
		this.pauline.body.setGravityY(350);
		this.physics.add.collider(this.pauline,this.sol);
		this.physics.add.collider(this.pauline,this.platforms);

		// Perso 

		this.playerM = this.physics.add.sprite(200,600,'mario');
		this.playerM.direction = 'rightM';
		this.playerM.setBounce(0.02);
		this.playerM.setCollideWorldBounds(true);
		this.playerM.body.setGravityY(350);
		this.physics.add.collider(this.playerM,this.sol);
		this.physics.add.collider(this.playerM,this.platforms);

		this.anims.create({
		    key: 'leftM',
		    frames: this.anims.generateFrameNumbers('mario', { start: 0, end: 2 }),
		    frameRate: 10,
		    repeat: -1
		});

		this.anims.create({
		    key: 'turnM',
		    frames: [ { key: 'mario', frame: 1 } ],
		    frameRate: 20
		});

		this.anims.create({
		    key: 'rightM',
		    frames: this.anims.generateFrameNumbers('mario', { start: 0, end: 2 }),
		    frameRate: 10,
		    repeat: -1
		});
		this.anims.create({
		    key: 'jumpM',
		    frames: this.anims.generateFrameNumbers('mario', { start: 2, end: 2 }),
		    frameRate: 10,
		    repeat: -1
		});

		this.text = this.add.text(250,600,'Appuie sur la flèche du bas pour continuer.');
		this.cursors = this.input.keyboard.createCursorKeys();
}

	update() {

		if (this.cursors.down.isDown) {
			this.scene.start('Scene_4',{nombreVie: this.nombreVie, score: this.score});
		}
			
		if (this.cursors.left.isDown)
		{
		   this.playerM.setVelocityX(-200);

		   this.playerM.anims.play('leftM', true);

		   this.playerM.direction = 'leftM';

		   this.playerM.setFlipX(true);
		}
		else if (this.cursors.right.isDown)
		{
		    this.playerM.setVelocityX(200);

		    this.playerM.anims.play('rightM', true);

		    this.playerM.direction = 'rightM';

		    this.playerM.setFlipX(false);
		}
		else
		{
		    this.playerM.setVelocityX(0);

		    this.playerM.anims.play('turnM');
		}

		if (this.cursors.up.isDown && this.playerM.body.touching.down){    
			this.playerM.setVelocityY(-330);
			this.playerM.anims.play('jumpM',true);
			this.playerM.direction = 'jumpM';

		}
	
		// tonneau 

		if (this.tonneau.x >= 1000){
	    	this.tweens.add({
		    	targets: this.tonneau,
		   	 	x : -100,
		    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
		    	duration: 5000,
		    	repeat: 0,            // -1: infinity
		    	yoyo: false
			});
			this.tonneau.anims.play('mvt_tonneau', true);
			this.tonneau.setFlipY(false);
		}
		
		if (this.tonneau.x <= 95){
			this.tweens.add({
		    	targets: this.tonneau,
				x : 1000,
		    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
		    	duration: 5000,
		    	repeat: 0,            // -1: infinity
		    	yoyo: false
			});
			this.tonneau.anims.play('mvt_tonneau', true);
			this.tonneau.setFlipY(false);
		}


		if (this.tonneau.x>100 && this.tonneau.y>680) {
			this.tonneau.destroy(true);
		}    

		


		}

}