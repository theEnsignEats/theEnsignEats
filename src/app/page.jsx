"use client";
import "tailwindcss/tailwind.css";
import React from "react";
import Layout from "./pageLayout";
import Hero from "../components/hero";
import Map from "../components/map";
import Cta from "../components/cta";
import Cards from "../components/cards";
//import Carousel from "../components/carousel";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center dark:bg-black dark:text-white">
      <div className="">
        <Layout>
          <Hero />
          <Cards />
          <Cta />
          <div>
            <Map />
          </div>
        </Layout>
      </div>
    </div>
  );
}
