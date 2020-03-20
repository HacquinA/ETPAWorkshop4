class Scene4 extends Phaser.Scene{
	constructor (){
		super("Scene_4");
	}


	preload(){
		this.load.image('sv2','assets/SaviezVous2.png');
	}

	create(){
		this.add.image(512,385,'sv2');
		this.text = this.add.text(250,600,'Appuie sur la flèche du haut pour continuer.');
		this.cursors = this.input.keyboard.createCursorKeys();
	}

	update(){
		if (this.cursors.up.isDown) {
			this.scene.start('Scene_5',{nombreVie: this.nombreVie, score: this.score});
		}
	}
}