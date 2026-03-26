import { useState } from "react";
import Search from "./components/Search";
import FoodDisplay from "./components/FoodDisplay";
import Navbar from "./components/Navbar";
import "./App.css";
import RecipeContainer from "./components/RecipeContainer";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";

export default function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId , setFoodId] = useState();
  return (
    <div>
      <Navbar />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodDisplay foodData={foodData} setFoodId={setFoodId}/>
        </InnerContainer>
        <InnerContainer>
          <RecipeContainer foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}
