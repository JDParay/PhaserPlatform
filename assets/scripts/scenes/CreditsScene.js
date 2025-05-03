class CreditsScene extends Phaser.Scene {
    constructor() {
        super('CreditsScene');
    }

    create() {
        this.add.image(0, 0, "credits").setOrigin(0, 0).setScale(1, 1);

        this.add.text(500, 160, 'CREDITS', { fontSize: '40px', fontStyle: 'bold', fill: '#006400' }).setOrigin(0.5);
        this.add.text(500, 270, 'Developer: Jeko Damiel Paray\n\nSection: A224\n\nprogram: BSEMC', {
            font: '24px Arial',
            fontStyle: 'bold',
            fill: '#006400',
            align: 'center'
        }).setOrigin(0.5);

        const backBtn = this.add.text(550, 400, '⬅ BACK', { fontSize: '30px', fontStyle: 'bold', fill: '#8B8000' }).setOrigin(0.5).setInteractive();
        backBtn.on('pointerdown', () => this.scene.start('MenuScene'));
    }
}
