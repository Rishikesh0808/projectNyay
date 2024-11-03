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
            <h1>About Us</h1>
            <h2>Target Audience</h2>
            <p>
                The e-portal for courts is designed to serve a diverse range of users, including citizens seeking to navigate the legal system, 
                legal professionals looking to connect with clients, and judiciary personnel aiming to streamline their administrative processes. 
                Citizens can easily file FIRs online, track their case statuses, and access vital legal resources, empowering them to engage 
                more effectively with the judiciary. Legal professionals benefit from the platform by gaining exposure to potential clients 
                and facilitating seamless communication. Additionally, administrators and police personnel can manage their duties efficiently 
                through role-based access, ensuring that the entire system operates smoothly and effectively.
            </p>
            <h2>Motto of the Project</h2>
            <p>
                <strong>"Empowering Justice Through Accessibility and Transparency"</strong>
            </p>
            <p>
                This motto encapsulates the project's commitment to making judicial services more accessible and transparent for all. By 
                leveraging technology, the e-portal aims to empower citizens with the tools and information they need to engage with the 
                legal system confidently, fostering a more informed and involved community.
            </p>
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

