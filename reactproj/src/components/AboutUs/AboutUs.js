import React from 'react';
import "./AboutUs.css"

const AboutUs = () => {
    const adminContacts = [
        { name: "Lohith ", email: "lohith@gmail.com", phone: "9XXXXXXXX1" },
        { name: "Nihal ", email: "nihal@gmail.com", phone: "9XXXXXXXX0" },
        { name: "Rishikesh" , email: "rishikesh@gmail.com", phone: "9XXXXXXXX1" },
    ];

    return (
       <div className="about-us">
            <h2>Contact Our Admins</h2>
            <ul className="admin-contacts">
                {adminContacts.map((admin, index) => (
                    <li key={index}>
                        <h3>{admin.name}</h3>
                        <p>Email: <a href={`mailto:${admin.email}`}>{admin.email}</a></p>
                        <p>Phone: {admin.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AboutUs;

