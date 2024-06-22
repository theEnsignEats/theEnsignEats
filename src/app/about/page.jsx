"use client";
import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="bg-lightGold min-h-screen">
            <Header />
            <main>
                <div className="mx-auto p-1 space-y-8"> {/* Adjusted space-y-8 for spacing between cards */}
                    {/* Our History Card */}
                    <div className="bg-green-800 shadow-md rounded-lg p-8 border-t-4 border-customYellow flex flex-col md:flex-row items-stretch">
                        <div className="md:w-1/2 md:pr-8">
                            <h2 className="text-3xl font-semibold text-customYellow mb-4">Our History</h2>
                           
                            <p className="text-lg text-white mb-4">
                                Founded in 2020 by a group of passionate college friends, Ensign Eats has quickly become a beloved spot for students and locals alike. Our commitment to quality shines through in every bite, as we use only the freshest ingredients, sourced locally whenever possible, to craft our mouth-watering burgers.
                            </p>
                            <p className="text-lg text-white text-gray-700 mb-4">
                                Join us at Ensign Eats, where great food and good times come together. We can't wait to serve you!
                            </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center items-stretch mt-4 md:mt-0">
                            <div className="w-full h-auto flex justify-center items-center">
                                <Image
                                    src="/founders.webp"
                                    alt="founders"
                                    layout="intrinsic"
                                    width={500}
                                    height={500}
                                    className="rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Our Team / Employee of the Month Card */}
                    <div className="bg-white shadow-md rounded-lg p-8 border-t-4 border-mediumGreen">
                        <h2 className="text-3xl font-semibold text-mediumGreen mb-4">Our Team / Employee of the Month</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            Our dedicated team is the heart of Ensign Eats. Each month, we recognize an outstanding employee who has gone above and beyond to ensure our customers have the best experience possible.
                        </p>
                        <div className="flex justify-center mt-6">
                            <Image
                                src="/emp.jpg"
                                alt="Employee of the Month"
                                width={200}
                                height={100}
                            />
                        </div>
                    </div>

                    {/* Awards for Best Food Card */}
                    <div className="bg-white shadow-md rounded-lg p-8 border-t-4 border-gold">
                        <h2 className="text-3xl font-semibold text-gold mb-4">Awards for Best Food</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            We take pride in our culinary creations and have been recognized for our outstanding food. Our burgers have won several local awards for taste and quality.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            Thank you for choosing Ensign Eats. We look forward to serving you soon!
                        </p>
                        <div className="flex justify-center mt-6">
                            {/* Optional: Add any other content here */}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;