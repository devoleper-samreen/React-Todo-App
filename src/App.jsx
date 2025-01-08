import { useState, useEffect } from 'react'
import './App.css'
import Task from './components/task/Task'

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");


  useEffect(() => {
    console.log("loading data from localstorage...")
    const savedTodos = JSON.parse(localStorage.getItem("todos"));

    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    console.log("saving data to localstorage...")

    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const addTask = (e) => {
    e.preventDefault();
    if (inputValue.trim() != "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  }


  return (
    <>
      <h1 className='text-white text-center text-4xl font-semibold mt-9 mb-11'>TODO App</h1>
      <div className='max-w-[1100px] m-auto flex flex-col items-center justify-center'>

        <form onSubmit={addTask} className='w-[85vw] md:w-[50vw] flex items-center justify-between'>
          <input type="text" className='w-[75%] rounded pl-7 pr-5 font-semibold outline-none border-none h-9' placeholder='Enter task here...' value={inputValue} onChange={handleInputChange} />
          <button type="submit" className='w-[20%] bg-orange-600 rounded-sm font-semibold h-9 text-white text-lg'>Add</button>

        </form>
        <div className="text-white my-12 w-[85vw] flex flex-col md:w-[50vw]">

          {
            todos.map((todo, idx) => (
              <Task task={todo} key={idx} idx={idx} setTodos={setTodos} todos={todos} />

            ))
          }

        </div>

      </div>

    </>
  )
}

export default App
