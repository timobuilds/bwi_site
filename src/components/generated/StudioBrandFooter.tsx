import React, { useState } from 'react';
import xLogo from '../../../x-logo.svg';
import pensifLogo from '../../../logos/pensif_logo.svg';
interface StudioBrandFooterProps {
  className?: string;
  style?: React.CSSProperties;
}
export const StudioBrandFooter: React.FC<StudioBrandFooterProps> = ({
  className,
  style
}) => {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);
  const containerStyle: React.CSSProperties = {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    overflow: 'hidden',
    position: 'relative',
    padding: '40px 20px',
    ...style
  };
  const logoStyle: React.CSSProperties = {
    width: '20px',
    height: '20px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    marginBottom: '30px'
  };
  const textBlockStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '213px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    boxSizing: 'border-box',
    marginBottom: '52px'
  };
  const textStyle: React.CSSProperties = {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '14px',
    letterSpacing: '0px',
    textAlign: 'center',
    whiteSpace: 'pre-line',
    margin: 0
  };
  const footerLogosStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    boxSizing: 'border-box',
    flexWrap: 'wrap'
  };
  const partnerLogoLinkStyle = (id: string): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    transition: 'filter 0.2s ease, transform 0.2s ease',
    filter: hoveredLogo === id ? 'brightness(0) saturate(100%) invert(80%)' : 'none',
    transform: hoveredLogo === id ? 'scale(1.05)' : 'scale(1)',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    padding: 0
  });
  const staticLogoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    filter: 'blur(1px) brightness(1.05) saturate(0.9)'
  };
  return <footer className={`studio-brand-footer ${className || ''}`.trim()} style={containerStyle}>
      <img src="https://storage.googleapis.com/storage.magicpath.ai/user/282702543900004352/figma-assets/1c742c81-c34a-4759-83bc-58be6e8cfbfa.svg" alt="Build Wonder Logo" className="bw-logo" style={logoStyle} />

      <div className="content-frame" style={textBlockStyle}>
        <p className="description-text" style={textStyle}>
          <span className="description-line">Scientists uncover what is.</span>
          <span className="description-line">Engineers create what wasn’t.</span>
          <span className="description-line">Storytellers reveal what could be.</span>
          <span className="description-line is-spacer" aria-hidden="true"></span>
          <span className="description-line">Build Wonder is a product engineering practice that helps derisk, package, and position frontier technologies.</span>
        </p>
      </div>

      <div className="partner-logos-row" style={footerLogosStyle}>
        <a
          className="partner-logo-item"
          href="https://chromewebstore.google.com/detail/sparks/hhjdhihdokahflhfjgpkebfjnkgfljdj"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Sparks – Chrome Web Store"
          style={partnerLogoLinkStyle('sparks')}
          onMouseEnter={() => setHoveredLogo('sparks')}
          onMouseLeave={() => setHoveredLogo(null)}
        >
          <div className="sparks-logo-svg" style={{
          width: '20px',
          height: '20px',
          boxSizing: 'border-box',
          overflow: 'hidden',
          position: 'relative'
        }}>
            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/282702543900004352/figma-assets/fbe57983-6de1-4c98-b28b-02fac8a42ba0.svg" alt="" style={{
            width: '0.81px',
            height: '0.77px',
            position: 'absolute',
            left: '9.71px',
            top: '9.69px'
          }} />
            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/282702543900004352/figma-assets/e5cd1bb3-e65b-4466-8768-e7a71976e28a.svg" alt="" style={{
            width: '18.89px',
            height: '18.71px',
            position: 'absolute',
            left: '0.69px',
            top: '0.73px'
          }} />
          </div>
        </a>

        <a
          className="partner-logo-item"
          href="https://www.theautomagicalbook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Automagical – The Automagical Book"
          style={partnerLogoLinkStyle('automagical')}
          onMouseEnter={() => setHoveredLogo('automagical')}
          onMouseLeave={() => setHoveredLogo(null)}
        >
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/282702543900004352/figma-assets/5b429df2-c9e1-47bc-883a-25a3b50499dd.svg" alt="Automagical" style={{
          width: '20px',
          height: '20px'
        }} />
        </a>

        <div className="partner-logo-item partner-logo-glass" aria-label="Act Method" style={staticLogoStyle}>
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/282702543900004352/figma-assets/ebb4a9c1-c0af-4571-9c57-5ad1324ad7aa.svg" alt="Act Method" style={{
          width: '26px',
          height: '20px'
        }} />
        </div>

        <a
          className="partner-logo-item"
          href="https://www.appliedresearchclub.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Applied Research Club"
          style={partnerLogoLinkStyle('arc')}
          onMouseEnter={() => setHoveredLogo('arc')}
          onMouseLeave={() => setHoveredLogo(null)}
        >
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/282702543900004352/figma-assets/c0b48ec7-64c8-4ca9-8c6b-a71dcfa217b8.svg" alt="Applied Research Club" style={{
            width: '41.28px',
            height: '14.34px'
          }} />
        </a>

        <a
          className="partner-logo-item"
          href="https://pensif.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pensif"
          style={partnerLogoLinkStyle('pensif')}
          onMouseEnter={() => setHoveredLogo('pensif')}
          onMouseLeave={() => setHoveredLogo(null)}
        >
          <img src={pensifLogo} alt="Pensif" style={{
            width: '20px',
            height: '20px'
          }} />
        </a>
      </div>

      <a
        className="footer-x-logo"
        href="https://x.com/timobuilds"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (Twitter) @timobuilds"
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          transition: 'opacity 0.2s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
        onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
      >
        <img
          src={xLogo}
          alt=""
          style={{
            width: '10px',
            height: '10px',
            display: 'block',
            filter: 'brightness(0)',
            opacity: 0.28,
          }}
        />
      </a>
    </footer>;
};