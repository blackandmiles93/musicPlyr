// This is a script file that allows the front end dev server to be recognized by the backend server
const args = ["start"];
const opts = { stdio: "inherit", cwd: "musicplayrclient", shell: true };
require("child_process").spawn("npm", args, opts);
