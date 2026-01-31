import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = ({ theme = 'dark' }) => {
  const navigate = useNavigate();
  const isDark = theme === 'dark';
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      color: isDark ? '#ffffff' : '#1a1a1a',
      textAlign: 'center',
      padding: '40px 20px',
    }}>
      <h1 style={{
        fontSize: '5rem',
        fontWeight: '700',
        marginBottom: '20px',
        color: '#FDB515',
      }}>
        404
      </h1>
      <h2 style={{
        fontSize: '2rem',
        marginBottom: '20px',
        fontWeight: '600',
      }}>
        Page Not Found
      </h2>
      <p style={{
        fontSize: '1.2rem',
        marginBottom: '30px',
        opacity: 0.8,
      }}>
        Sorry, the page you're looking for doesn't exist.
      </p>
      <p style={{
        fontSize: '1.5rem',
        opacity: 0.9,
        fontWeight: '600',
      }}>
        Redirecting in <span style={{ color: '#FDB515' }}>{countdown}</span> second{countdown !== 1 ? 's' : ''}...
      </p>
    </div>
  );
};

export default NotFound;
