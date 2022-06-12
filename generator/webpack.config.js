const webpack = require("webpack");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const path = require("path");

const output_path = path.resolve(__dirname, "../dist");

module.exports = {
    mode: "development",
    entry: {
        output: "./index.js",
        "sparksql.worker": "monaco-sql-languages/out/esm/sparksql/sparksql.worker.js",
        "flinksql.worker": "monaco-sql-languages/out/esm/flinksql/flinksql.worker.js",
        "hivesql.worker": "monaco-sql-languages/out/esm/hivesql/hivesql.worker.js",
        "mysql.worker": "monaco-sql-languages/out/esm/mysql/mysql.worker.js",
        "plsql.worker": "monaco-sql-languages/out/esm/plsql/plsql.worker.js",
        "sql.worker": "monaco-sql-languages/out/esm/sql/sql.worker.js",
    },
    output: {
        path: output_path,
        filename: "[name].js",
        library: {
            name: "monaco-editor-commonjs",
            type: "commonjs",
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.ttf$/,
                type: "asset/inline",
            },
        ],
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),
        new webpack.BannerPlugin({ banner: `if (typeof exports === "undefined") { exports = {}; }\n`, raw: true }),
        new MonacoWebpackPlugin(),
    ],
    resolve: {
        fallback: {
            fs: false,
        },
    },
};
