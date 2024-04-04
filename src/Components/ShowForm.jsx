import AddFruitForm from "./AddFruitForm";

function ShowForm() {
  const addFruitHandler = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
  }

  return (  
    <div>
      <section>
        Add Form ONLY VIEWING NOT ADDING ELEMENTS

        <AddFruitForm addFruitHandler={addFruitHandler}/>
      </section>
    </div>
  )
}

export default ShowForm;