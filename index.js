module.exports = require("./dist/output.js")["monaco-editor-commonjs"].monaco;

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
        return "editor.worker.js";
    })();
    return serialized[file];
};
