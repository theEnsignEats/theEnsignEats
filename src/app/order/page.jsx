"use client"
import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Cart from '../../components/cart';

const OrderPage  = () => {
    return (
        <div>
            <main>
                <Header/>
                <Cart/>
                
                <Footer/>
            </main>
            
        </div>
    );
};
export default OrderPage ;