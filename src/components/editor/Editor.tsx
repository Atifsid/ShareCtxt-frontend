import { DocProps } from "@/core/dtos/types/DocProps";
import { BlockNoteEditor, DefaultBlockSchema, DefaultInlineContentSchema, DefaultStyleSchema, PartialBlock } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";

const Editor = ({ onChange, initialContent, editable = true }: DocProps) => {
    let data: PartialBlock<DefaultBlockSchema, DefaultInlineContentSchema, DefaultStyleSchema>[] = []
    if (initialContent) {
        data = JSON.parse(initialContent)
    }
    const editor: BlockNoteEditor = useBlockNote({
        editable,
        initialContent: initialContent ? data : undefined,
        onEditorContentChange: (editor) => {
            editable && onChange!(JSON.stringify(editor.topLevelBlocks, null, 2));
        }
    });

    return <BlockNoteView editor={editor} theme={"dark"} />;
}

export default Editor;