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
		this.load.spritesheet('vaisseau','assets/vaisseau.png',{frameWidth: 27.3, frameHeight: 20});
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

	//Récupération des curseurs
		/*this.keys = this.input.keyboard.addKeys('A,S,P');
		this.cursors = this.input.keyboard.createCursorKeys();
		this.fire = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);*/

	// deplacement perso

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
}

	update(){

	//chgt de scene 
	/*
		if(this.cursors.up.isDown)
		{
			this.scene.start('Scene_2',{nombreVie: this.nombreVie});
		}
	*/
	// Deplacement vaisseau 

		if (this.cursors.left.isDown)
		{
		    this.player.setVelocityX(-160);

		    //this.player.anims.play('left', true);
		}
		else if (this.cursors.right.isDown)
		{
		    this.player.setVelocityX(160);

		    //this.player.anims.play('right', true);
		}
		else
		{
		    this.player.setVelocityX(0);

		    //this.player.anims.play('turn');
		}

		if (this.cursors.up.isDown && player.body.touching.down)
		{
		    this.player.setVelocityY(-330);
		}





	}

}