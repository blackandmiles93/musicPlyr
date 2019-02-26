import { Request, Response } from "express";
import { request } from "http";
import { MusicController } from "../controllers/musicController";
import * as path from "path";
import * as cors from "cors";

// const options: cors.CorsOptions = {
//   allowedHeaders: [
//     "Origin",
//     "X-requested-With",
//     "Content-Type",
//     "Accept",
//     "X-Access-Token"
//   ],
//   credentials: true,
//   methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
//   origin: "http://localhost:3000/",
//   preflightContinue: false
// };

export class Routes {
  public musicController: MusicController = new MusicController();
  public routes(app): void {
    // Initial route for front end
    app.route("/").get((req: Request, res: Response) => {
      res
        .status(200)
        .sendFile(
          path.join(__dirname, "../../musicplayrclient/public/index.html")
        );
    });

    // Music Routes
    app.route("/music").get(this.musicController.getMusic);
  }
}
