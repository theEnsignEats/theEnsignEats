"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Carousel from "../../components/carousel.jsx";
import MenuCards from "../../components/MenuCards";

const MenuItems = [
  {
    image: "carousel1.jpg",
    name: "Delicious Item 1",
    description: "A delightful item with fresh ingredients and rich flavors.",
    price: "$8.99",
  },
  {
    image: "carousel2.jpg",
    name: "Delicious Item 2",
    description:
      "A second delightful item with fresh ingredients and rich flavors.",
    price: "$9.99",
  },
  {
    image: "carousel3.webp",
    name: "Delicious Item 3",
    description:
      "A third delightful item with fresh ingredients and rich flavors.",
    price: "$10.99",
  },
  {
    image: "carousel4.webp",
    name: "Delicious Item 4",
    description:
      "A fourth delightful item with fresh ingredients and rich flavors.",
    price: "$11.99",
  },
  // Add more items as needed
];

const MenuPage = () => {
  return (
    <div>
      <main>
        <Header />
        <Carousel />
        <MenuCards items={MenuItems} />
        <Footer />
      </main>
    </div>
  );
};
export default MenuPage;
