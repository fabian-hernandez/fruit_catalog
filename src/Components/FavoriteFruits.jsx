const FavoriteFruits = ({id, favoriteFruit, removeFavFruitHandler}) => {
  return (
    <>
      <span>{favoriteFruit.icon} {favoriteFruit.name} </span>
      <button onClick={() => removeFavFruitHandler(favoriteFruit)}> Delete </button>
    </>
  )
}

export default FavoriteFruits