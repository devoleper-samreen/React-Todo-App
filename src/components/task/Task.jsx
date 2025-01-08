function Task({ task, idx, todos, setTodos }) {

    const handleDelete = () => {
        const updatedTodos = todos.filter((_, index) => index !== idx);
        setTodos(updatedTodos);
    };

    const handleUpdate = () => {
        const updatedValue = prompt("enter updated value")
        console.log(updatedValue)

        if (updatedValue != null && updatedValue.trim() != "") {
            const editedTodos = todos.map((todo, index) => index === idx ? updatedValue : todo)

            setTodos(editedTodos);
        }


    }


    return (
        <>
            <div className="flex items-center justify-between bg-[#2c2c2c] mb-6 h-12 rounded">
                <p className="ml-7">{task}</p>
                <div className="p-1">
                    <button className='px-5 mr-3 bg-red-700 rounded font-semibold h-9 text-white' onClick={handleUpdate}>U</button>
                    <button className='px-5 bg-red-700 rounded font-semibold h-9 text-white' onClick={handleDelete}>D</button>

                </div>


            </div>


        </>

    )

}

export default Task;