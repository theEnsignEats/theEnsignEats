import "tailwindcss/tailwind.css";
import React from "react";
import Header from "../app/components/header";
import Footer from "../app/components/footer";
import SeeOurMenu from "./components/SeeOurMenu/SeeOurMenu";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center dark:bg-black dark:text-white">
      <div className="max-w-screen-lg py-8 md:py-12">
        <Header />
        <SeeOurMenu />
        <Footer />
      </div>
    </div>
  );
}
