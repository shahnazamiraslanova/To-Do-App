import React, { useContext, useId, useRef } from 'react';
import './Form.css'
import { TodoContext } from '../context/todoContex';
import { nanoid } from 'nanoid';

const Form = () => {
    const inpVal = useRef()
    const { setList, list } = useContext(TodoContext);

    const AddToDo = (e) => {
        if (inpVal.current.value.trim() == '') {
            alert("Please add Todo")
        }
        else {
            e.preventDefault()
            setList([...list, { id: nanoid(), todo: inpVal.current.value }])
            inpVal.current.value = ''
        }
    }


   
    console.log(list);

    return (
        <div id='form'>
            <p>What's the Plan for today ?</p>
            <form onSubmit={AddToDo}>
                <input ref={inpVal} type="text" placeholder='Add to new todo...' />
                <button >add</button>
            </form>
        </div>
    )
}

export default Form