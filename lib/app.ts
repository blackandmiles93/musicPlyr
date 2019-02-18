// So this will be the app class which will contain routing and controllers
import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/musicRoute";

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use("/music", express.static("music"));
  }
}

//instantiating the class on the export statement
export default new App().app;
