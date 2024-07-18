"use client";

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import Order from './order';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useDialog } from './dialogContext';
import OrderSummary from "@/components/orderSummary";

export default function Cart() {
    const { open, setOpen } = useDialog();


    return (
        <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10 overflow-scroll">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 overflow-scroll">
                <div className="absolute inset-0 overflow-scroll">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <DialogPanel
                            transition
                            className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                        >
                            <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                <div className="px-4 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <DialogTitle className="text-base font-semibold leading-6 text-gray-900">Shopping Cart</DialogTitle>
                                        <div className="ml-3 flex h-7 items-center">
                                            <button
                                                type="button"
                                                onClick={() => setOpen(false)}
                                                className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                <span className="absolute -inset-2.5" />
                                                <span className="sr-only">Close panel</span>
                                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                    <Order />
                                    <button type="button"
                                            className="rounded-md bg-green-600 px-32 mx-10 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Checkout
                                    </button>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    );
}
