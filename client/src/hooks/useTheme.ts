import { useState, useEffect } from 'react';

const useTheme = (): { theme: string; toggleTheme: (newTheme: string) => void } => {
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') || systemTheme,
  );

  const toggleTheme = (newTheme: string): void => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return { theme, toggleTheme };
};

export default useTheme;
