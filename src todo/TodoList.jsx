import React from 'react';
import './TodoList.css'
const TodoList = (props)=>{
    
    
    
    return (
        <div className='element'>
            <button id='btn' onClick={()=>props.onselect(props.id)}>X</button>
            <li>{props.text}</li>

        </div>
    )
}

export default TodoList;