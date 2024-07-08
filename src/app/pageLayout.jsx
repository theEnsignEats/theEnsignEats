import React from 'react';
import Footer from '../components/footer';
import Header from "../components/header";
import FloatingCartButton from "../components/floatingCartButton";

export default function Layout({ children }) {
    return (
        <>

            <Header />
            <main>{children}</main>
            <Footer />
            <FloatingCartButton/>
        </>
    )
}
