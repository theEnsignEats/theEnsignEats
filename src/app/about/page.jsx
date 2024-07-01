"use client";
import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="bg-lightGold min-h-screen">
            <Header />
            <main className="mx-auto p-1 space-y-2">
                {/* Our History Card */}
                <div className="bg-green-800 shadow-md rounded-lg p-8 border-t-4 border-customYellow flex flex-col md:flex-row items-stretch">
                    <div className="md:w-1/2 md:pr-8">
                        <h2 className="text-3xl font-semibold text-customYellow mb-4">Our History</h2>
                        <p className="text-lg text-white mb-4">
                            Welcome to Ensign Eats, the ultimate destination for the best burgers in town! Our mission is to provide high-quality, delicious food in a fun and friendly atmosphere.
                        </p>
                        <p className="text-lg text-white mb-4">
                            Founded in 2020 by a group of passionate college friends, Ensign Eats has quickly become a beloved spot for students and locals alike. Our commitment to quality shines through in every bite, as we use only the freshest ingredients, sourced locally whenever possible, to craft our mouth-watering burgers.
                        </p>
                        <p className="text-lg text-white mb-4">
                            Join us at Ensign Eats, where great food and good times come together. We can't wait to serve you!
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-stretch mt-4 md:mt-0">
                        <div className="w-full h-auto flex justify-center items-center">
                            <Image
                                src="/founders.webp"
                                alt="Founders"
                                layout="intrinsic"
                                width={500}
                                height={500}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>

                {/* Our Team / Employee of the Month Card */}
                <div className="bg-customYellow shadow-md rounded-lg p-8 border-t-4 border-green-800 relative">
                    <div className="md:flex md:items-center mb-8 space-x-4">
                        <div className="flex flex-col items-center w-full md:w-1/2">
                            <h2 className="text-3xl font-semibold text-green-800 mb-4">Our Team</h2>
                            <p className="text-lg text-gray-700 mb-4">
                                Our dedicated team is the heart of Ensign Eats. Each day, our team members follow a routine to ensure the best dining experience for our customers. From early morning prep to late-night cleanup, their dedication and hard work shine through.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                Every team member brings unique skills and a passion for culinary excellence. Our chefs are committed to creating delicious and innovative dishes, while our service staff ensures every guest feels welcome and cared for.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                We believe in fostering a supportive and collaborative work environment. Continuous training and development opportunities help our team grow both personally and professionally, enabling us to deliver exceptional experiences for our customers.
                            </p>
                            <div className="flex justify-center items-center w-full mb-4">
                                <video autoPlay loop muted className="rounded-lg shadow-md border-4 border-green-800 object-cover w-full ">
                                    <source src="/kitchen.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div className="block md:hidden border-t-4 border-green-800 my-10"></div> {/* Horizontal divider */}
                        <div className="relative flex flex-col items-center w-full md:w-1/2 md:pl-4">
                            <Image
                                src="/employeeofthemonth.jpeg"
                                alt="Employee of the Month"
                                layout="responsive"
                                width={400}
                                height={300}
                                className="rounded-lg shadow-md border-4 border-green-800 object-cover"
                            />
                            <div className="text-center mt-4">
                                <h3 className="text-2xl font-semibold text-mediumGreen">Congratulations to Monty!</h3>
                                <p className="text-lg text-gray-700 mb-4">
                                    Monty has been recognized as our Employee of the Month for his outstanding dedication and exceptional service. He consistently goes above and beyond to ensure our customers have a wonderful experience. His attention to detail, friendly attitude, and leadership skills make him a valuable member of our team. Thank you, Monty, for your hard work and commitment to excellence!
                                </p>
                            </div>
                            <div className="hidden md:block absolute left-0 w-1 h-full bg-green-800"></div> {/* Vertical divider */}
                        </div>
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
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;