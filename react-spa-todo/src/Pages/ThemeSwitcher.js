import React from 'react';

export function ThemeSwitcher({ toggleTheme, theme }) {
  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
      </button>
    </div>
  );
}


