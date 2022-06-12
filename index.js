module.exports = require("./dist/output.js")["monaco-editor-commonjs"];

const serialized = require("./dist/serialized.js");

MonacoEnvironment.getWorkerUrl = (_moduleId, label) => {
    const file = (() => {
        if (label === "json") {
            return "json.worker.js";
        }
        if (label === "css" || label === "scss" || label === "less") {
            return "css.worker.js";
        }
        if (label === "html" || label === "handlebars" || label === "razor") {
            return "html.worker.js";
        }
        if (label === "typescript" || label === "javascript") {
            return "ts.worker.js";
        }
        if (label === "sparksql") {
            return "sparksql.worker.js";
        }
        if (label === "flinksql") {
            return "flinksql.worker.js";
        }
        if (label === "hivesql") {
            return "hivesql.worker.js";
        }
        if (label === "mysql") {
            return "mysql.worker.js";
        }
        if (label === "plsql") {
            return "plsql.worker.js";
        }
        if (label === "sql") {
            return "sql.worker.js";
        }
        return "editor.worker.js";
    })();
    return serialized[file];
};
