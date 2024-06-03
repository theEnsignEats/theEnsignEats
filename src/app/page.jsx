import "tailwindcss/tailwind.css";
import React from "react";
import Layout from "./pageLayout";
import Hero from "./components/hero";
import Map from "./components/map";
import CTA from "./components/CTA";
import Cards from "@/app/components/cards";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center dark:bg-black dark:text-white">
      <div className="max-w-screen-lg py-8 md:py-12">
        <Layout>
          <Hero />
          <Cards />
          <CTA />
          <div>
            <Map />
          </div>
        </Layout>
      </div>
    </div>
  );
}
