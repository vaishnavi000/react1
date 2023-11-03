import { useState } from 'react';
import {AiTwotoneDelete} from 'react-icons/ai'

const Todo = (props)=>{
    const {todo,deleteTodo} = props
    const {id,tittle,description,priority,date} = todo;
    const [completed,setCompleted] = useState(false)
    const handleDelete = ()=>{
        deleteTodo(id)
    }
     const task = completed? "line-through" : ""
    return(
        <div className='p-4 border border-slate-300 my-3 mx-2 flex flex-col justify-between gap-5 items-start bg-gray-100 shadow-lg rounded-lg hover:bg-white'>
            <div className='flex items-center gap-3'>
                <div>
                    <input type="checkbox" onClick={()=>setCompleted(!completed)}/>
                </div>
                <h1 className={` text-3xl font-semibold ${task}`}>{tittle}</h1>
                <p>{date}</p>
            </div>
            <div className=' w-full'>
                <p className=' overflow-auto text-lg font-mono'>
                    {description}
                </p>
            </div>
            <div className='flex justify-between items-center w-full'>
                <p className=' text-base'>priority-<span className=' text-xl font-extralight'>{priority}</span></p>
                <div>
                   <button type='button' className=' text-blue-900' onClick={handleDelete}><AiTwotoneDelete size={27} /></button> 
                </div>
            </div>
        </div>
    )
}

export default Todo