import Phaser from "phaser";

import Config from "../objects/config";
import Player from "../objects/Player";
import Asteroid from "../objects/Asteroid";

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
        this.physics.world.enable(this.player);
        this.player.body.setCollideWorldBounds(true);

        this.scoreLabel = this.add
            .text(30, 20, "Time:\t\t\t0", {
                font: "30px Arial",
                fill: "#fff",
            })
            .setScrollFactor(0, 1);

        this.score = 0;

        this.time.addEvent({
            delay: 1000,
            callback: this.updateTimer,
            callbackScope: this,
            loop: true,
        });

        this.asteroids = this.physics.add.group();

        for (let i = 1; i <= 10; i++) {
            let textureString = "asteroid-" + i.toString();
            let randomY = Phaser.Math.Between(0, Config.height);
            let asteroid = new Asteroid(
                this,
                Config.width,
                randomY,
                textureString
            );
            this.add.existing(asteroid);
            this.asteroids.add(asteroid);
        }
    }

    update() {
        scrolling.tilePositionX += 0.5;

        if (this.joyStick.up) {
            this.player.moveUp();
        } else if (this.joyStick.down) {
            this.player.moveDown();
        } else if (this.joyStick.right) {
            this.player.moveRight();
        } else {
            this.player.drift();
        }
    }

    updateTimer() {
        this.score += 1;
        this.scoreLabel.setText(`Time:\t\t\t${this.score}`);
    }
}
