"use client";

import { DisabledSSREditor } from "@/components/DisabledSSREditor";
import Header from "@/components/Header";
import { useState } from "react";

const Edit = () => {
    const [content, setContent] = useState<string>();

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