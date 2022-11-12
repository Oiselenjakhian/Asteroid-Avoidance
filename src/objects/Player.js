export default class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.setTexture("rocket");
        this.setPosition(x, y);
    }
}
