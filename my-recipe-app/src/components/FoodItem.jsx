import styles from "./cssStyles/fooditem.module.css";



export default function FoodItem({food , setFoodId}) {
    return (
        <div className={styles.foodCard}>
            <h4>{food.title}</h4>
            <img src={food.image} alt={food.title} />
            <button onClick={()=>{setFoodId(food.id)}}>View Recipe</button>
        </div>
    );
}