import Phaser from "phaser";

import Config from "../objects/config";
import Player from "../objects/Player";

var scrolling;

export default class GameScene extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    preload() {
        this.load.plugin(
            "rexvirtualjoystickplugin",
            "https://cdn.jsdelivr.net/npm/phaser3-rex-plugins@1.1.39/dist/rexvirtualjoystickplugin.min.js",
            true
        );
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

        this.joyStick = this.plugins
            .get("rexvirtualjoystickplugin")
            .add(this, {
                x: 125,
                y: 475,
                radius: 75,
                base: this.add.circle(0, 0, 75, 0x888888),
                thumb: this.add.circle(0, 0, 75, 0xcccccc),
                dir: 2,
            })
            .on("update", this.update, this);

        this.player = new Player(this, 150, 300);
        this.add.existing(this.player);
        console.log(this.player);
    }

    update() {
        scrolling.tilePositionX += 0.5;
    }
}
