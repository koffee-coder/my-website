import React, { useState } from 'react';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { AiFillMediumCircle } from 'react-icons/ai';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:contact@pratyoshdesaraju.com=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    // Show success message
    setStatus('Opening your email client...');
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setStatus('');
    }, 2000);
  };

  return (
    <section style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Get In Touch</h1>
        
        {/* Social Links */}
        <div style={socialLinksStyle}>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
            aria-label="LinkedIn Profile"
          >
            <TiSocialLinkedinCircular style={socialIconStyle} />
            <span>LinkedIn</span>
          </a>
          
          <a
            href="https://medium.com/@your-profile"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
            aria-label="Medium Profile"
          >
            <AiFillMediumCircle style={socialIconStyle} />
            <span>Medium</span>
          </a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={fieldGroupStyle}>
            <label htmlFor="name" style={labelStyle}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
              placeholder="Your name"
            />
          </div>

          <div style={fieldGroupStyle}>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
              placeholder="your.email@example.com"
            />
          </div>

          <div style={fieldGroupStyle}>
            <label htmlFor="message" style={labelStyle}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={textareaStyle}
              placeholder="Your message..."
              rows="3"
            />
          </div>

          <button type="submit" style={buttonStyle}>
            Send Message
          </button>

          {status && <p style={statusStyle}>{status}</p>}
        </form>
      </div>
    </section>
  );
}

const containerStyle = {
  minHeight: '100vh',
  maxHeight: '100vh',
  width: '100vw',
  padding: '100px 20px 120px 20px',  // Increased top and bottom padding
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',  // Moved to top instead of center
  boxSizing: 'border-box',
  overflow: 'hidden',
};

const contentStyle = {
  maxWidth: '600px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const titleStyle = {
  fontSize: '2rem',
  color: '#fff',
  textAlign: 'center',
  marginBottom: '5px',
};

const socialLinksStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '40px',
  marginBottom: '10px',
};

const socialLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1rem',
  transition: 'color 0.3s ease, transform 0.3s ease',
  cursor: 'pointer',
};

const socialIconStyle = {
  fontSize: '2rem',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  padding: '20px',
  borderRadius: '10px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
};

const fieldGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
};

const labelStyle = {
  color: '#fff',
  fontSize: '0.9rem',
  fontWeight: '500',
};

const inputStyle = {
  padding: '10px 12px',
  fontSize: '0.9rem',
  borderRadius: '5px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: '#fff',
  outline: 'none',
  transition: 'border-color 0.3s ease, backgroundColor 0.3s ease',
};

const textareaStyle = {
  ...inputStyle,
  resize: 'vertical',
  fontFamily: 'inherit',
};

const buttonStyle = {
  padding: '12px 25px',
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#fff',
  backgroundColor: '#00aaff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'backgroundColor 0.3s ease, transform 0.2s ease',
  marginTop: '5px',
};

const statusStyle = {
  textAlign: 'center',
  color: '#00aaff',
  fontSize: '0.9rem',
  fontWeight: '500',
};
