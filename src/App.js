import { useState } from "react";
import styles from "./App.module.css";
import { useEffect } from "react";

export const App = () => {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((loadedToDos) => setToDos(loadedToDos));
  }, []);
  return (
    <div className={styles.containerToDos}>
      <h1>toDos</h1>
      {toDos.map(({ id, title }) => (
        <div className={styles.todo} key={id}>
          {title}
        </div>
      ))}
    </div>
  );
};

export default App;
