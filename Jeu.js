 var config = {
	type: Phaser.AUTO,
	width: 1024,
	height: 768,
	scene: [Scene0, Scene1, Scene2, Scene3, Scene4, Scene5, Scene6],
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 }, 			
			debug: true
		}
	}
	
};

var game = new Phaser.Game(config);


