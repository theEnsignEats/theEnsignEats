"use client";

import { createContext, useContext, useState } from 'react';

const DialogContext = createContext(undefined);

export function DialogProvider({ children }) {
    const [open, setOpen] = useState(false);

    return (
        <DialogContext.Provider value={{ open, setOpen }}>
            {children}
        </DialogContext.Provider>
    );
}

export function useDialog() {
    return useContext(DialogContext);
}
