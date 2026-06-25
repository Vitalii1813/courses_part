import React, { useState } from 'react';

const containerStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg,#f5f7fa 0%,#c3cfe2 100%)',
  padding: '40px 16px',
  boxSizing: 'border-box'
};

const cardStyle = {
  width: '100%',
  maxWidth: 420,
  background: '#fff',
  borderRadius: 12,
  boxShadow: '0 8px 30px rgba(29,41,63,0.12)',
  padding: 28,
  boxSizing: 'border-box'
};

const titleStyle = { margin: 0, marginBottom: 12, fontSize: 22, color: '#1d2933' };
const subtitleStyle = { margin: 0, marginBottom: 20, color: '#52606d', fontSize: 13 };
const formStyle = { display: 'grid', gap: 12 };
const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: 8,
  border: '1px solid #e6eef5',
  outline: 'none',
  fontSize: 14,
  boxSizing: 'border-box'
};
const errorStyle = { color: '#d14343', fontSize: 12 };
const rowStyle = { display: 'flex', gap: 10 };
const btnStyle = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: 8,
  border: 'none',
  background: '#2563eb',
  color: '#fff',
  fontWeight: 600,
  cursor: 'pointer'
};

export default function RegisterSection() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const onChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = 'Required';
    if (!/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(form.email)) err.email = 'Invalid email';
    if (form.password.length < 6) err.password = 'At least 6 characters';
    if (form.password !== form.confirm) err.confirm = "Passwords don't match";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: replace with real submit (API call)
    console.log('Register', { name: form.name, email: form.email });
    alert('Registered — demo only');
  };

  return (
    <section style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>Create account</h1>
        <p style={subtitleStyle}>Quick and secure sign up to get started.</p>

        <form style={formStyle} onSubmit={onSubmit} noValidate>
          <div>
            <label style={{ fontSize: 12, color: '#425466' }}>Full name</label>
            <input name="name" value={form.name} onChange={onChange} style={inputStyle} placeholder="Your full name" />
            {errors.name && <div style={errorStyle}>{errors.name}</div>}
          </div>

          <div>
            <label style={{ fontSize: 12, color: '#425466' }}>Email</label>
            <input name="email" value={form.email} onChange={onChange} style={inputStyle} placeholder="you@example.com" />
            {errors.email && <div style={errorStyle}>{errors.email}</div>}
          </div>

          <div style={rowStyle}>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: 12, color: '#425466' }}>Password</label>
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={onChange}
                style={inputStyle}
                placeholder="Enter password"
              />
              {errors.password && <div style={errorStyle}>{errors.password}</div>}
            </div>
            <div style={{ width: 120 }}>
              <label style={{ fontSize: 12, color: '#425466', visibility: 'hidden' }}>toggle</label>
              <button type="button" onClick={() => setShowPassword((s) => !s)} style={{ ...btnStyle, background: '#e6eef5', color: '#0f1724' }}>
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div>
            <label style={{ fontSize: 12, color: '#425466' }}>Confirm password</label>
            <input name="confirm" type={showPassword ? 'text' : 'password'} value={form.confirm} onChange={onChange} style={inputStyle} placeholder="Repeat password" />
            {errors.confirm && <div style={errorStyle}>{errors.confirm}</div>}
          </div>

          <button type="submit" style={btnStyle}>Create account</button>
        </form>

        <p style={{ marginTop: 14, fontSize: 13, color: '#616e7b' }}>
          By creating an account you agree to our terms of service.
        </p>
      </div>
    </section>
  );
}
