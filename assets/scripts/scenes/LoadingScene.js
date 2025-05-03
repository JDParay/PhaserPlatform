class LoadingScene extends Phaser.Scene {
    constructor() {
        super('LoadingScene');
    }

    preload() {
        this.load.image("player", "../assets/images/Cheetah.png");
        this.load.image("goal", "../assets/images/Gazelle.png");
        this.load.image("background", "../assets/images/BG.jpg");
    }

    create() {
        this.scene.start('MainMenuScene');
    }
}
