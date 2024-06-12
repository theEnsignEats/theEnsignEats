"use client"
import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

const AboutPage = () => {
    return (
        <div className="bg-lightGold min-h-screen">
            <Header />
            <main>
                <div className=" mx-auto p-1 space-y-1"> {/* Added space-y-8 for spacing between cards */}
                    {/* Our History Card */}
                    <div className="bg-white shadow-md rounded-lg p-8 border-t-4 border-darkGreen">
                        <h2 className="text-3xl font-semibold text-darkGreen mb-4">Our History</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            Welcome to College Burger Shop, where we serve the best burgers in town! Our mission is to provide high-quality, delicious food in a fun and friendly atmosphere.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            Established in 2020 by a group of college friends, our shop has become a popular spot for students and locals alike. We use only the freshest ingredients, sourced locally whenever possible, to create our mouth-watering burgers.
                        </p>
                    </div>

                    {/* Our Team / Employee of the Month Card */}
                    <div className="bg-white shadow-md rounded-lg p-8 border-t-4 border-mediumGreen">
                        <h2 className="text-3xl font-semibold text-mediumGreen mb-4">Our Team / Employee of the Month</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            Our dedicated team is the heart of College Burger Shop. Each month, we recognize an outstanding employee who has gone above and beyond to ensure our customers have the best experience possible.
                        </p>
                        <div className="flex justify-center mt-6">
                            <img
                                src="path_to_employee_image" // Replace with the path to your employee image
                                alt="Employee of the Month"
                                className="w-full max-w-md rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Rewards for Best Food Card */}
                    <div className="bg-white shadow-md rounded-lg p-8 border-t-4 border-gold">
                        <h2 className="text-3xl font-semibold text-gold mb-4">Awards for Best Food</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            We take pride in our culinary creations and have been recognized for our outstanding food. Our burgers have won several local awards for taste and quality.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            Thank you for choosing College Burger Shop. We look forward to serving you soon!
                        </p>
                        <div className="flex justify-center mt-6">
                            <img
                                src="path_to_awards_image" // Replace with the path to your awards image
                                alt="Awards for Best Food"
                                className="w-full max-w-md rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;