import Config from "../objects/config";

export default class Asteroid extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y);
        this.setTexture(texture);
        this.setPosition(x, y);
        scene.physics.world.enable(this);
    }

    move() {
        this.x += 1;
        if (this.x < 0) {
            this.resetPosition();
        }
    }

    resetPosition() {
        this.x = Config.width;
        var randomY = Phaser.Math.Between(0, Config.height);
        this.y = randomY;
    }
}
