import React from 'react';
import './Navbar.css'; // Просто імпортуємо файл, без "from styles"

const navItems = [
  { label: 'Mathematics', href: 'math' },
  { label: 'Sales', href: 'sales' },
  { label: 'AI / ML', href: 'ai' },
  { label: 'Courses', href: 'courses' },
];

const Navbar = () => {
  return (
    <header className="nav">
      <div className="logo">
        <a href="/" className="brand">NovaLearn</a>
        <span className="tagline">Математика • Продажі • AI/ML</span>
      </div>

      <nav>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button type="button" className="cta-button">
        Почати навчання
      </button>
    </header>
  );
};

export default Navbar;