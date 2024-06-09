"use client";
import React from "react";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import Carousel from "../../components/carousel.jsx";
import MenuSection from "../../components/menuSection.jsx";

const MenuPage = () => {
  return (
    <div>
      <main>
        <Header />
        <Carousel />
        <div className="flex justify-center">
          <MenuSection />
        </div>
        <Footer />
      </main>
    </div>
  );
};
export default MenuPage;
