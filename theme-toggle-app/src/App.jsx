import React, { useState } from 'react';
import './app.css';

const App = () => {

  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setCount(prevCount => prevCount + 1);
  };

  const SunIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m4.93 19.07 1.41-1.41" />
      <path d="m17.66 6.34 1.41-1.41" />
    </svg>
  );

  const MoonIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );

  return (
    <div className={`app-container ${theme}`}>
      <div className="theme-card">
        <h1 className="theme-title">Theme Toggle</h1>
        <p className="theme-status">
          The current theme is: 
          <span className="theme-name">{theme}</span>
        </p>
        
        <p className="theme-count">
          Theme switched: <span className="theme-count-value">{count}</span> times
        </p>
        
        <button
          onClick={toggleTheme}
          className="toggle-button"
        >
          {theme === 'light' ? (
            <>
              <MoonIcon />
              <span>Switch to Dark</span>
            </>
          ) : (
            <>
              <SunIcon />
              <span>Switch to Light</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default App;
