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
        {/* Header */}
        <div style={{
          textAlign: "center",
          marginBottom: "60px",
        }}>
          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: "700",
            marginBottom: "20px",
            background: isDark 
              ? "linear-gradient(135deg, #00aaff 0%, #00ff88 100%)"
              : "linear-gradient(135deg, #003262 0%, #FDB515 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Let's Connect
          </h1>
          <p style={{
            fontSize: "1.2rem",
            opacity: 0.8,
            maxWidth: "600px",
            margin: "0 auto",
          }}>
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        {/* Contact Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
          marginBottom: "60px",
        }}>
          {/* Contact Form */}
          <div style={{
            background: bgColor,
            padding: "40px",
            borderRadius: "20px",
            border: `1px solid ${borderColor}`,
            backdropFilter: "blur(10px)",
          }}>
            <h2 style={{
              fontSize: "2rem",
              marginBottom: "30px",
              fontWeight: "600",
            }}>
              Send a Message
            </h2>

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
                    background: inputBgColor,
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
                    background: inputBgColor,
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
                    background: inputBgColor,
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

          {/* Contact Info */}
          <div style={{
            background: bgColor,
            padding: "40px",
            borderRadius: "20px",
            border: `1px solid ${borderColor}`,
            backdropFilter: "blur(10px)",
          }}>
            <h2 style={{
              fontSize: "2rem",
              marginBottom: "30px",
              fontWeight: "600",
            }}>
              Get in Touch
            </h2>

            <div style={{ marginBottom: "30px" }}>
              <h3 style={{
                fontSize: "1.2rem",
                marginBottom: "10px",
                fontWeight: "600",
              }}>
                Email
              </h3>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}>
                <a
                  href="mailto:contact@pratyoshdesaraju.com"
                  style={{
                    color: isDark ? "#00aaff" : "#003262",
                    textDecoration: "none",
                    fontSize: "1.1rem",
                  }}
                >
                  contact@pratyoshdesaraju.com
                </a>
                <button
                  onClick={handleEmailCopy}
                  style={{
                    padding: "6px 12px",
                    background: inputBgColor,
                    border: `1px solid ${inputBorderColor}`,
                    borderRadius: "6px",
                    color: textColor,
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    transition: "all 0.3s ease",
                  }}
                >
                  {showCopied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <h3 style={{
                fontSize: "1.2rem",
                marginBottom: "10px",
                fontWeight: "600",
              }}>
                Social Media
              </h3>
              <div style={{
                display: "flex",
                gap: "15px",
              }}>
                <a
                  href="https://linkedin.com/in/yourprofile"
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
                  href="https://medium.com/@yourprofile"
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
          </div>
        </div>
      </div>
    </div>
  );
};
//re_cB439bUb_44d9ydXYEZeHmQPLXVFGMWLo
export default Contact;
