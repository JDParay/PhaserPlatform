class MenuScene extends Phaser.Scene {
    constructor() {
        super('MenuScene');
    }

    create() {
        this.add.image(0, 0, "menu").setOrigin(0, 0).setScale(1, 1);

        this.add.text(500, 160, 'CIRCLE OF LIFE', { font: '90px Impact', fill: '#000000' }).setOrigin(0.5);
        this.add.text(500, 150, 'CIRCLE OF LIFE', { font: '90px Impact', fill: '#ffffff' }).setOrigin(0.5);
    

        const playBtn = this.add.text(720, 440, 'PLAY', { font: '32px Arial', fontStyle: 'bold', fill: '#006400' }).setOrigin(0.5).setInteractive();
        const creditsBtn = this.add.text(660, 490, 'CREDITS', { font: '32px Arial', fontStyle: 'bold', fill: '#006400' }).setOrigin(0.5).setInteractive();
        const quitBtn = this.add.text(650, 540, 'QUIT', { font: '32px Arial', fontStyle: 'bold', fill: '#8B0000' }).setOrigin(0.5).setInteractive();

        playBtn.on('pointerdown', () => this.scene.start('GameScene'));
        creditsBtn.on('pointerdown', () => this.scene.start('CreditsScene'));
        quitBtn.on('pointerdown', () => alert("You exited the game."));

        let bgm = this.sound.get('bgm');
        if (!bgm) {
            bgm = this.sound.add('bgm', { loop: true, volume: 0.5 });
            bgm.play();
        } else if (!bgm.isPlaying) {
            bgm.play();
        }
    }
}
