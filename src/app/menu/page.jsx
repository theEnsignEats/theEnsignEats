"use client";
import React, { useState } from "react";
import Layout from "../pageLayout.jsx";
import Carousel from "../../components/carousel.jsx";
import MenuSection from "../../components/menuSection.jsx";
import Modal from "../../components/Modal.jsx";

export default function MenuPage () {
  const [items, setItems] = useState([
    { id: 1, name: "Delicious Item 1", description: "A delightful item with fresh ingredients and rich flavors.", price: "$8.99", categoryName: 'Burgers', image: "carousel1.jpg" },
    { id: 2, name: "Delicious Item 2", description: "A second delightful item with fresh ingredients and rich flavors.", price: "$9.99", categoryName: 'Drinks', image: "carousel2.jpg" },
    { id: 3, name: "Delicious Item 3", description: "A third delightful item with fresh ingredients and rich flavors.", price: "$10.99", categoryName: 'Desserts', image: "carousel3.webp" },
    { id: 4, name: "Delicious Item 4", description: "A fourth delightful item with fresh ingredients and rich flavors.", price: "$11.99", categoryName: 'Desserts', image: "carousel4.webp" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
    setShowModal(false);
  };

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <main>
        <Layout>
        <Carousel />
        <div className="flex justify-center">
          <MenuSection items={items} onCardClick={handleCardClick} />
        </div>
        <Modal
          show={showModal}
          onClose={closeModal}
          selectedItem={selectedItem}
          onDelete={handleDelete} 
        />
        </Layout>
      </main>
    </div>
  );
};


