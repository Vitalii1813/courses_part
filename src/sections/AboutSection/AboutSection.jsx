import React from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem',
  padding: '4rem 2rem',
  background: 'linear-gradient(135deg, #0f172a 0%, #0b1220 100%)',
  color: '#e6eef8',
  borderRadius: '12px',
  boxShadow: '0 10px 30px rgba(2,6,23,0.6)',
};

const leftStyle = {
  flex: 1,
  minWidth: 280,
};

const rightStyle = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 280,
};

const headingStyle = {
  fontSize: '2.2rem',
  margin: 0,
  letterSpacing: '-0.02em',
  lineHeight: 1.05,
};

const accentStyle = {
  display: 'inline-block',
  background: 'linear-gradient(90deg,#7c3aed,#06b6d4)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
};

const textStyle = {
  marginTop: '1rem',
  color: '#cfe8ff',
  fontSize: '1rem',
  lineHeight: 1.6,
};

const statsRow = {
  display: 'flex',
  gap: '1rem',
  marginTop: '1.5rem',
  flexWrap: 'wrap',
};

const statCard = {
  background: 'rgba(255,255,255,0.04)',
  padding: '0.6rem 1rem',
  borderRadius: '10px',
  minWidth: 110,
  textAlign: 'center',
};

const statNumber = {
  fontSize: '1.1rem',
  fontWeight: 700,
  color: '#fff',
};

const avatarStyle = {
  width: 220,
  height: 220,
  borderRadius: 20,
  background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#9fb4d9',
  fontSize: '0.9rem',
  boxShadow: '0 8px 30px rgba(3,7,18,0.6), inset 0 1px 0 rgba(255,255,255,0.02)',
};

const AboutSection = () => {
  return (
    <section style={{ padding: '3rem 1rem' }}>
      <div style={containerStyle}>
        <div style={leftStyle}>
          <h2 style={headingStyle}>
            Про мене <span style={accentStyle}>— модерн підхід</span>
          </h2>
          <p style={textStyle}>
            Я створюю сучасні веб-додатки з акцентом на швидкість, доступність і
            приємний інтерфейс. Працюю з React, сучасними інструментами і
            компонентним підходом, щоб ваш продукт був масштабованим і
            підтримуваним.
          </p>

          <div style={statsRow}>
            <div style={statCard}>
              <div style={statNumber}>5+</div>
              <div style={{ fontSize: 12, color: '#9fb4d9' }}>Років досвіду</div>
            </div>

            <div style={statCard}>
              <div style={statNumber}>50+</div>
              <div style={{ fontSize: 12, color: '#9fb4d9' }}>Проєктів</div>
            </div>

            <div style={statCard}>
              <div style={statNumber}>100%</div>
              <div style={{ fontSize: 12, color: '#9fb4d9' }}>Фокус на якості</div>
            </div>
          </div>
        </div>

        <div style={rightStyle}>
          <div style={avatarStyle}>
            {/* Placeholder avatar - replace with img if available */}
            <div>
              <strong>Ваше фото</strong>
              <div style={{ fontSize: 12, marginTop: 6 }}>або логотип</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
