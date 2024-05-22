import "tailwindcss/tailwind.css";
import React from "react";
import Layout from "./pageLayout";
import Hero from "./components/hero";
import Map from "./components/map";
import CTA from "./components/CTA";


export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center dark:bg-black dark:text-white">
      <div className="max-w-screen-lg py-8 md:py-12">
      <Layout>
          <Hero/>
            <CTA/>
          <div>
          <Map/>
          </div>

      </Layout>
      </div>
    </div>
  );
}