let config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);

let player, goal, cursors, textScore, score;

function preload ()
{
    this.load.image("player", "../assets/images/Cheetah.png");
    this.load.image("goal", "../assets/images/Gazelle.png");
    this.load.image("background", "../assets/images/BG.jpg");
}

function create ()
{
    let bg = this.add.image(0,0, "background").setOrigin(0,0);
    bg.setScale(2, 1.7);

    player = this.physics.add.sprite(250, 490, "player");
    player.setBounce(0);
    player.setCollideWorldBounds(true);
    player.setScale(.15);

    goal = this.physics.add.sprite(800, 440, "goal");
    goal.setScale(.5);

    score = 0;
    let style = {font: "50px Arial", fill: "#FFFFFF"};
    textScore = this.add.text(50,50, "Score: " +score.toString(), style);

    cursors = this.input.keyboard.createCursorKeys();
}

function update ()
{
    if(cursors.left.isDown)
    {
        player.x -= 5;
        player.flipX = true;
    }
    if(cursors.right.isDown)
    {
        player.x += 5;
        player.flipX = false;
    }

    this.physics.add.overlap(player, goal, WinGame);
}

function WinGame()
{
    score += 100;
    textScore.setText("Score: " + score);
    goal.disableBody(true, true);
    alert("YOU ATE THE GAZELLE!");
}