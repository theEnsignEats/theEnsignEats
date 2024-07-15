import "tailwindcss/tailwind.css";
import React from "react";
import Layout from "./pageLayout";
import Hero from "../components/hero";
import Map from "../components/map";
import CTA from "../components/CTA";
import Cards from "../components/cards";



export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center dark:bg-black dark:text-white">
      <div className="">
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
