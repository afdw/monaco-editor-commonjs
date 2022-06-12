import * as monaco from "..";

monaco.editor.create(document.body, {
    value: "select * from tb_test",
    language: "sql",
});
