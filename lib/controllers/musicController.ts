import { Request, Response } from "express";
import * as fs from "fs";
import * as async from "async";
import * as mm from "music-metadata";
import * as path from "path";

const validExtentions = [".mp3", ".wav"];

// In the music controller, I need to add logic to the /music route
// This logic grabs all files from the /music folder located in root
export class MusicController {
  public getMusic(req: Request, res: Response, next: any) {
    let files: string[] = fs.readdirSync("./music/");
    let songs: mm.IAudioMetadata[] = [];
    let filename;
    async.each(files, (file, cb) => {
      if (validExtentions.includes(path.extname(file))) {
        mm.parseFile(path.resolve(`./music/${file}`)).then(metadata => {
          songs.push(metadata);
          console.log(songs);
          cb();
        });
      }
    });
  }
}
