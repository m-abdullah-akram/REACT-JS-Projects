import { useEffect, useState } from "react";
import styles from "./cssStyles/search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "YOUR SPOONACULAR API KEY HERE";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  
  async function handleClick() {
  if (!query.trim()) return;

  try {
    const res = await fetch(
      `${URL}?query=${encodeURIComponent(query)}&apiKey=${apiKey}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    console.log("Here is the response:", data.results, "and query:", query);

    setFoodData(data.results || []);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

  // useEffect(() => {
  //   async function fetchFood() {
  //     // const res = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`);
  //     //     const data = await res.json();
  //     //     console.log("Here is the response : ",data.results,"and query : " , query);
  //     //     setFoodData(data.results);
  //   }
  //   fetchFood();
  // }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search recipes here ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}
