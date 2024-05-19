import "tailwindcss/tailwind.css";
import React from "react";
import Layout from "@/app/pageLayout";
import Hero from "@/app/components/hero";


export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center dark:bg-black dark:text-white">
      <div className="max-w-screen-lg py-8 md:py-12">
      <Layout>
          <Hero/>

      </Layout>
      </div>
    </div>
  );
}