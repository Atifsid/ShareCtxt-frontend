"use client";
import { DisabledSSREditor } from "@/components/editor/DisabledSSREditor";
import Header from "@/components/Header";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const View = () => {
    const params = useParams<{ id: string }>()

    useEffect(() => {
        console.log(params);
    }, [])

    return (
        <main >
            <div className="px-24 my-10"><Header /></div>
            <div className="flex flex-col items-center justify-between px-24">
                <div className="h-full w-full">
                    <DisabledSSREditor editable={false} />
                </div>
            </div>
        </main>
    )
}

export default View;