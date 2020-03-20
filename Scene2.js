class Scene2 extends Phaser.Scene{
	constructor (){
		super("Scene_2");
	}


	preload(){
		this.load.image('SV1','assets/SaviezVous1.png');
	}

	create(){
		this.add.image(512,385,'SV1');
		this.text = this.add.text(250,700,'Appuie sur la flèche du haut pour continuer.');
		this.cursors = this.input.keyboard.createCursorKeys();
	}

	update(){
		if (this.cursors.up.isDown) {
			this.scene.start('Scene_3',{nombreVie: this.nombreVie, score: this.score});
		}
	}
}