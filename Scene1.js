class Scene1 extends Phaser.Scene{
	constructor (){
		super("Scene_1");
	}


	init(data){
    	var platforms;
    	var sol;
    	var cursors;
    	var player;
   		var bullet;

    	
	}



	preload(){
		this.load.image('espace','assets/espace.png');
		this.load.spritesheet('sp3','assets/SpaceInvader3.png',{frameWidth: 18.6, frameHeight: 16});
		this.load.spritesheet('vaisseau','assets/vaisseau.png',{frameWidth: 27.6, frameHeight: 20});
		this.load.image('platform','assets/platform.png');
		this.load.image('bullet','assets/bullet.png');
	}


	create(){
		this.add.image(512,385,'espace');
		this.cursors = this.input.keyboard.createCursorKeys();

		

	// Monde

		this.platforms = this.physics.add.staticGroup();
		this.platforms.create(512,760,'platform');
		
	

	// Perso 

		this.player = this.physics.add.sprite(500,700,'vaisseau');
		this.player.direction = 'right';
		this.player.setBounce(0.02);
		this.player.setCollideWorldBounds(true);
		this.physics.add.collider(this.player,this.platforms);

	/*//Récupération des curseurs
		this.keys = this.input.keyboard.addKeys('A,S,P');
		this.cursors = this.input.keyboard.createCursorKeys();
		this.fire = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
*/
	// anims perso

		this.anims.create({
		    key: 'left',
		    frames: this.anims.generateFrameNumbers('vaisseau', { start: 0, end: 2 }),
		    frameRate: 10,
		    repeat: -1
		});

		this.anims.create({
		    key: 'turn',
		    frames: [ { key: 'vaisseau', frame: 1 } ],
		    frameRate: 20
		});

		this.anims.create({
		    key: 'right',
		    frames: this.anims.generateFrameNumbers('vaisseau', { start: 0, end: 2 }),
		    frameRate: 10,
		    repeat: -1
		});

	// Tir perso 
	/*	this.bullet = this.physics.add.staticGroup();
		

		this.keyObj = this.input.keyboard.addKey('W');  // Get key object
			
			this.keyObj.on('down', function(event) { 
				this.bullet.create(512,760,'bullet');
				this.bullet = this.physics.add.sprite(500,450,'bullet');
				this.bullet.setVelocityX(200);
				this.physics.add.collider(this.player,this.platforms, this.sp3);
			});
			
			this.keyObj.on('up', function(event) { 
				this.bullet = this.physics.add.sprite(500,450,'bullet');
				this.bullet.setVelocityX(200);
				this.physics.add.collider(this.player,this.platforms, this.sp3);
			});  */

	//sp3

/*		this.sp3 = this.physics.add.sprite(300,100,'sp3');
		this.sp3.setCollideWorldBounds(true);


		this.sp3s = this.physics.add.group();
		this.physics.add.overlap(this.player);
		this.physics.add.collider(this.player, this.sp3, null,this);
		this.physics.add.collider(this.sp3);
		this.sp3.body.setGravityY(-300);
		
		
		this.anims.create({
			key: 'sp3',
			frames: this.anims.generateFrameNumbers('sp3', {start: 0, end: 2}),
			frameRate: 5,
			repeat: -1
		});

		this.anims.create({
			key: 'mvt_sp3',
			frames: this.anims.generateFrameNumbers('sp3', {start: 0, end: 2}),
			frameRate: 5,
			repeat: -1
		});  */                               

		// --------------
		this.sp3Gs = this.physics.add.group({ key: 'sp3', frame: 0, repeat: 13, setXY: { x: 32, y: 100, stepX: 40 } });
		this.sp3G = this.physics.add.sprite(300,100,'sp3');

		this.physics.add.overlap(this.sp3G);
		this.physics.add.collider(this.player, this.sp3G, null,this);
		this.physics.add.collider(this.sp3G);
		
		
		
		this.anims.create({
			key: 'sp3G',
			frames: this.anims.generateFrameNumbers('sp3', {start: 0, end: 2}),
			frameRate: 5,
			repeat: -1
		});

		this.anims.create({
			key: 'mvt_sp3G',
			frames: this.anims.generateFrameNumbers('sp3', {start: 0, end: 2}),
			frameRate: 5,
			repeat: -1
		}); 


		this.text = this.add.text(250,600,'Appuie sur la flèche du haut pour continuer.');






}

update(){

	//chgt de scene 
	
		if(this.cursors.up.isDown)
		{
			this.scene.start('Scene_2',{nombreVie: this.nombreVie});
		}
	
	// Deplacement vaisseau 

		if (this.cursors.left.isDown)
		{
		   this.player.setVelocityX(-200);

		   this.player.anims.play('left', true);

		   this.player.direction = 'left';
		}
		else if (this.cursors.right.isDown)
		{
		    this.player.setVelocityX(200);

		    this.player.anims.play('right', true);

		    this.player.direction = 'right';
		}
		else
		{
		    this.player.setVelocityX(0);

		    this.player.anims.play('turn');
		}

		if (this.cursors.up.isDown && this.player.body.touching.down){    

			this.player.setVelocityY(-330);
		}

 	
	//mvt sp3 

/*if (this.sp3.x >= 300){
    	this.tweens.add({
	    	targets: this.sp3,
	   	 	x : -100,
	    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
	    	duration: 5000,
	    	repeat: 0,            // -1: infinity
	    	yoyo: false
		});
		this.sp3.anims.play('mvt_sp3', true);
		this.sp3.setFlipY(false);
	}
	
	if (this.sp3.x <= 100){
		this.tweens.add({
	    	targets: this.sp3,
			x : 520,
	    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
	    	duration: 5000,
	    	repeat: 0,            // -1: infinity
	    	yoyo: false
		});
		this.sp3.anims.play('mvt_sp3', true);
		this.sp3.setFlipY(false);

	}    */

	//------------

	if (this.sp3G.x >= 300){
    	this.tweens.add({
	    	targets: this.sp3G,
	   	 	x : -100,
	    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
	    	duration: 5000,
	    	repeat: 0,            // -1: infinity
	    	yoyo: false
		});
		this.sp3G.anims.play('mvt_sp3G', true);
		this.sp3G.setFlipY(false);
	}
	
	if (this.sp3G.x <= 100){
		this.tweens.add({
	    	targets: this.sp3G,
			x : 520,
	    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
	    	duration: 5000,
	    	repeat: 0,            // -1: infinity
	    	yoyo: false
		});
		this.sp3G.anims.play('mvt_sp3G', true);
		this.sp3G.setFlipY(false);

	}    













}

}