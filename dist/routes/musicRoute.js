"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const musicController_1 = require("../controllers/musicController");
class Routes {
    constructor() {
        this.musicController = new musicController_1.MusicController();
    }
    routes(app) {
        // Initial route
        app.route("/").get((req, res) => {
            res.status(200).send({ message: "GET request successful" });
        });
        // Music Routes
        app.route("/music").get(this.musicController.getMusic);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=musicRoute.js.map