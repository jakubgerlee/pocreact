import React from 'react'

function Checkbox(props){
    return (
        <div className="todo-item">
            <input className="checkbox" type="checkbox" defaultChecked={props.item.completed}  />
        <p>{props.item.text}</p>
        </div>
    )
}

export default Checkbox