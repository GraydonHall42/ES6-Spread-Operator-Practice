import React from "react";

function App() {
  const [item, setItem] = React.useState("");
  const [list, setList] = React.useState([]);

  function createNewItem() {
    const newItem = event.target.value;
    setItem(newItem);
  }

  function addItemToList() {
    setList((prevList) => {
      return [...prevList, item];
    });
    setItem("");
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
