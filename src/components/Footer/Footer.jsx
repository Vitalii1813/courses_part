import React from 'react';

const footerStyles = {
  container: {
    background: 'linear-gradient(180deg, #111827 0%, #0f172a 100%)',
    color: '#f8fafc',
    padding: '56px 32px 24px',
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '32px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  brand: {
    marginBottom: '24px',
    lineHeight: 1.4,
  },
  brandName: {
    fontSize: '1.8rem',
    fontWeight: 700,
    letterSpacing: '-0.04em',
    marginBottom: '12px',
  },
  description: {
    maxWidth: '320px',
    color: '#cbd5e1',
    fontSize: '0.95rem',
  },
  sectionTitle: {
    fontSize: '1.05rem',
    fontWeight: 700,
    marginBottom: '16px',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'grid',
    gap: '10px',
  },
  link: {
    color: '#cbd5e1',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  },
  linkHover: {
    color: '#f8fafc',
  },
  newsletterCard: {
    background: '#111827',
    border: '1px solid rgba(148, 163, 184, 0.16)',
    borderRadius: '20px',
    padding: '24px',
  },
  input: {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '14px',
    border: '1px solid rgba(148, 163, 184, 0.24)',
    background: '#0f172a',
    color: '#f8fafc',
    marginBottom: '16px',
    outline: 'none',
    fontSize: '0.96rem',
  },
  button: {
    width: '100%',
    background: '#38bdf8',
    border: 'none',
    borderRadius: '14px',
    color: '#0f172a',
    padding: '14px 0',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'background 0.2s ease',
  },
  buttonHover: {
    background: '#22d3ee',
  },
  tagList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '12px',
  },
  tag: {
    background: 'rgba(56, 189, 248, 0.12)',
    color: '#38bdf8',
    borderRadius: '999px',
    padding: '8px 14px',
    fontSize: '0.85rem',
  },
  bottomBar: {
    borderTop: '1px solid rgba(148, 163, 184, 0.16)',
    marginTop: '36px',
    paddingTop: '24px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '18px',
    fontSize: '0.92rem',
    color: '#94a3b8',
  },
  socials: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  socialButton: {
    width: '40px',
    height: '40px',
    borderRadius: '999px',
    display: 'grid',
    placeItems: 'center',
    background: 'rgba(148, 163, 184, 0.12)',
    color: '#f8fafc',
    textDecoration: 'none',
  },
};

const quickLinks = ['Company', 'Services', 'Careers', 'Blog'];
const resources = ['Support', 'Privacy', 'Terms', 'Status'];
const useCases = ['Design systems', 'E-commerce', 'SaaS products', 'Mobile apps'];
const socials = [
  { id: 'twitter', label: 'T', href: '#'},
  { id: 'linkedin', label: 'L', href: '#'},
  { id: 'github', label: 'G', href: '#'},
];

const Footer = () => {
  return (
    <footer style={footerStyles.container}>
      <div style={footerStyles.grid}>
        <div style={footerStyles.brand}>
          <div style={footerStyles.brandName}>Nova Studio</div>
          <p style={footerStyles.description}>
            Modern digital experiences, thoughtful interface systems, and design-forward products built for ambitious teams.
          </p>
          <div style={footerStyles.tagList}>
            <span style={footerStyles.tag}>Design</span>
            <span style={footerStyles.tag}>Strategy</span>
            <span style={footerStyles.tag}>Growth</span>
          </div>
        </div>

        <div>
          <div style={footerStyles.sectionTitle}>Company</div>
          <ul style={footerStyles.linkList}>
            {quickLinks.map((item) => (
              <li key={item}>
                <a style={footerStyles.link} href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div style={footerStyles.sectionTitle}>Resources</div>
          <ul style={footerStyles.linkList}>
            {resources.map((item) => (
              <li key={item}>
                <a style={footerStyles.link} href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div style={footerStyles.newsletterCard}>
          <div style={footerStyles.sectionTitle}>Stay in touch</div>
          <p style={{ color: '#cbd5e1', marginBottom: '18px', fontSize: '0.95rem' }}>
            Subscribe for product updates, design notes, and new feature releases.
          </p>
          <input
            style={footerStyles.input}
            type="email"
            placeholder="Your email address"
            aria-label="Email address"
          />
          <button style={footerStyles.button} type="button">
            Subscribe
          </button>
        </div>
      </div>

      <div style={footerStyles.bottomBar}>
        <span>© 2026 Nova Studio. All rights reserved.</span>
        <div style={footerStyles.socials}>
          {socials.map((item) => (
            <a key={item.id} style={footerStyles.socialButton} href={item.href} aria-label={item.id}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
