import axios from 'axios';

const getAllMeals = (setMeal) => {
    axios.get("https://meal-plan-nv-99ek.onrender.com")
    .then(({data}) => {console.log(data)
    setMeal(data);
    })
}

const addMeal = (title, setTitle, setMeal) => {
    axios.post("https://meal-plan-nv-99ek.onrender.com/saveMeals", { title })
    .then((data) => {
        console.log(data);
        setTitle("");
        getAllMeals(setMeal)

    })
}

const editMeal = (mealId, title, setMeal, setTitle, setEditing) => {
    axios.post("https://meal-plan-nv-99ek.onrender.com/editMeal", { _id: mealId, title })
    .then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllMeals(setMeal)

    })
}

const deleteMeals = (_id, setMeal) => {
    axios.post("https://meal-plan-nv-99ek.onrender.com/deleteMeals", { _id })
    .then((data) => {
        console.log(data)
        getAllMeals(setMeal)

    })
}

export { getAllMeals, addMeal, editMeal, deleteMeals };