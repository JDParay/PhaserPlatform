class WinScene extends Phaser.Scene {
    constructor() {
        super('WinScene');
    }

    create() {
        this.add.text(500, 200, '🎉 YOU CAUGHT THE GAZELLE! 🎉', { fontSize: '36px', fill: '#ffff00' }).setOrigin(0.5);

        const retryBtn = this.add.text(500, 300, '🔄 RETRY', { fontSize: '32px', fill: '#00ff00' }).setOrigin(0.5).setInteractive();
        const menuBtn = this.add.text(500, 370, 'MAIN MENU', { fontSize: '32px', fill: '#00ffff' }).setOrigin(0.5).setInteractive();

        retryBtn.on('pointerdown', () => this.scene.start('GameScene'));
        menuBtn.on('pointerdown', () => this.scene.start('MainMenuScene'));
    }
}
