// ThemeSwitcher.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Blue' : 'Light'} Theme
    </button>
  );
};

export default ThemeSwitcher;
