import generateId from "./idGenerator.js";

let favorites = [
    { id: 1, title: "Nutrition Basics"},
    { id: 2, title: "Importance of Hydration"}
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
