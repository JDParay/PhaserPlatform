class CreditsScene extends Phaser.Scene {
    constructor() {
        super('CreditsScene');
    }

    create() {
        this.add.text(500, 150, 'CREDITS', { fontSize: '40px', fill: '#ffffff' }).setOrigin(0.5);
        this.add.text(500, 250, 'Developer: Jeko Damiel Paray\nSection: A224\nprogram: 2ndYR - EMC', {
            fontSize: '24px',
            fill: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);

        const backBtn = this.add.text(500, 400, '⬅ BACK', { fontSize: '30px', fill: '#00ffff' }).setOrigin(0.5).setInteractive();
        backBtn.on('pointerdown', () => this.scene.start('MainMenuScene'));
    }
}
