let config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
    backgroundColor: '#000',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [
        LoadingScene,
        MenuScene,
        CreditsScene,
        GameScene,
        WinScene
    ]
};

let game = new Phaser.Game(config);
