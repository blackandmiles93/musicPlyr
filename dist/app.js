"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// So this will be the app class which will contain routing and controllers
const express = require("express");
const bodyParser = require("body-parser");
const musicRoute_1 = require("./routes/musicRoute");
class App {
    constructor() {
        this.routePrv = new musicRoute_1.Routes();
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use("/music", express.static("music"));
    }
}
//instantiating the class on the export statement
exports.default = new App().app;
//# sourceMappingURL=app.js.map