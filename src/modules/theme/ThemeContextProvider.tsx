import React from 'react';

interface ThemeProps {
  theme: 'light' | 'dark';
}

export const ThemeContext = React.createContext<Partial<ThemeProps>>({});

const ThemeContextProvider: React.FC<any> = ({ children }) => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    if (localStorage.theme === 'dark' || !('theme' in localStorage)) {
      document.body.classList.add('dark');
      setTheme('dark');
    } else {
      document.body.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  React.useEffect(() => {
    localStorage.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className='bg-white dark:bg-gray-900 dark:text-white min-h-screen'>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
