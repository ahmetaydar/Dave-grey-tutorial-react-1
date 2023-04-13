import React from "react";

import ItemList from "./ItemList.jsx";

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
const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}> Your list is empty...</p>
      )}
    </>
  );
};
export default Content;
