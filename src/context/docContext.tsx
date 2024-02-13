'use client'
import { Doc } from "@/modal/doc";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface DocContextProps {
    doc?: Doc;
    setDoc?: (doc: Doc) => void;
}

const DocContext = createContext<DocContextProps | undefined>({});

export const useDocContext = () => {
    const context = useContext(DocContext);
    if (!context) {
        throw new Error('DocContext must be used within a DocContextProvider');
    }
    return context;
};

export const DocContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [doc, setDoc] = useState<Doc | undefined>();

    return (
        <DocContext.Provider value={{ doc, setDoc }}>
            {children}
        </DocContext.Provider>
    )
}