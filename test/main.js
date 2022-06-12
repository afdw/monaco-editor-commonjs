"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const monaco = require("..");
monaco.editor.create(document.body, {
    value: ["function x() {", '\tconsole.log("Hello world!");', "}"].join("\n"),
    language: "javascript",
});
//# sourceMappingURL=main.js.map
