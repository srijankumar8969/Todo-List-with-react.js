import React from 'react'
import { useTodo } from '../context/TodoContext'
import { useState } from 'react'

export function TodoForm() {
    const [todo,setTodo] = useState('')
    const {addTodo}= useTodo();

    function add(){
        if(!todo) return;
        else addTodo({todo,completed:false});
        setTodo('');
    }
    
  return (
    <div>
        <form onSubmit={add} className='flex '>
            <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5' placeholder='Write Todo...'></input>
            <button type="submit" className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'>Add</button>
        </form>
    </div>
  )
}

 