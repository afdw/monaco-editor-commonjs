import * as monaco from "..";

monaco.editor.create(document.body, {
    value: ["function x() {", '\tconsole.log("Hello world!");', "}"].join("\n"),
    language: "javascript",
});