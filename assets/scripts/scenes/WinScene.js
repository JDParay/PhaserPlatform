class WinScene extends Phaser.Scene {
    constructor() {
        super('WinScene');
    }

    init(data) {
        this.finalScore = data.score || 0;
    }

    create() {
        this.add.text(500, 200, '🎉 YOU CAUGHT THE GAZELLE! 🎉', { fontSize: '36px', fill: '#ffff00' }).setOrigin(0.5);

        let bgm = this.sound.get("bgm");
        if (bgm) {
            bgm.stop();
        }

        this.winMusic = this.sound.add("winSFX", { volume: 0.4 });
        this.winMusic.play();

        this.add.text(500, 240, `Your Score: ${this.finalScore}`, { fontSize: '30px', fill: '#ffffff' }).setOrigin(0.5);

        const retryBtn = this.add.text(500, 300, '🔄 RETRY', { fontSize: '32px', fill: '#00ff00' }).setOrigin(0.5).setInteractive();
        const menuBtn = this.add.text(500, 370, 'MAIN MENU', { fontSize: '32px', fill: '#00ffff' }).setOrigin(0.5).setInteractive();

        retryBtn.on('pointerdown', () => {
            this.winMusic.stop();
            this.scene.start('GameScene');
        });

        menuBtn.on('pointerdown', () => {
            this.winMusic.stop();
            this.scene.start('MenuScene');
        });
    }
}
