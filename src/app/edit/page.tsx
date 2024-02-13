"use client";

import { DisabledSSREditor } from "@/components/editor/DisabledSSREditor";
import Header from "@/components/Header";
import { useDocContext } from "@/context/docContext";
import { useEffect, useState } from "react";

const Edit = () => {
    const { setDoc } = useDocContext();
    const [content, setContent] = useState<string>();

    useEffect(() => {
        content && setDoc!({ content: content });
    }, [content]);

    return (
        <main >
            <div className="px-24 my-10"><Header /></div>
            <div className="flex flex-col items-center justify-between px-24">
                <div className="h-full w-full">
                    <DisabledSSREditor onChange={(value: string) => setContent(value)} />
                </div>
            </div>
        </main>
    )
}

export default Edit;