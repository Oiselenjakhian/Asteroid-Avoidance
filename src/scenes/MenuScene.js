import Phaser from "phaser";

var background;
var play;
var about;
var credits;
var settings;

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super("Menu");
    }

    create() {
        background = this.add.image(400, 300, "static-background");
        play = this.add.image(350, 240, "play");
        play.setDepth(1);
        play.setInteractive({ useHandCursor: true });
        play.on(
            "pointerdown",
            function () {
                this.scene.start("Game");
            },
            this
        );
        about = this.add.image(450, 240, "about");
        about.setDepth(1);
        about.setInteractive({ useHandCursor: true });
        about.on(
            "pointerdown",
            function () {
                this.scene.start("About");
            },
            this
        );
        credits = this.add.image(350, 330, "credits");
        credits.setDepth(1);
        credits.setInteractive({ useHandCursor: true });
        credits.on(
            "pointerdown",
            function () {
                this.scene.start("Credits");
            },
            this
        );
        settings = this.add.image(450, 330, "settings");
        settings.setDepth(1);
        settings.setInteractive({ useHandCursor: true });
        settings.on(
            "pointerdown",
            function () {
                this.scene.start("Settings");
            },
            this
        );
    }
}
