import FoodItem from "./FoodItem";
import styles from './cssStyles/foodDisplay.module.css';

export default function FoodData({foodData , setFoodId}) {
    return (
    <>
        <div className={styles.mainDirectory}>
            {foodData.map((food)=> <FoodItem key={food.id} food={food} setFoodId={setFoodId}/>)}
        </div>
    </>
    );
}