import './App.css'
import Task from './components/task/Task'

function App() {


  return (
    <>
      <h1 className='text-white text-center text-4xl font-semibold mt-9 mb-11'>TODO App</h1>
      <div className='max-w-[1100px] m-auto flex flex-col items-center justify-center'>

        <div className='w-[85vw] md:w-[50vw] flex items-center justify-between'>
          <input type="text" className='w-[75%] rounded pl-7 pr-5 font-semibold outline-none border-none h-9' placeholder='Enter task here...' />
          <button className='w-[20%] bg-orange-600 rounded-sm font-semibold h-9 text-white text-lg'>Add</button>

        </div>
        <div className="text-white my-12 w-[85vw] flex flex-col md:w-[50vw]">
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />

        </div>




      </div>

    </>
  )
}

export default App
