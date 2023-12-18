import React, { useContext } from 'react'
import ListItem from './ListItem'
import { TodoContext } from '../context/todoContex'
import { nanoid } from 'nanoid'


const List = () => {
    const {list}=useContext(TodoContext)
  return (
    <div>
        {
            list.map(item=>
                <ListItem key={nanoid()} item={item}/>
                )
        }
    </div>
  )
}

export default List
