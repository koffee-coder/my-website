// Contact.jsx
import React, { useState } from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillMediumCircle } from "react-icons/ai";

const Contact = ({ theme = "dark" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [showCopied, setShowCopied] = useState(false);
  const isDark = theme === "dark";

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
    const mailtoLink = `mailto:contact@pratyoshdesaraju.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
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

  const handleEmailCopy = () => {
    const email = "contact@pratyoshdesaraju.com";
    navigator.clipboard.writeText(email);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  // Theme-aware colors
  const textColor = isDark ? "#ffffff" : "#1a1a1a";
  const bgColor = isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)";
  const borderColor = isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";
  const inputBgColor = isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.9)";
  const inputBorderColor = isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)";
  const buttonBgColor = isDark ? "#00aaff" : "#FDB515";
  const statusColor = isDark ? "#10b981" : "#059669";

  return (
    <div 
      style={{
        padding: "120px 8vw 100px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: textColor,
        background: "transparent",
      }}
    >
      <h1 
        style={{
          fontSize: "3.5rem",
          fontWeight: 700,
          marginBottom: "2rem",
          textAlign: "center",
          color: textColor,
        }}
      >
        Contact
      </h1>

      <section style={containerStyle(isDark)}>
        <div style={contentStyle}>
          <h2 style={titleStyle(textColor)}>Get In Touch</h2>
          
          {/* Social Links */}
          <div style={socialLinksStyle(isDark)}>
            <a
              href="https://www.linkedin.com/in/pratyosh"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle(textColor)}
              aria-label="LinkedIn Profile"
            >
              <TiSocialLinkedinCircular style={socialIconStyle} />
              <span>LinkedIn</span>
            </a>
            
            <a
              href="https://medium.com/@pratyosh.desaraju"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle(textColor)}
              aria-label="Medium Profile"
            >
              <AiFillMediumCircle style={socialIconStyle} />
              <span>Medium</span>
            </a>
          </div>

          {/* Quick Email Copy */}
          <button
            onClick={handleEmailCopy}
            style={{
              display: "block",
              margin: "0 auto 2rem",
              padding: "12px 24px",
              fontSize: "1.1rem",
              borderRadius: "12px",
              border: isDark ? "1px solid rgba(255,255,255,0.3)" : "1px solid rgba(0,0,0,0.2)",
              background: inputBgColor,
              color: textColor,
              cursor: "pointer",
              backdropFilter: "blur(10px)",
              transition: "all 0.3s ease",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => {
              e.target.style.background = isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = inputBgColor;
            }}
          >
            📧 Copy Email
          </button>

          {showCopied && (
            <div style={{
              color: statusColor,
              fontSize: "1rem",
              fontWeight: 500,
              textAlign: "center",
              marginBottom: "1rem",
              animation: "fadeIn 0.3s ease",
            }}>
              Email copied to clipboard!
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} style={formStyle(bgColor, borderColor, inputBgColor)}>
            <div style={fieldGroupStyle}>
              <label htmlFor="name" style={labelStyle(textColor)}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle(inputBgColor, inputBorderColor, textColor)}
                placeholder="Your name"
              />
            </div>

            <div style={fieldGroupStyle}>
              <label htmlFor="email" style={labelStyle(textColor)}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle(inputBgColor, inputBorderColor, textColor)}
                placeholder="your.email@example.com"
              />
            </div>

            <div style={fieldGroupStyle}>
              <label htmlFor="message" style={labelStyle(textColor)}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={textareaStyle(inputBgColor, inputBorderColor, textColor)}
                placeholder="Your message..."
                rows="3"
              />
            </div>

            <button type="submit" style={buttonStyle(buttonBgColor, textColor)}>
              Send Message
            </button>

            {status && <p style={statusStyle(statusColor)}>{status}</p>}
          </form>
        </div>
      </section>
    </div>
  );
};

// Theme-aware styles
const containerStyle = (isDark) => ({
  maxWidth: '600px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  boxSizing: 'border-box',
});

const contentStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
};

const titleStyle = (color) => ({
  fontSize: '2rem',
  color,
  textAlign: 'center',
  marginBottom: '0px',
});

const socialLinksStyle = (isDark) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '40px',
  marginBottom: '10px',
});

const socialLinkStyle = (color) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  color,
  textDecoration: 'none',
  fontSize: '1rem',
  transition: 'color 0.3s ease, transform 0.3s ease',
  cursor: 'pointer',
});

const socialIconStyle = {
  fontSize: '2rem',
};

const formStyle = (bgColor, borderColor, inputBgColor) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  backgroundColor: bgColor,
  padding: '20px',
  borderRadius: '10px',
  border: `1px solid ${borderColor}`,
});

const fieldGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
};

const labelStyle = (color) => ({
  color,
  fontSize: '0.9rem',
  fontWeight: '500',
});

const inputStyle = (bgColor, borderColor, textColor) => ({
  padding: '10px 12px',
  fontSize: '0.9rem',
  borderRadius: '5px',
  border: `1px solid ${borderColor}`,
  backgroundColor: bgColor,
  color: textColor,
  outline: 'none',
  transition: 'border-color 0.3s ease, backgroundColor 0.3s ease',
});

const textareaStyle = (bgColor, borderColor, textColor) => ({
  ...inputStyle(bgColor, borderColor, textColor),
  resize: 'vertical',
  fontFamily: 'inherit',
});

const buttonStyle = (bgColor, textColor) => ({
  padding: '12px 25px',
  fontSize: '1rem',
  fontWeight: 'bold',
  color: textColor,
  backgroundColor: bgColor,
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'backgroundColor 0.3s ease, transform 0.2s ease',
  marginTop: '5px',
});

const statusStyle = (color) => ({
  textAlign: 'center',
  color,
  fontSize: '0.9rem',
  fontWeight: '500',
});

export default Contact;
