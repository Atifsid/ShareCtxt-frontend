"use client";

import { useState } from "react";
import { ShareIcon } from "./ShareIcon";
import { useDocContext } from "@/context/docContext";

const Header = () => {
    const { doc } = useDocContext();
    const [title, setTitle] = useState('Untitled');

    const handleShareClicked = () => {

    }

    return (
        <div className="flex flex-row justify-between items-center">
            <div className="relative mb-3 w-1/2" data-te-input-wrapper-init>
                <input
                    type="text"
                    className="peer text-4xl font-bold tracking-widest block min-h-[auto] w-full rounded border-0 bg-transparent px-3 leading-[2.1] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInputHelper"
                    placeholder="Example label"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <div
                    className="absolute w-full text-xs text-neutral-500 peer-focus:text-primary px-3 dark:text-neutral-200 dark:peer-focus:text-primary"
                    data-te-input-helper-ref>
                    <span className="text-red-500">*</span> This will be the identifier of your content.
                </div>
            </div>
            <div>
                <button
                    onClick={handleShareClicked}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-2">Share</span>
                    <ShareIcon />
                </button>
            </div>
        </div>
    )
}

export default Header;