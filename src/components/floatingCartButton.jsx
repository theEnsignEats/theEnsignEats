"use client";

import React from 'react';
import { useDialog } from './dialogContext'; // Ensure the correct import path

export default function FloatingCartButton() {
    const { setOpen } = useDialog();

    return (
        <div className="fixed bottom-2 right-2">
            <button
                type="button"
                className="rounded-full bg-green-800 p-4 m-10 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                aria-label="Open Cart"
                onClick={() => setOpen(true)}
            >
                <img src="cart.png" alt="Open Cart" width={30} height={30} />
            </button>
        </div>
    );
}
