import { useState, useEffect, useRef } from 'react'
import './App.css'
import Task from './components/task/Task'
import { ToastContainer, toast } from 'react-toastify'

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos"))
  );
  const [inputValue, setInputValue] = useState("");
  const todoContainerRef = useRef(null);

  useEffect(() => {
    if (todoContainerRef.current) {
      todoContainerRef.current.scrollTop = todoContainerRef.current.scrollHeight;
    }
  }, [todos]);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])

  const addTask = (e) => {
    e.preventDefault();

    if (todos.includes(inputValue.trim())) {
      toast.warn('Task Already Exist!', {
        autoClose: 2000,
      })

      setInputValue("")

      return

    }
    if (inputValue.trim() != "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
      toast.success('Task Added !', {
        autoClose: 2000,
      })
    }
  }


  return (
    <>
      <h1 className='text-white text-center text-4xl font-semibold mt-9 mb-11'>TODO App</h1>
      <div className='max-w-[1100px] m-auto flex flex-col items-center justify-center'>

        <form onSubmit={addTask} className='w-[85vw] md:w-[50vw] flex items-center justify-between'>
          <input type="text" className='w-[75%] rounded pl-7 pr-5 font-semibold outline-none border-none h-9' placeholder='Enter task here...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button type="submit" className='w-[20%] bg-orange-600 rounded-sm font-semibold h-9 text-white text-lg'>Add</button>
          <ToastContainer theme="dark" />

        </form>
        <div ref={todoContainerRef} className="task-div text-white mt-12 w-[85vw] flex flex-col md:w-[50vw] max-h-[72vh] md:max-h-[360px] overflow-y-auto">

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
