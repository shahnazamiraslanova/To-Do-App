import React, { useContext, useRef, useState } from 'react'
import './ListItem.css'
import { TodoContext } from '../context/todoContex';
import toast from 'react-hot-toast';

const ListItem = ({ item }) => {
    const [value,setValue]=useState(item.todo)
    const {list,setList}=useContext(TodoContext)
    const [editSt, setEditSt] = useState(true);
    const [done, setDone] = useState(false);

    const inp = useRef()

    const handleEdit = () => {
        setEditSt(!editSt)
        inp.current.focus()
        if(!editSt){

            const newArr=list.map(element=>{
                if(element.id==item.id){
                    return {...element,todo:value}
                }
                else{
                    return element
                }
            })
            setList(newArr)

        }
    }

    console.log(list);
    const handleDone = () => {
        setDone(!done)

    }
    const handleDelete=()=>{
        const filteredArr =list.filter(todo=>todo.id!==item.id )
        setList(filteredArr)
        toast('Your ToDo deleted!')

    }

    return (
        <form>
            <input ref={inp} type="text" readOnly={editSt} placeholder='Add to new todo...' onChange={(e)=>setValue(e.target.value)} value={value} />
            <button style={{backgroundColor:`${done? "green": "black"}`}} type='button' onClick={handleDone}>{done ? "back" : "done"}</button>
            <button type='button' onClick={handleEdit}>{editSt ? "edit" : "ok"}</button>
            <button type='button' onClick={handleDelete}>delete</button>
        </form>
    )
}
export default ListItem