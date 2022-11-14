export default class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.setTexture("rocket");
        this.setPosition(x, y);
    }

    moveUp() {
        this.body.setVelocityY(-250);
        this.setTexture("rocket");
    }

    moveDown() {
        this.body.setVelocityY(250);
        this.setTexture("rocket");
    }

    moveRight() {
        this.body.setVelocityX(250);
        this.setTexture("rocket-fly");
    }

    drift() {
        this.body.setVelocityX(-50);
        this.body.setVelocityY(0);
        this.setTexture("rocket");
    }
}
