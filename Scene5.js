class Scene5 extends Phaser.Scene{
	constructor (){
		super("Scene_5");
	}


init(data){
    	this.platforms;
    	this.echelle;
    	this.vide;
    	this.playerMa;
    	this.goomba;
	}

   preload() {
   		
   		this.load.spritesheet('mario','assets/Mario.png',{frameWidth: 18, frameHeight: 16});
   		this.load.image('platformMa','assets/platformM.png');
   		this.load.image('solMa','assets/platformM.png');
   		this.load.image('backMa','assets/backM.png');
   		this.load.image('cubeD','assets/CubeD.png');
   		this.load.image('cubeL','assets/CubeL.png');
   		this.load.spritesheet('plante','assets/PlantePirahana.png',{frameWidth: 32, frameHeight: 32});
   		this.load.spritesheet('goomba','assets/Goomba.png',{frameWidth: 32, frameHeight: 32});

	}

	create() { 
		
	//Monde 
		this.add.image(512,385,'backMa');

		this.sol = this.physics.add.staticGroup();
		this.sol.create(510,610, 'solMa');
		

		this.cursors = this.input.keyboard.createCursorKeys(); 

	

	// Perso 

		this.playerMa = this.physics.add.sprite(200,530,'mario');
		this.playerMa.direction = 'rightMa';
		this.playerMa.setBounce(0.02);
		this.playerMa.setCollideWorldBounds(true);
		this.playerMa.body.setGravityY(350);
		this.physics.add.collider(this.playerMa,this.sol);
		this.physics.add.collider(this.playerMa,this.platforms);

		this.anims.create({
		    key: 'leftMa',
		    frames: this.anims.generateFrameNumbers('mario', { start: 0, end: 2 }),
		    frameRate: 10,
		    repeat: -1
		});

		this.anims.create({
		    key: 'turnMa',
		    frames: [ { key: 'mario', frame: 1 } ],
		    frameRate: 20
		});

		this.anims.create({
		    key: 'rightMa',
		    frames: this.anims.generateFrameNumbers('mario', { start: 0, end: 2 }),
		    frameRate: 10,
		    repeat: -1
		});
		this.anims.create({
		    key: 'jumpMa',
		    frames: this.anims.generateFrameNumbers('mario', { start: 2, end: 2 }),
		    frameRate: 10,
		    repeat: -1
		});

		this.text = this.add.text(250,600,'Appuie sur la flèche du bas pour continuer.');
		this.cursors = this.input.keyboard.createCursorKeys();


	// Goomba 
/*
			this.goomba = this.physics.add.sprite(300,100,'goomba');
			this.goomba.setCollideWorldBounds(true);


			this.goombas = this.physics.add.group();
			this.physics.add.overlap(this.player);
			this.physics.add.collider(this.player, this.goomba, null,this);
			this.physics.add.collider(this.goomba);
			//this.goomba.body.setGravityY(-300);
			
			
			this.anims.create({
				key: 'goomba',
				frames: this.anims.generateFrameNumbers('goomba', {start: 0, end: 2}),
				frameRate: 5,
				repeat: -1
			});

			this.anims.create({
				key: 'mvt_goomba',
				frames: this.anims.generateFrameNumbers('goomba', {start: 0, end: 2}),
				frameRate: 5,
				repeat: -1
			}); 

*/

		// Plante







}

	update() {

		if (this.cursors.down.isDown) {
			this.scene.start('Scene_6',{nombreVie: this.nombreVie, score: this.score});
		}
			
		if (this.cursors.left.isDown)
		{
		   this.playerMa.setVelocityX(-200);

		   this.playerMa.anims.play('leftMa', true);

		   this.playerMa.direction = 'leftMa';

		   this.playerMa.setFlipX(true);
		}
		else if (this.cursors.right.isDown)
		{
		    this.playerMa.setVelocityX(200);

		    this.playerMa.anims.play('rightMa', true);

		    this.playerMa.direction = 'rightMa';

		    this.playerMa.setFlipX(false);
		}
		else
		{
		    this.playerMa.setVelocityX(0);

		    this.playerMa.anims.play('turnMa');
		}

		if (this.cursors.up.isDown && this.playerMa.body.touching.down){    
			this.playerMa.setVelocityY(-330);
			this.playerMa.anims.play('jumpMa',true);
			this.playerMa.direction = 'jumpMa';

		}
	
	// Goomba 

	/*	if (this.goomba.x >= 300){
    			this.tweens.add({
	    	targets: this.goomba,
	   	 	x : -100,
	    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
	    	duration: 5000,
	    	repeat: 0,            // -1: infinity
	    	yoyo: false
		});
		this.goomba.anims.play('mvt_goomba', true);
		this.goomba.setFlipY(false);
	}
	
	if (this.goomba.x <= 100){
		this.tweens.add({
	    	targets: this.goomba,
			x : 520,
	    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
	    	duration: 5000,
	    	repeat: 0,            // -1: infinity
	    	yoyo: false
		});
		this.goomba.anims.play('mvt_goomba', true);
		this.goomba.setFlipY(false);

	}
*/


		}

}