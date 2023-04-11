import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

/*
const Content = () => {
  const [name, setName] = useState("Semiha");
  const [count, setCount] = useState(0);
  const handleNameChange = () => {
    const names = ["Burcu", "Anil", "Ahmet", "Asli"];
    const int = Math.floor(Math.random() * 4);

    setName(names[int]);
  };
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);

    console.log(count);
  };

  const handleClick2 = () => {
    console.log(count);
  };

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };
  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>

      <button onClick={handleClick}>You pressed me {count} times</button>
      <button onClick={handleClick2}>this is : {count}</button>
    </main>
  );
};
*/
const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                onClick={() => {
                  handleDelete(item.id);
                }}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}> Your list is empty...</p>
      )}
    </main>
  );
};
export default Content;
