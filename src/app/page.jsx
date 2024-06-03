import "tailwindcss/tailwind.css";
import React from "react";
import Layout from "./pageLayout";
import Hero from "./components/hero";
import Map from "./components/map";
import CTA from "./components/CTA";
import Cards from "@/app/components/cards";
import Carousel from "./components/Carousel";

export default function Home() {
  const menuItems = [
    {
      image: 'carousel1.jpg',
      name: 'Delicious Item 1',
      description: 'A delightful item with fresh ingredients and rich flavors.',
      price: '$8.99',
    },
    {
      image: 'carousel2.jpg',
      name: 'Delicious Item 2',
      description: 'A second delightful item with fresh ingredients and rich flavors.',
      price: '$9.99',
    },
    {
      image: 'carousel3.webp',
      name: 'Delicious Item 3',
      description: 'A third delightful item with fresh ingredients and rich flavors.',
      price: '$10.99',
    },
    {
      image: 'carousel4.webp',
      name: 'Delicious Item 4',
      description: 'A fourth delightful item with fresh ingredients and rich flavors.',
      price: '$11.99',
    },
    // Add more items as needed
  ];


  return (
    <div className="min-h-screen flex justify-center items-center dark:bg-black dark:text-white">
      <div className="">
        <Layout>
          <Hero />
          <Cards/>
          <CTA />
          <div>
            <Map />
          </div>
        </Layout>
      </div>
    </div>
  );
}
