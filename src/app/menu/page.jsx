"use client";
import React, { useState } from "react";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import Carousel from "../../components/carousel.jsx";
import MenuCards from "../../components/MenuCards.jsx";
import Modal from "../../components/Modal.jsx";
import Layout from "../pageLayout.jsx";

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
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen flex justify-center items-center dark:bg-black dark:text-white">
      <div className="">
        <Layout>
          <Carousel />
          <MenuCards items={MenuItems} onCardClick={handleCardClick} />
          <Modal
            show={showModal}
            onClose={closeModal}
            selectedItem={selectedItem}
          />
        </Layout>
      </div>
    </div>
  );
};

export default MenuPage;
