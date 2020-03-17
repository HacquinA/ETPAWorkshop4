class Scene1 extends Phaser.Scene{
	constructor (){
		super("Scene_1");
	}

	init(data){
    	var platforms;
    	var sol;
    	var cursors;
    	var player;
	}

	preload(){
		this.load.image('espace','assets/espace.png');
		this.load.spritesheet('sp1','assets/SpaceInvader1.png',{frameWidth: 20, frameHeight: 8});
		this.load.image('vaisseau','assets/vaisseau.png');
		this.load.image('platform','assets/platform.png');
	}

	create(){
		this.add.image(512,385,'espace');
		this.cursors = this.input.keyboard.createCursorKeys();

		

	// Monde

		this.platforms = this.physics.add.staticGroup();
		this.platforms.create(512,760,'platform');
		
	

	// Perso 

		this.player = this.physics.add.sprite(500,450,'vaisseau');
		this.player.direction = 'right';
		this.player.setBounce(0.02);
		this.player.setCollideWorldBounds(true);
		this.player.body.setGravityY(200);
		this.physics.add.collider(this.player,this.platforms);


        
	}

	update(){
		if(this.cursors.up.isDown)
		{
			this.scene.start('Scene_2',{nombreVie: this.nombreVie});
		}

	// Deplacement vaisseau 


	if (this.cursors.left.isDown){
		player.direction = 'left';
		player.anims.play('right', true);
		player.setVelocityX(-150);
		player.setFlipX(true);
		if(keys.A.isDown){
			player.anims.play('right', true);
			player.setFlipX(true);
			player.setVelocityX(-200);
		}
	}
	else if (this.cursors.right.isDown){
		player.direction = 'right';
		player.anims.play('left', true);
		player.setFlipX(false);
		player.setVelocityX(150);
		if(keys.A.isDown){
			player.anims.play('left', true);
			player.setFlipX(false);
			player.setVelocityX(200);
		}

	}





	}

}