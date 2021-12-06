import React, {useContext} from 'react';
import TodosContext from '../context';

export default function TodoList(){
    const { state, dispatch } = useContext(TodosContext)
    const title = state.todos.length > 0 
    ?  `${state.todos.length} Todos` : "Nothing To Do!"

    return(
        <div className="container mx-auto max-w-md text-center font-mono">
           <h1 className="text-bold">{title}</h1>
            <ul className="list-reset text-white p-0">
                {state.todos.map(todo=>(
                    <li key={todo.id}
                    className="flex items-center bg-orange-dark border-black border-dashed border-2 my-2 py-4">
                        <span 
                            onDoubleClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo})}
                        className={`flex-1 ml-12 cursor-pointer ${todo.complete && "line-through text-grey-darkest"}`} style={{ "color":'black'}}
                        >{todo.text}</span>
                        <button
                        onClick={() => dispatch({type: "SET_CURRENT_TODO", payload: todo })}
                        >
                            <img src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png"
                            alt="Edit Icon" className="h-6"/>
                        </button>
                        <button
                            onClick={() => dispatch({ type:"REMOVE_TODO", payload: todo})}
                        >
                            <img src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png"
                            alt="Delete Icon" className="h-6"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}