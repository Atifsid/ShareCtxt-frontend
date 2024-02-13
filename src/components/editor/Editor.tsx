import { DocProps } from "@/core/dtos/types/DocProps";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";

const Editor = ({ onChange, initialContent, editable = true }: DocProps) => {
    const editor: BlockNoteEditor = useBlockNote({
        editable,
        initialContent: initialContent ? JSON.parse(initialContent) as PartialBlock[] : undefined,
        onEditorContentChange: (editor) => {
            editable && onChange!(JSON.stringify(editor.topLevelBlocks, null, 2));
        }
    });

    return <BlockNoteView editor={editor} theme={"dark"} />;
}

export default Editor;