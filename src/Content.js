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

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input type="checkbox" checked={item.checked} />
            <label>{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  );
};
export default Content;
