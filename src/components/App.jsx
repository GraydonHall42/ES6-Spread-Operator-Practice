import React from "react";

function App() {
  //create our state variables
  const [item, setItem] = React.useState(""); //state variable for list item
  const [list, setList] = React.useState([]); //variable for toDo list

  //change item state variable
  function createNewItem() {
    const newItem = event.target.value;
    setItem(newItem);
  }

  //Add item to our toDoList
  function addItemToList() {
    setList((prevList) => {
      return [...prevList, item];
    });
    setItem(""); //reset item
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={createNewItem} type="text" value={item} />
        <button onClick={addItemToList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((listItem) => (
            <li>{listItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
