class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    create() {
        this.add.image(0, 0, "background").setOrigin(0, 0).setScale(2, 1.7);

        this.player = this.physics.add.sprite(250, 490, "player").setBounce(0).setCollideWorldBounds(true).setScale(0.15);
        this.goal = this.physics.add.sprite(800, 440, "goal").setScale(0.5);

        this.score = 0;
        this.textScore = this.add.text(50, 50, "Score: 0", { font: "50px Arial", fill: "#ffffff" });

        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.overlap(this.player, this.goal, this.winGame, null, this);
    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.x -= 5;
            this.player.flipX = true;
        }
        if (this.cursors.right.isDown) {
            this.player.x += 5;
            this.player.flipX = false;
        }
    }

    winGame() {
        this.score += 100;
        this.textScore.setText("Score: " + this.score);
        this.goal.disableBody(true, true);
        this.scene.start('WinScene');
    }
}
