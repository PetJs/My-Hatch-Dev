import { useEffect, useState, createContext, ReactNode } from "react";

interface ContextProviderProps {
  children: ReactNode;
}

interface DogData {
  name: string;
  barking: number;
  image_link: string;
  good_with_children: number;
  good_with_other_dogs: number;
  shedding: number;
  grooming: number;
  drooling: number;
  coat_length: number;
  good_with_strangers: number;
  playfulness: number;
  trainability: number;
  energy: number;
  min_life_expectancy: number;
  max_life_expectancy: number;

}

interface DogContextInterface {
  dog: DogData;
  fetchDog: (name: string) => Promise<void>;
  setDog: (dogData: DogData) => void;
}

export const DogContext = createContext<DogContextInterface | null>(null);

function ContextProvider({ children }: ContextProviderProps) {
  const api = {
    key: "Grtlj60oM1LfEaw7Xhic2F4ub83QiXABToq8Wmgf",
    base: "https://api.api-ninjas.com/v1/dogs",
  };

  const [dog, setDog] = useState<DogData>({
    name: "",
    barking: 0,
    image_link: "",
    good_with_children: 0,
    good_with_other_dogs: 0,
    shedding: 0,
    grooming: 0,
    drooling: 0,
    coat_length: 0,
    good_with_strangers: 0,
    playfulness: 0,
    trainability: 0,
    energy: 0,
    min_life_expectancy: 0,
    max_life_expectancy: 0,
  });

  const fetchDog = async (name: string) => {
    try {
      const response = await fetch(`${api.base}?name=${name}`, {
        headers: { "X-Api-Key": api.key },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      // Check if the data is an array
      if (Array.isArray(data) && data.length > 0) {
        const dogData = data[0]; // Access the first object in the array
  
        if (dogData.name !== undefined) {
          setDog(dogData);
        } else {
          console.error("Fetched data is not in the expected format:", dogData);
        }
      } else {
        console.error("Fetched data is not in the expected format:", data);
      }
    } catch (error) {
      console.error("Error fetching dog:", error);
    }
  };
  

  useEffect(() => {
    fetchDog(""); // Replace with the desired dog breed
  }, []);  

  return (
    <DogContext.Provider value={{ dog, fetchDog, setDog }}>
      {children}
    </DogContext.Provider>
  );
}

export default ContextProvider;
