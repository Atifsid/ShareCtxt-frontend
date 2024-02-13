import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";

interface EditorProps {
    onChange: (value: string) => void;
    initialContent?: string;
    editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {

    const editor: BlockNoteEditor = useBlockNote({
        editable,
        // initialContent: initialContent ? JSON.parse(initialContent) as PartialBlock[]: undefined,
        onEditorContentChange: (editor) => {
            onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
        }
    });

    return <BlockNoteView editor={editor} theme={"dark"} />;
}

export default Editor;