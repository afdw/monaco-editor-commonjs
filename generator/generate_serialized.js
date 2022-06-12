const fs = require("fs");

fs.writeFileSync(
    "../dist/serialized.js",
    `module.exports = ${JSON.stringify(
        Object.fromEntries(
            fs
                .readdirSync("../dist")
                .filter(name => name.endsWith(".worker.js"))
                .map(name => [
                    name,
                    `data:${name.endsWith(".js") ? "text/javascript" : "font/ttf"};base64,${fs.readFileSync(`../dist/${name}`).toString("base64")}`,
                ]),
        ),
        null,
        4,
    )}`,
);
