const fs = require('fs');
const path = require('path');


fs.readdir(path.join(__dirname, "secret-folder"), (err, files) => {
    if (err)
        console.log(err);
    else {
        console.log("\nCurrent directory filenames:");
        files.forEach(item => {
            fs.stat(path.join(__dirname, `secret-folder/${item}`), (err, stats) => {
                if (err) throw err;

                if (stats.isDirectory() === false) {
                    console.log(`${item}`.split(".").join(" - ") + " - " + stats.size + "b");
                }
            });
        })
    }
});