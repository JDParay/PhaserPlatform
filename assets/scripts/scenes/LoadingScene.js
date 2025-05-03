class LoadingScene extends Phaser.Scene {
    constructor() {
        super('LoadingScene');
    }

    preload() {
        this.load.image("player", "../assets/images/Cheetah.png");
        this.load.image("goal", "../assets/images/Gazelle.png");
        this.load.image("background", "../assets/images/BG.jpg");
        this.load.image("menu", "../assets/images/MenuBG.png");
        this.load.image("credits", "../assets/images/creditsBG.png");

        this.load.audio("bgm", "../assets/audio/bgmusic.mp3");
        this.load.audio("winSFX", "../assets/audio/winmusic.mp3");
    }

    create() {
        this.scene.start('MenuScene');
    }
}
