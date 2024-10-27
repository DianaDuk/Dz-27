import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './Pages/Header';
import { ThemeSwitcher } from './Pages/ThemeSwitcher';
import { Home } from './Pages/Home';
import { Contacts } from './Pages/Contacts';
import { AboutMe } from './Pages/AboutMe';
import  ErrorBoudary from './Pages/ErrorBoudary';
import './Pages/Pages.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return(
    <div className={`app ${theme}`}>
      <Router>
        <Header />
        <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
        <ErrorBoudary>
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/contacts" element = {<Contacts />} />
            <Route path = "/about-me" element = {<AboutMe />} />
          </Routes>
        </ErrorBoudary>
      </Router>
    </div>
  )
}

export default App;

