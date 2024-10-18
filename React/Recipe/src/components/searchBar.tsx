import React, { useContext, useState, KeyboardEvent } from "react";
import useDogContext from "../context/useContext";

interface Title {
  title: string;
}

function SearchBar() {
  const { dog, fetchDog } = useDogContext(); // fetchDog now expects a name parameter
  const [title, setTitle] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Title[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const api = {
    key: "Grtlj60oM1LfEaw7Xhic2F4ub83QiXABToq8Wmgf",
    base: "https://api.api-ninjas.com/v1/dogs",
  };

  // Fetch suggestions based on the input value
  const fetchDogSuggestions = async (inputValue: string) => {
    if (inputValue.length > 2) {
      try {
        const response = await fetch(`${api.base}?name=${inputValue}`, {
          headers: { "X-Api-Key": api.key },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json();
  
        // Check if the data is an array and has elements
        if (Array.isArray(data) && data.length > 0) {
          const filteredSuggestions = data.map((dog: { name: string }) => ({
            title: dog.name,
          }));
          setSuggestions(filteredSuggestions);
        } else {
          console.error("Fetched data is not in the expected format:", data);
          setSuggestions([]);
        }
      } catch (error) {
        console.error("Error fetching dog suggestions:", error);
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };
  

  // Handle input change
  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
    await fetchDogSuggestions(value);
  };

  // Handle suggestion selection with keyboard
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown" && selectedIndex < suggestions.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else if (e.key === "ArrowUp" && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      setTitle(suggestions[selectedIndex].title);
      setSuggestions([]);
    }
  };

  // Handle search button click
  const handleSearch = async () => {
    if (title) {
      await fetchDog(title); // Fetch the dog data based on the title
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={title}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search for a dog..."
      />
      <button onClick={handleSearch}>Search</button>
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className={index === selectedIndex ? "selected" : ""}
              onClick={() => {
                setTitle(suggestion.title);
                setSuggestions([]);
              }}
            >
              {suggestion.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
