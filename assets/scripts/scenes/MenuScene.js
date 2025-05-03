class MenuScene extends Phaser.Scene {
    constructor() {
        super('MenuScene');
    }

    create() {
        this.add.text(500, 100, 'Circle of Life', { fontSize: '48px', fill: '#ffffff' }).setOrigin(0.5);

        const playBtn = this.add.text(500, 220, '▶ PLAY', { fontSize: '32px', fill: '#00ff00' }).setOrigin(0.5).setInteractive();
        const creditsBtn = this.add.text(500, 290, 'CREDITS', { fontSize: '32px', fill: '#00ff00' }).setOrigin(0.5).setInteractive();
        const quitBtn = this.add.text(500, 360, 'QUIT', { fontSize: '32px', fill: '#ff0000' }).setOrigin(0.5).setInteractive();

        playBtn.on('pointerdown', () => this.scene.start('GameScene'));
        creditsBtn.on('pointerdown', () => this.scene.start('CreditScene'));
        quitBtn.on('pointerdown', () => alert("You exited the game."));
    }
}
