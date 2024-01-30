import './index.css';
import { MyMeals } from './MyMeals';
import { useEffect, useState } from 'react';
import { getAllMeals, addMeal, editMeal, deleteMeals } from './FetchMeals';

function App() {

  const [myMeal, setMeal] = useState([]);
  const [title, setTitle] = useState("");     //чтобы блюда приходили к нам из input а не из базы данных
  const [editing, setEditing] = useState(false);
  const [mealId, setMealId] = useState("")

  useEffect(() => {
    getAllMeals(setMeal)
  }, [])

  const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setMealId(_id)
  }

  return (
    <div>
      <h1>Meal Plan</h1>

      <input 
      type='text'
      placeholder='Add a meal'
      value = {title}
      onChange= {(e) => setTitle(e.target.value)}
      ></input>
      
      <button 
        disabled={!title}
        onClick=
        {editing ? () => editMeal(mealId, title, setMeal, setTitle, setEditing) : () => addMeal(title, setTitle, setMeal)}>
        {editing ? "Edit" : "Add"}
        </button> 
      
      {myMeal.map((meal) => <MyMeals text={meal.title} key={meal._id}
      updatingInInput = {() => updatingInInput(meal._id, meal.title)}
      deleteMeals={() => deleteMeals(meal._id, setMeal)}
      />
      )}
      
    </div>
  );
}

export default App;
