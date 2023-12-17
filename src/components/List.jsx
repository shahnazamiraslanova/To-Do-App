import React, { useContext } from 'react'
import ListItem from './ListItem'
import { TodoContext } from '../context/todoContex'

const List = () => {
    const {list}=useContext(TodoContext)
  return (
    <div>
        {
            list.map(item=>
                <ListItem item={item}/>
                )
        }
    </div>
  )
}

export default List