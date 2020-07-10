import React, { useContext, useEffect} from 'react'
import { Context as JokeContext } from "./context/JokeContext";

export default function App() {
  const {state, getJoke} = useContext(JokeContext)
  useEffect(()=>{
    getJoke()
  },[])

  const { joke } = state

  return (
  <div>
    {joke ? (
      <>
      <p className="setup">{joke.setup}</p>
      <p className="delivery">{joke.delivery}</p>
    </>
    ): null}
    
  </div>);
}

