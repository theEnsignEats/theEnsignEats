"use client";
import React, { useState } from "react";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import Carousel from "../../components/carousel.jsx";
import MenuSection from "../../components/menuSection.jsx";
import Modal from "../../components/Modal.jsx";

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
    <div>
      <main>
        <Header />
        <Carousel />
        <div className="flex justify-center">
          <MenuSection onCardClick={handleCardClick} />
        </div>
        <Modal
          show={showModal}
          onClose={closeModal}
          selectedItem={selectedItem}
        />
        <Footer />
      </main>
    </div>
  );
};

export default MenuPage;
