import { useState, useEffect } from 'react'
import './App.css'
import Task from './components/task/Task'

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      setTodos(JSON.parse(todos));
    }
  }, []);

  useEffect(() => {
    console.log("Todos Updated:", todos)
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const addTask = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue.trim()]);
      setInputValue("");
    }
  }


  return (
    <>
      <h1 className='text-white text-center text-4xl font-semibold mt-9 mb-11'>TODO App</h1>
      <div className='max-w-[1100px] m-auto flex flex-col items-center justify-center'>

        <div className='w-[85vw] md:w-[50vw] flex items-center justify-between'>
          <input type="text" className='w-[75%] rounded pl-7 pr-5 font-semibold outline-none border-none h-9' placeholder='Enter task here...' value={inputValue} onChange={handleInputChange} />
          <button className='w-[20%] bg-orange-600 rounded-sm font-semibold h-9 text-white text-lg' onClick={addTask}>Add</button>

        </div>
        <div className="text-white my-12 w-[85vw] flex flex-col md:w-[50vw]">

          {
            todos.map((todo, idx) => (
              <Task task={todo} key={idx} />
            ))
          }

        </div>

      </div>

    </>
  )
}

export default App
