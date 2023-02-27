import React, { useState } from "react";

function App() {
  const [todoText, settodoText] = useState("");
  const handleSubmit=(event)=>{event.preventDefault()
  if(todoText ===""){alert("Please type your todo!")
return}
console.log(todoText)
  }
  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            value={todoText}
            onChange={(event) => [settodoText(event.target.value)]}
            type="text"
            className="form-control"
            placeholder="Type your todo"
            aria-label="Type your todo"
          />
          <button className="btn btn-primary w-25" type="Submit">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
