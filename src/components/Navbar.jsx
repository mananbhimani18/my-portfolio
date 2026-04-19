import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');

    const themeToApply = savedTheme ? savedTheme : 'dark';

    setTheme(themeToApply);
    document.documentElement.setAttribute('data-theme', themeToApply);
  }, []);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = ''; // Cleanup
    };
  }, [isMenuOpen]);

  // Handle outside click to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const SunIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
  );

  const MoonIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
  );

  return (
    <>
      {/* Premium Full-Screen Overlay */}
      <div
        className={`mobile-backdrop ${isMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <header className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            Manan
          </Link>

          {/* Right side controls (Desktop: Links + Theme, Mobile: Theme + Hamburger) */}
          <div className="navbar-controls">
            {/* Desktop Navigation Links */}
            <nav className="navbar-links-desktop">
              <Link to="/#projects" className="nav-link">Projects</Link>
              <Link to="/#skills" className="nav-link">Skills</Link>
              <Link to="/#contact" className="nav-link">Contact</Link>
              <Link to="/resume" className="nav-link">Resume</Link>
            </nav>

            {/* Theme Toggle (Visible on Desktop & Mobile) */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Hamburger Menu Icon for Mobile */}
            <button
              ref={toggleRef}
              className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}
          ref={menuRef}
          aria-hidden={!isMenuOpen}
        >
          <nav className="mobile-nav-links">
            <Link to="/#projects" className="mobile-nav-link" onClick={closeMenu} style={{ transitionDelay: isMenuOpen ? '50ms' : '0ms' }}>Projects</Link>
            <Link to="/#skills" className="mobile-nav-link" onClick={closeMenu} style={{ transitionDelay: isMenuOpen ? '100ms' : '0ms' }}>Skills</Link>
            <Link to="/#contact" className="mobile-nav-link" onClick={closeMenu} style={{ transitionDelay: isMenuOpen ? '150ms' : '0ms' }}>Contact</Link>
            <Link to="/resume" className="mobile-nav-link" onClick={closeMenu} style={{ transitionDelay: isMenuOpen ? '200ms' : '0ms' }}>Resume</Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
