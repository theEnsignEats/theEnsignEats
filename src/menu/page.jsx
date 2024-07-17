"use client";
import { OrderContext } from "../context/orderContext"

import React, { useState } from "react";
import Layout from "../pageLayout";
import Carousel from "../../components/carousel.jsx";
import MenuSection from "../../components/menuSection.jsx";
import Modal from "../../components/Modal.jsx";


const MenuPage = () => {

  const { setOrder } = useContext(OrderContext);

  useEffect(() => {
    // Initialize the order object when the user enters the menu page
    setOrder({
      customerName: "John Doe",
      orderItems: [],
      orderTotal: 0.00,
    });
  }, [setOrder]);

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
        <Layout />
        <Carousel />
        <div className="flex justify-center">
          <MenuSection onCardClick={handleCardClick} />
        </div>
        <Modal show={showModal} onClose={closeModal} selectedItem={selectedItem} />
        <Layout />
      </main>
    </div>
  );
};

export default MenuPage;
