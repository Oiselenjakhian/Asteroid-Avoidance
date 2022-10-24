import Phaser from "phaser";

var background;

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super("Menu");
    }

    create() {
        background = this.add.image(400, 300, "static-background");
    }
}
