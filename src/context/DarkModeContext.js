import React, { createContext, useContext, useState } from 'react';

// Context for Dark Mode
const DarkModeContext = createContext();

// Dark Mode Provider component
export function DarkModeProvider({ children }) {
  // State to track the Dark Mode status
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// Custom hook to use the Dark Mode context
export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
}