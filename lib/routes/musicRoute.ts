import { Request, Response } from "express";
import { request } from "http";
import { MusicController } from "../controllers/musicController";

export class Routes {
  public musicController: MusicController = new MusicController();
  public routes(app): void {
    // Initial route
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({ message: "GET request successful" });
    });

    // Music Routes
    app.route("/music").get(this.musicController.getMusic);
  }
}
