import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {
    constructor() {
        super("Boot");
    }

    preload() {
        this.load.image(
            "company-logo",
            require("../assets/images/company-logo.png")
        );
    }

    create() {
        this.scene.start("Preload");
    }
}
