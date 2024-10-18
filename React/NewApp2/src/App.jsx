import { useEffect, useState } from 'react';
import './App.css';
import { app } from './firebase';

import { Auth } from './components/signIn';

const URL = "https://api.first.org/data/v1/countries";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


/* 
  useEffect(() => {
    console.log("Component mounted");
    console.log("Count:", count);

    return () => {
      console.log("Cleaning up");
    };
  }, [count]); */

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(true);
      const fetchCountries = async () => {
        try {
          const response = await fetch(URL);
          const { data } = await response.json();
          // Simulate a wait time to show the loading text
          setTimeout(() => {
            setCountries(Object.values(data));
            setLoading(false); // End loading after the delay
          }, 5000); // 5 seconds wait time
        } catch (error) {
          console.error("Error fetching countries:", error);
          setLoading(false);
        }
      };
      fetchCountries();
    }
  }, [isAuthenticated]);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      {!isAuthenticated ? (
        <Auth onSignIn={handleSignIn} />
      ) : (
        <div className="card">
          <h1>Welcome to the App!</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {countries.map((country) => (
                <li key={country.region}>{country.country}</li>
              ))}
            </ul>
          )}

          <div>
            <button onClick={() => setCount((count) => count + 1)}>
              Increment
            </button>
            <button onClick={() => setCount((count) => count - 1)}>
              Decrement
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
