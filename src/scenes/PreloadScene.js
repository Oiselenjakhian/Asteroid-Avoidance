import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super("Preload");
    }

    preload() {
        this.add.image(400, 180, "company-logo");

        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(width / 2 - 160, height / 2 + 60, 320, 50);

        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 + 30,
            text: "Loading...",
            style: {
                font: "30px monospace",
                fill: "#ffffff",
            },
        });
        loadingText.setOrigin(0.5, 0.5);

        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 + 85,
            text: "0%",
            style: {
                font: "25px monospace",
                fill: "#ffffff",
            },
        });
        percentText.setOrigin(0.5, 0.5);

        this.load.image("menu", require("../assets/images/home.png"));

        this.load.image("play", require("../assets/images/play.png"));

        this.load.image("about", require("../assets/images/about.png"));

        this.load.image("credits", require("../assets/images/credits.png"));

        this.load.image("settings", require("../assets/images/settings.png"));

        this.load.image("rocket", require("../assets/images/rocket.png"));

        this.load.image(
            "rocket-fly",
            require("../assets/images/rocket-fly.png")
        );

        this.load.image(
            "static-background",
            require("../assets/images/static-background.png")
        );

        this.load.image(
            "scrolling-background",
            require("../assets/images/space-background.png")
        );

        this.load.on("progress", function (value) {
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(
                width / 2 - 150,
                height / 2 + 70,
                300 * value,
                30
            );
            percentText.setText(parseInt(value * 100) + "%");
        });

        this.load.on("complete", function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
        });
    }

    create() {
        this.scene.start("Menu");
    }
}
