import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoggedOutPage() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/'); // Change '/login' to your actual login route
    };

    return (
        <div 
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                
                color: 'black'
            }}
        >
            <div 
                style={{
                    width: '380px',
                    padding: '40px',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '25px',
                    border: '10px solid ',
                    borderColor:'black',
                    backgroundImage: 'linear-gradient(#f9f9f9, #f9f9f9), linear-gradient(45deg, #ddd, #fff)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'content-box, border-box',
                    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)',
                    textAlign: 'center',
                }}
            >
                <div style={{ marginBottom: '20px' }}>
                    <svg 
                        width="60" 
                        height="60" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="black" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        style={{ marginBottom: '10px' }}
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                </div>
                <h5 style={{ fontWeight: 'bold', fontSize: '1.75rem', marginBottom: '10px', color: '#000' }}>
                    You have logged out
                </h5>
                <p style={{ color: '#333', fontSize: '1rem', marginBottom: '30px' }}>
                    Please log in to continue.
                </p>
                <button 
                    onClick={handleLoginClick} 
                    style={{
                        width: '100%',
                        padding: '10px 0',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        color: '#000',
                        backgroundColor: '#fff',
                        border: '2px solid #000',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: '0.3s',
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.boxShadow = '0px 0px 12px rgba(0, 0, 0, 0.2)';
                        e.target.style.backgroundColor = '#eee';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.boxShadow = 'none';
                        e.target.style.backgroundColor = '#fff';
                    }}
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default LoggedOutPage;
