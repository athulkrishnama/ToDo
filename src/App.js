import { useState } from "react";
import "./App.css";
import undo from './undo.svg'
function App() {
  const [toDos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="input">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
        />
        <h2
          onClick={() => {
            setTodos([
              ...toDos,
              { id: Date.now(), text: todo, status: false, deleted: false },
            ]);
            console.log(toDos);
          }}
        >
          Add
        </h2>
      </div>
      <div className="tasks">
        <div>
          <h2>Completed Tasks</h2>
          {toDos.map((obj) => {
            if (obj.status) {
              return (
                <div className="completed">
                  <input
                    onClick={(e) => {
                      setTodos(
                        toDos.filter((object) => {
                          if (obj.id === object.id) {
                            object.status = e.target.checked;
                          }
                          return true;
                        })
                      );
                    }}
                    type="checkbox"
                    checked={obj.status}
                  />
                  <h4>{obj.text}</h4>
                </div>
              );
            }
            return null;
          })}
        </div>

        <div>
          <h2>Prograssing Tasks</h2>
          {toDos.map((obj) => {
            if (!(obj.status || obj.deleted)) {
              return (
                <div className="todo">
                  <input
                    onClick={(e) => {
                      setTodos(
                        toDos.filter((object) => {
                          if (obj.id === object.id) {
                            object.status = e.target.checked;
                          }
                          return true;
                        })
                      );
                    }}
                    type="checkbox"
                    value={obj.status}
                  />
                  <h4>{obj.text}</h4>
                  <h3
                    onClick={() => {
                      setTodos(
                        toDos.filter((object) => {
                          if (obj.id === object.id) {
                            object.deleted = true;
                          }
                          return true;
                        })
                      );
                    }}
                  >
                    X
                  </h3>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div>
          <h2>Deleted Tasks</h2>
          {toDos.map((obj) => {
            if (obj.deleted) {
              return (
                <div className="deleted">
                  <h3>{obj.text}</h3>
                  <img src={undo}
                    onClick={() => {
                      setTodos(
                        toDos.filter((object) => {
                          if (obj.id === object.id) {
                            object.deleted = false;
                          }
                          return true;
                        })
                      );
                    }}
                  />
                    
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
