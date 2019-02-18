"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const async = require("async");
const mm = require("music-metadata");
const path = require("path");
const validExtentions = [".mp3", ".wav"];
// In the music controller, I need to add logic to the /music route
// This logic grabs all files from the /music folder located in root
class MusicController {
    getMusic(req, res, next) {
        let files = fs.readdirSync("./music/");
        let songs = [];
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
exports.MusicController = MusicController;
//# sourceMappingURL=musicController.js.map