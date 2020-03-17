class Scene1 extends Phaser.Scene{
	constructor (){
		super("Scene_1");
	}

	init(data){
    
	}

	preload(){

	}

	create(){
		this.text = this.add.text(200,300,'Scene 1 - Changer de scene dans phaser');

		this.cursors = this.input.keyboard.createCursorKeys(); 
	}

	update(){
		if(this.cursors.up.isDown)
		{
			this.scene.start('Scene_2', {nombreVie: this.nombreVie});
		}
	}
	}