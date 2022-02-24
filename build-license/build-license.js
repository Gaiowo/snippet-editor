const fs = require("fs");
const checker = require("license-checker-rseidelsohn");

checker.init(
  {
    start: "./",
    customPath: "./build-license/licenseformat.json",
    // This will result in incorrect behavior.
    // The "packages" variable is not formatted correctly, but the rest of the program can still process it.
    // issue -> https://github.com/RSeidelsohn/license-checker-rseidelsohn/issues/11
  },
  (err, packages) => {
    if (err) throw err;

    console.log("Generating LICENSE.txt...");

    // search LICENSE.txt
    fs.readdir("./build/static/js/", { withFileTypes: true }, (_, dirents) => {
      const file = dirents.filter((dirent) => dirent.name.includes("LICENSE.txt"))[0];

      // write
      const stream = fs.createWriteStream("./build/static/js/" + file.name, { flags: "a" });

      Object.keys(packages).forEach((key) => {
        stream.write("-------\n");
        stream.write(key + "\n");
        stream.write("-------\n");
        stream.write(`${packages[key].licenseText}\n\n`);
      });
      stream.end("\n");
      console.log("Done!");
    });
  }
);
