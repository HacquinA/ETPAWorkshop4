class Scene0 extends Phaser.Scene{
	constructor (){
		super("Scene_0");
	}


	preload(){
		this.load.image('titre','assets/titre.png');
	}

	create(){
		this.add.image(512,385,'titre');
		this.text = this.add.text(250,600,'Appuie sur la flèche du haut pour continuer.');
		this.cursors = this.input.keyboard.createCursorKeys();
	}

	update(){
		if (this.cursors.up.isDown) {
			
			this.scene.start('Scene_1',{nombreVie: this.nombreVie, score: this.score});
		}
	}
}