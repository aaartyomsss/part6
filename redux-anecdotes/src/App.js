import React, { useEffect } from 'react'
import AnecdotesFrom from './components/AnecdotesForm'
import AnecdotesList from './components/AnecdotesList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { useDispatch } from 'react-redux'
import { init } from './reducers/anecdoteReducer'



const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(init())
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification/>
      <Filter/>
      <AnecdotesList/>
      <AnecdotesFrom/>
    </div>
  )
}

export default App