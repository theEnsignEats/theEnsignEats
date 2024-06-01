"use client"
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/carousel.jsx';

const MenuPage = () => {
    return (
        <div>
            <main>
                <Header/>
                <Carousel />
                <Footer/>
            </main>
            
        </div>
    );
};
export default MenuPage;
