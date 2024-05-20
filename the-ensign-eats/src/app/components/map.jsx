import React from 'react';

const Map = () => {
  return (
    <div className="bg-amber-400 py-4">
      <h style={{ fontSize: '24px', color: 'black', }}>We are located at Ensign College</h>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6043.16681940561!2d-111.90024640000001!3d40.7711865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f5aa721d9be3%3A0xc118ae242cfd5461!2sEnsign%20College!5e0!3m2!1sen!2sus!4v1716173971130!5m2!1sen!2sus"
        width="500"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
