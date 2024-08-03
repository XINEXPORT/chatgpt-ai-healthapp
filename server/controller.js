import generateId from "../utils/idGenerator.js";

let favorites = [
    { id: 1, title: "Nutrition Basics"},
    { id: 2, title: "Importance of Hydration"},
    { id: 3, title: "Daily Exercise Routine"},
    { id: 4, title: "Mental Health Awareness"},
    { id: 5, title: "Sleep Hygiene Tips"},
    { id: 6, title: "Stress Management Techniques"},
    { id: 7, title: "Eating lean meals to create calorie deficit"}
  ];
  

//GET ALL CAREBUDDY FAVORITES
const getFavorites = (req, res) => {
    res.status(200).json(favorites)
}

//ADD CAREBUDDY FAVORITES
const addFavorites = (req, res) => {
    console.log("hit")
    const {title} = req.body

    const newFavorite = {
        id: generateId(),
        title: title,
    }
    favorites.push(newFavorite)
    res.json(newFavorite)
}

export{getFavorites, addFavorites}
