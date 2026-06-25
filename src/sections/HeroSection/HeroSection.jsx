import React from 'react'

const HeroSection = () => {
  const styles = {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '4rem 2rem',
      gap: '2rem',
      background: 'linear-gradient(135deg, #0f172a 0%, #111827 50%, #0b1220 100%)',
      color: '#fff',
      minHeight: '60vh',
      boxSizing: 'border-box'
    },
    content: {
      maxWidth: 720,
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem'
    },
    eyebrow: {
      color: '#9ca3af',
      fontSize: '0.95rem',
      letterSpacing: '0.06em'
    },
    title: {
      fontSize: 'clamp(2rem, 4vw, 3.25rem)',
      lineHeight: 1.03,
      margin: 0,
      fontWeight: 700,
      color: '#fff'
    },
    accent: {
      color: '#7c3aed'
    },
    subtitle: {
      color: '#d1d5db',
      fontSize: '1.05rem',
      maxWidth: 560
    },
    ctas: {
      display: 'flex',
      gap: '0.75rem',
      marginTop: '0.5rem'
    },
    primaryBtn: {
      background: 'linear-gradient(90deg,#7c3aed,#06b6d4)',
      color: '#fff',
      border: 'none',
      padding: '0.85rem 1.25rem',
      borderRadius: 10,
      fontWeight: 600,
      cursor: 'pointer',
      boxShadow: '0 8px 24px rgba(124,58,237,0.18)'
    },
    secondaryBtn: {
      background: 'transparent',
      color: '#cbd5e1',
      border: '1px solid rgba(203,213,225,0.12)',
      padding: '0.75rem 1rem',
      borderRadius: 10,
      cursor: 'pointer'
    },
    visual: {
      flex: '0 0 360px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    card: {
      width: 320,
      height: 220,
      borderRadius: 18,
      background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
      border: '1px solid rgba(255,255,255,0.04)',
      display: 'flex',
      flexDirection: 'column',
      padding: '1rem',
      boxShadow: '0 12px 40px rgba(2,6,23,0.6)'
    }
  }

  return (
    <section style={styles.root} aria-label="Головний блок — перше враження">
      <div style={styles.content}>
        <h1 style={styles.title}>
          Навчальний простір
        </h1>

        <div style={styles.ctas}>
          <a href="#booking" aria-label="Записатися зараз">
            <button style={styles.primaryBtn}>Записатися</button>
          </a>
          <a href="#services" aria-label="Детальніше про послуги">
            <button style={styles.secondaryBtn}>Детальніше</button>
          </a>
        </div>
      </div>

      <div style={styles.visual} aria-hidden>
        <div style={styles.card}>
          {/* Simple illustrative layout */}
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div style={{width:56,height:56,borderRadius:12,background:'#111827'}} />
            <div style={{flex:1,marginLeft:12}}>
              <div style={{height:10,background:'rgba(255,255,255,0.06)',borderRadius:6,width:'60%'}}/>
              <div style={{height:8,background:'rgba(255,255,255,0.04)',borderRadius:6,width:'30%',marginTop:8}}/>
            </div>
          </div>
          <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <rect x="2" y="2" width="116" height="56" rx="8" stroke="rgba(124,58,237,0.18)" strokeWidth="3"/>
              <path d="M8 44h104" stroke="rgba(6,182,212,0.08)" strokeWidth="6" strokeLinecap="round"/>
            </svg>
          </div>
          <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}>
            <div style={{width:48,height:8,background:'rgba(255,255,255,0.03)',borderRadius:6}}/>
            <div style={{width:28,height:8,background:'rgba(255,255,255,0.02)',borderRadius:6}}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
