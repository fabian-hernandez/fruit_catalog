import { useState } from "react"
import FavoriteFruits from "./FavoriteFruits";
import AddFruitForm from "./AddFruitForm";

function Overview() {
  const [favoriteFruits, setFavoriteFruits] = useState([
    {"name": "Apple", "icon": "🍎"},
    {"name": "Orange", "icon": "🍊"},
    {"name":"Banana", "icon": "🍌"},
    {"name": "Grapes", "icon": "🍇"}
  ]);

  const removeFavFruitHandler = (favFruit) => {
    console.log(`ENTER HANDLER ${favFruit}`);

    let favoriteFruitsCopy = [...favoriteFruits]
    console.log('Old values', favoriteFruitsCopy)

    let index = favoriteFruitsCopy.indexOf(favFruit);
    console.log(`index   --->>>   ${index}`);

    favoriteFruitsCopy.splice(index,1);
    console.log('New values', favoriteFruitsCopy)

    setFavoriteFruits(favoriteFruitsCopy);
  }

  const addFruitHandler = (event) => {
    event.preventDefault();
    const newFruit = {
      "name": event.target[0].value,
      "icon": event.target[1].value,
    }
      setFavoriteFruits(favoriteFruits => [...favoriteFruits, newFruit]);
  }

  return (
    
    <div>
      <section>
        Favorite Fruits

        {favoriteFruits.map(favoriteFruit => {
          return (
            <FavoriteFruits key={favoriteFruit.name} id={favoriteFruit.name} favoriteFruit={favoriteFruit} removeFavFruitHandler={removeFavFruitHandler}/>
          )
        })}
      </section>

      <section>
        Add Form

        <AddFruitForm addFruitHandler={addFruitHandler}/>
      </section>
    </div>
  )
}

export default Overview;