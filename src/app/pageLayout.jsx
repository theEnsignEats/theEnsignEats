import React from 'react';
import Footer from '../components/footer';
import Header from "../components/header";
import FloatingCartButton from "../components/floatingCartButton";
import Cart from "../components/cart";
import { DialogProvider } from '@/components/dialogContext';

export default function Layout({ children }) {
    return (
        <DialogProvider>

            <Header />
            <main>{children}</main>
            <Footer />
            <FloatingCartButton/>
            <Cart/>
        </DialogProvider>
    )
}
