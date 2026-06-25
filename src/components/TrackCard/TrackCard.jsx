import React from "react";

const styles = {
  card: {
    background: '#ffffff',
    borderRadius: '18px',
    boxShadow: '0 14px 30px rgba(15, 23, 42, 0.08)',
    padding: '24px',
    maxWidth: '360px',
    margin: '0 auto',
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  icon: {
    width: '56px',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#eff6ff',
    borderRadius: '50%',
    marginBottom: '18px',
    fontSize: '24px',
  },
  title: {
    fontSize: '1.25rem',
    margin: '0 0 12px',
    color: '#102a43',
  },
  description: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#4a5568',
    margin: '0 0 20px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'grid',
    gap: '10px',
  },
  listItem: {
    background: '#f8fafc',
    padding: '12px 14px',
    borderRadius: '12px',
    color: '#243248',
    fontSize: '0.95rem',
  },
};

export default function TrackCard({ icon, title, description, topics }) {
  return (
    <article style={styles.card}>
      <div style={styles.icon}>{icon}</div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      <ul style={styles.list}>
        {topics.map((topic) => (
          <li key={topic} style={styles.listItem}>
            {topic}
          </li>
        ))}
      </ul>
    </article>
  );
}
