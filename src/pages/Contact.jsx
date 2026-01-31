// Contact.jsx
import React, { useState } from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillMediumCircle } from "react-icons/ai";
import { MdContentCopy, MdCheck } from "react-icons/md"; // Add MdCheck for checkmark

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://contact-form-handler.pratyosh-desaraju.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('Failed to send message. Please try again.');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
      setTimeout(() => setStatus(''), 3000);
    }
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
    <div style={{
      minHeight: "100vh",
      padding: "80px 20px 40px",
      color: textColor,
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        {/* Header - Get in Touch */}
        <div style={{
          textAlign: "center",
          marginBottom: "40px",
        }}>
          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: "700",
            marginBottom: "30px",
            color: isDark ? "#ffffff" : "#003262",
          }}>
            Get in Touch
          </h1>

          {/* Email */}
          <div style={{ marginBottom: "25px" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              position: "relative",
            }}>
              <a
                href="mailto:contact@pratyoshdesaraju.com"
                style={{
                  color: isDark ? "#ffffff" : "#003262",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                  fontWeight: "500",
                }}
              >
                contact@pratyoshdesaraju.com
              </a>
              <button
                onClick={handleEmailCopy}
                style={{
                  background: showCopied 
                    ? (isDark ? "#10b981" : "#059669")
                    : "transparent",
                  border: "none",
                  color: showCopied ? "#fff" : textColor,
                  cursor: "pointer",
                  fontSize: "1.3rem",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "6px",
                  transition: "all 0.3s ease",
                  transform: showCopied ? "scale(1.1)" : "scale(1)",
                }}
                title={showCopied ? "Copied!" : "Copy email"}
              >
                {showCopied ? <MdCheck /> : <MdContentCopy />}
              </button>
              
              {/* Copied notification popup */}
              {showCopied && (
                <div style={{
                  position: "absolute",
                  top: "-40px",
                  right: "calc(50% - 140px)",
                  background: isDark ? "#10b981" : "#059669",
                  color: "#fff",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  animation: "slideDown 0.3s ease",
                  zIndex: 10,
                }}>
                  ✓ Copied to clipboard!
                </div>
              )}
            </div>
          </div>

          {/* Social Media */}
          <div style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginBottom: "20px",
          }}>
            <a
              href="https://www.linkedin.com/in/pratyosh"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: textColor,
                fontSize: "2.5rem",
                transition: "all 0.3s ease",
              }}
            >
              <TiSocialLinkedinCircular />
            </a>
            <a
              href="https://medium.com/@pratyosh.desaraju/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: textColor,
                fontSize: "2.5rem",
                transition: "all 0.3s ease",
              }}
            >
              <AiFillMediumCircle />
            </a>
          </div>
        </div>

        {/* Contact Form - Single centered box */}
        <div style={{
          maxWidth: "600px",
          margin: "0 auto",
        }}>
          <div style={{
            padding: "40px",
            borderRadius: "20px",
          }}>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "20px" }}>
                <label style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "transparent",
                    border: `1px solid ${inputBorderColor}`,
                    borderRadius: "10px",
                    color: textColor,
                    fontSize: "1rem",
                    outline: "none",
                    transition: "all 0.3s ease",
                  }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "transparent",
                    border: `1px solid ${inputBorderColor}`,
                    borderRadius: "10px",
                    color: textColor,
                    fontSize: "1rem",
                    outline: "none",
                    transition: "all 0.3s ease",
                  }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "transparent",
                    border: `1px solid ${inputBorderColor}`,
                    borderRadius: "10px",
                    color: textColor,
                    fontSize: "1rem",
                    outline: "none",
                    resize: "vertical",
                    transition: "all 0.3s ease",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px",
                  background: buttonBgColor,
                  color: isDark ? "#000" : "#fff",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                Send Message
              </button>

              {status && (
                <div style={{
                  marginTop: "20px",
                  padding: "12px",
                  background: statusColor,
                  color: "#fff",
                  borderRadius: "10px",
                  textAlign: "center",
                  fontWeight: "500",
                }}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Add CSS animation for the popup */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
