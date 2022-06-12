const webpack = require("webpack");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const path = require("path");

const output_path = path.resolve(__dirname, "../dist");

module.exports = {
    mode: "development",
    entry: {
        output: "./index.js",
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
        new MonacoWebpackPlugin({
            customLanguages: [
                {
                    label: "sparksql",
                    entry: undefined,
                    worker: {
                        id: "monaco-sql-languages/sparksqlWorker",
                        entry: "monaco-sql-languages/out/esm/sparksql/sparksql.worker",
                    },
                },
                {
                    label: "flinksql",
                    entry: undefined,
                    worker: {
                        id: "monaco-sql-languages/flinksqlWorker",
                        entry: "monaco-sql-languages/out/esm/flinksql/flinksql.worker",
                    },
                },
                {
                    label: "hivesql",
                    entry: undefined,
                    worker: {
                        id: "monaco-sql-languages/hivesqlWorker",
                        entry: "monaco-sql-languages/out/esm/hivesql/hivesql.worker",
                    },
                },
                {
                    label: "mysql",
                    entry: undefined,
                    worker: {
                        id: "monaco-sql-languages/mysqlWorker",
                        entry: "monaco-sql-languages/out/esm/mysql/mysql.worker",
                    },
                },
                {
                    label: "plsql",
                    entry: undefined,
                    worker: {
                        id: "monaco-sql-languages/plsqlWorker",
                        entry: "monaco-sql-languages/out/esm/plsql/plsql.worker",
                    },
                },
                {
                    label: "sql",
                    entry: undefined,
                    worker: {
                        id: "monaco-sql-languages/sqlWorker",
                        entry: "monaco-sql-languages/out/esm/sql/sql.worker",
                    },
                },
            ],
        }),
    ],
    resolve: {
        fallback: {
            fs: false,
        },
    },
};
