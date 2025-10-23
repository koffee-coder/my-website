import React, { useEffect, useRef, useCallback } from 'react';
import './ProfileCard.css';

const ProfileCardComponent = ({
  avatarUrl,
  name = 'PRATYOSH DESARAJU',
  title = 'Senior Engineer',
  status = 'Online'
}) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  // 3D tilt logic
  const handlePointerMove = useCallback(
    event => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;

      const percentX = (offsetX / rect.width) * 100;
      const percentY = (offsetY / rect.height) * 100;

      const rotateX = ((percentY - 50) / 7);
      const rotateY = ((percentX - 50) / 7);

      card.style.setProperty('--rotate-x', `${rotateY}deg`);
      card.style.setProperty('--rotate-y', `${-rotateX}deg`);
    },
    []
  );

  const handlePointerLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--rotate-x', `0deg`);
    card.style.setProperty('--rotate-y', `0deg`);
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    card.addEventListener('pointermove', handlePointerMove);
    card.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      card.removeEventListener('pointermove', handlePointerMove);
      card.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [handlePointerMove, handlePointerLeave]);

  return (
    <div ref={wrapRef} className="pc-card-wrapper">
      <section
        ref={cardRef}
        className="pc-card pc-card-full-bg"
        style={{
          backgroundImage: `url(${avatarUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="pc-bottom-section">
          <div className="pc-details-bottom">
            <h3>{name}</h3>
            <p>{title}</p>
            <p className="pc-company">Liberty Mutual Insurance Group</p>
          </div>
          <div className="pc-status-bottom">
            <span className="pc-status-dot" />
            <span>{status}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);
export default ProfileCard;
