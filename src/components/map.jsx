import React from 'react';
import Link from "next/link";
const Map = () => {
  return (
    <div className="bg-amber-400 py-4 px-8">
      <div className="text-center mb-4">
        <h style={{ fontSize: '30px', color: 'white' }}>We are located at Ensign College</h>
      </div>
      <div className="flex flex-row items-start">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6043.16681940561!2d-111.90024640000001!3d40.7711865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f5aa721d9be3%3A0xc118ae242cfd5461!2sEnsign%20College!5e0!3m2!1sen!2sus!4v1716173971130!5m2!1sen!2sus"
          width="500"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="ml-30 p-20 flex flex-col " style={{ maxWidth: '1000px' }}>
          <h style={{ color: 'black', fontSize: '20px',fontWeight: 'bold' }}>Tell us what you think?</h>
          <p style={{ color: 'black',  fontSize: '18px' }}>
            We value your feedback and would love to hear about your dining experience at The Ensign Eats.
            Whether you enjoyed your meal or have suggestions for improvement, your input helps us to serve you better.
            Please share your thoughts with us and help us create an even more enjoyable dining experience for all our guests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;
