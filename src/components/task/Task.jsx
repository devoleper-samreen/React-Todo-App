import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { toast } from 'react-toastify';


function Task({ task, idx, todos, setTodos }) {

    const handleDelete = () => {
        const updatedTodos = todos.filter((_, index) => index !== idx);
        setTodos(updatedTodos);

        toast.info("Delete Task", {
            autoClose: 2000,
        })
    };

    const handleUpdate = () => {
        const updatedValue = prompt("enter updated value")
        console.log(updatedValue)

        if (updatedValue != null && updatedValue.trim() != "") {
            const editedTodos = todos.map((todo, index) => index === idx ? updatedValue : todo)

            setTodos(editedTodos);
            toast.success("Task edit successfully !", {
                autoClose: 2000,
            })
        }


    }


    return (
        <>
            <div className="flex items-center justify-between bg-[#2c2c2c] mb-6 h-14 rounded">
                <p className="ml-7 font-serif tracking-wider">{task}</p>
                <div className="p-1 text-center mb-0 mt-[6px]">

                    <button className='px-4 mr-3 mb-0 bg-red-700 rounded font-semibold h-8 text-white' onClick={handleUpdate}><FiEdit /></button>
                    <button className='px-4 bg-red-700 rounded font-semibold h-8 text-white mr-2 text-xl' onClick={handleDelete}><MdDelete /></button>

                </div>


            </div>


        </>

    )

}

export default Task;