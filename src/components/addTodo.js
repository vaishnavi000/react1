import { useEffect, useState } from "react"
import {v4 as uuidv4} from 'uuid'
import Todo from "./todo"
const AddTodo = ()=>{
    const getData = ()=>{
        const todoData = localStorage.getItem("todoList")
        if(todoData){
            return JSON.parse(localStorage.getItem("todoList"))
        }
        else{
            return []
        }
    }
    const deleteTodo = (id)=>{
         const deleteList = items.filter((each)=>each.id!==id) 
         setItems(deleteList)
        localStorage.setItem("todoList",JSON.stringify(items))
    }
    const [tittle,setTittle] = useState("")
    const [description,setDescription] = useState("")
    const [date,setDate] = useState("")
    const [priority,setPriority] = useState("Low")
    const[items,setItems] = useState(getData())
    const [error,setError] = useState('')
    useEffect(()=>{
        localStorage.setItem("todoList",JSON.stringify(items))
    },[items])
    const handleForm = (e)=>{
        e.preventDefault();
        if(!tittle || !description || !date || !priority){
            setError("All fields required")
            return;
        }
        const listItem = {
            id:uuidv4(),
            tittle,
            description,
            date,
            priority
        }
        console.log(items)
        setError("")
        setItems([...items,listItem])
        setTittle("")
        setDate("")
        setDescription("")
        setPriority("Low")

    }
    return(
        <div className="">
            <form className="flex flex-col gap-3  bg-gray-700 p-5 rounded-lg shadow-lg mx-6" onSubmit={handleForm}>
                <h1 className=" text-white text-center text-2xl">Add TO-DO</h1>
                <input type="text" placeholder="Tittle" className=" px-4 py-2 outline-none" value={tittle} onChange={(e)=>setTittle(e.target.value)}/>
                <input type="text" placeholder="Description" className=" px-4 py-2 outline-none" value={description} onChange={(e)=>setDescription(e.target.value)}/> 
                <input type="date" className=" px-4 py-2 outline-none  text-blue-500"  onChange={(e)=>setDate(e.target.value)} value={date}/> 
                <select className="px-2 py-1  text-blue-500" onChange={(e)=>setPriority(e.target.value)} value={priority}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <div>
                <button type="submit" className=" text-white text-left mt-2 bg-purple-700 rounded-lg px-4 py-3">Add</button>
                </div>
                <p className=" text-red-600 text-lg">{error}</p>
            </form>
            <div>
                {
                    items.map((each)=><Todo key={each.id} deleteTodo={deleteTodo} todo={each}/>)
                }
            </div>
        </div>
    )
}

export default AddTodo