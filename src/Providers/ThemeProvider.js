import React, { useState } from 'react';

// creating the context to share the data across components
export const ThemeContext = React.createContext();
export const PACIENT = 'patient'
export const RESEARCHER = 'researcher'

const ThemeProvider = ({ children }) => {
  const themes = {
    patient: {
        bgColor: '#ffff',
        fontColor: '#434A60'
    },
    researcher: {
        bgColor: '#59B2CA',
        fontColor: '#ffff'
    },
  };

  // setting the logic to handle the theme changes
  const [theme, setTheme] = useState(PACIENT);

  return (
    <ThemeContext.Provider
      value={{
        theme: themes[theme],
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
