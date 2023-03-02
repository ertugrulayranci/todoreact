import React, { useState } from "react";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos,setTodos]=useState([])
  const handleSubmit = (event) => {
    event.preventDefault();
    /*validation*/
    if (todoText === "") {
      alert("Please type your todo!");
      return;
    }
    const newTodo={
      id:new Date().getTime(),
      title: todoText,
      date: new Date(),
      hasDone: false
    }
    setTodos([...todos,newTodo])
    setTodoText("")
  };
  const deleteTodo=(id)=>{
    const filteredTodos=todos.filter
    ((i) => i.id !== id);
    setTodos(filteredTodos);
    }

    const changeHasDone =(todo)=>{
      console.log(todo)
      let tempTodos=[]
      todos.map((item,index)=>{
        if(item.id === todo.id) {
          let updatedTodo={
            ...todo,
            hasDone: !todo.hasDone
          }
          tempTodos.push(updatedTodo)
        }else{
          tempTodos.push(item)
        }
      })
      /* for(let i=0; i<todos.length; i++){
        if(todos[i].id==todo.id){
          let updatedTodo={
            ...todo,
            hasDone: !todo.hasDone
          }
          tempTodos.push(updatedTodo)
        }else{
          tempTodos.push(todos[i])
        }
      } */
      setTodos(tempTodos)
    }  
  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            value={todoText}
            onChange={(event) => {
              setTodoText(event.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Type your todo"
          />
          <button className="btn btn btn-primary w-25" type="submit">
            ADD
          </button>
        </div>
      </form>
      <form>
        <div className="input-group mb-3">
          <input className="form-control" type="text" />
          <button className="btn btn btn-info w-25" type="submit">
            Edit
          </button>
          <button className="btn btn btn-danger w-25" type="button">
            Cancel
          </button>
        </div>
      </form>
      <div className="container">
        {todos.length === 0 ? (
          <p className="text-center"> You don't have any todos yet.</p>
        ) : (
          <>
            {todos.map((item, index) => (
              <div
                key={index}
                style={{ borderBottom: "1px solid gray" }}
                className="d-flex justify-content-between align-items-center"
              >
                <div>
                  <h1
                    style={{
                      textDecoration:
                        item.hasDone === true ? "line-through" : "none",
                    }}
                  >
                    {item.title}{" "}
                  </h1>
                  <small>{new Date(item.date).toLocaleDateString()}</small>
                </div>
                <div>
                  <button
                    onClick={() => {
                      deleteTodo(item.id);
                    }}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>

                  <button className="btn btn-sm btn-secondary">Edit</button>
                  <button
                    onClick={() => changeHasDone(item)}
                    className="btn btn-sm btn-success"
                  >
                    {item.hasDone === false ? "Done" : "Undone"}
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
export default App;
