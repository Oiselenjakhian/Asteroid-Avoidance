import Phaser from "phaser";

import Config from "../objects/config";

var scrolling;
var player;

export default class GameScene extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    create() {
        scrolling = this.add.tileSprite(
            0,
            0,
            Config.width,
            Config.height,
            "scrolling-background"
        );
        scrolling.setOrigin(0, 0);

        player = this.add.image(150, 300, "rocket");
        player.setDepth(1);
    }

    update() {
        scrolling.tilePositionX += 0.5;
    }
}
