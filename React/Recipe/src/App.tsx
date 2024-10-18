import './App.css';
import { useState } from 'react';
import MainPage from './pages/mainPage';
import ContextProvider from './context/contextProvider';
import Sidebarr from './components/sideBar';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Auth } from './pages/signIn';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <Auth onSignIn={handleSignIn} />
      ) : (
        <BrowserRouter>
          <ContextProvider>
            <Sidebarr />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<Navigate to="/MainPage" />} />
                <Route path="/MainPage" element={<MainPage />} />
              </Routes>
            </div>
          </ContextProvider>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
