import { useEffect, useState } from 'react'
import './App.css';

const URL = "https://api.first.org/data/v1/countries"

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Im running");
    console.log(count);

    return () => {
      console.log("Im cleaning up");
    }
  }, [count])

  const [countries, setCountries] = useState([])

  useEffect(() => {
    setLoading(true);
    const fetchCountries = async () => {
      const response = await fetch(URL);
      const { data } = await response.json();
       // Simulate a wait time to show the loading text
      setTimeout(() => {
        setCountries(Object.values(data));
        setLoading(false); // End loading after the delay
      }, 5000); //  wait time
    };
    fetchCountries();
  }, []);

  console.log(countries);

  return (
    <>
      <div className="card">
        {count}
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button><br />
        <button onClick={() => setCount((count) => count - 1)}>Decrement</button>

        {/* <ul>
          {countries.map((countries) => (
            <li key={countries.country}>{countries.region}</li>
          ))}
        </ul> */}

        {loading ? <p>Loadding....</p>: (
          <ul>
            {countries.map((country) => (
              <li key={country.region}>{country.country}</li>
            ))}
          </ul>
        )}

      </div>
    </>
  )
}

export default App
