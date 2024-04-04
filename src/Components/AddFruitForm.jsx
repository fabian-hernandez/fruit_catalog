function AddFruitForm({addFruitHandler}) {
  return(
    <>
      <form onSubmit={addFruitHandler}>
        <label>
          Fruit name:
          <input type="text" name="name" />
        </label>
        <label>
          Fruit icon:
          <input type="text" name="icon" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default AddFruitForm;