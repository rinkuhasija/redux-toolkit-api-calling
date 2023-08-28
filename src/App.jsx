import { useState } from 'react'

import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchTodos} from "./redux/slice/todo.js"

function App() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

  console.log("State", state);

  if(state.todo.isLoading) {
    return  <h1> Loading... </h1>
  }

  return (
    <>
      <button onClick={(e) => dispatch(fetchTodos())}> Fetch Todos </button>
      {state.todo.data && state.todo.data.map((item) => {
        return <>  <li> {item.title}</li> <br/> </>
      })}
    </>
  )
}

export default App
