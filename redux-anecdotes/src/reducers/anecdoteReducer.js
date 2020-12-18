import anecdotesServices from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch (action.type){
    case 'VOTE':
      const toVote = state.find( obj => obj.id === action.data.id)
      const votedAnecdote = {
        ...toVote, votes: toVote.votes + 1
      }
      return state.map( anecdotes => anecdotes.id !== action.data.id ? anecdotes : votedAnecdote).sort((a1, a2) => a2.votes - a1.votes)
    case 'NEW':
      const newAnectode = action.data
      return [ ...state, newAnectode].sort((a1, a2) => a2.votes - a1.votes)
    case 'INIT':
      return action.data
    default:
      return state
  }
    
}

export const voteFor = anecdote => {
  return async dispatch => {
    const updatedAnecdote = await anecdotesServices.likeAnecdote(anecdote)
    const id = updatedAnecdote.id
    console.log(id)
    dispatch({
      type: 'VOTE',
      data: {id}
    })
  }
}

export const newPost = data => {
  return async dispatch => {
    const newAnecdote = await anecdotesServices.postAnecdote(data)
    dispatch({
      type: 'NEW',
      data: newAnecdote
    })
  }
}

export const init = () => {
  return async dispatch => {
    const anecdotes = await anecdotesServices.getAll()
    console.log(anecdotes)
    dispatch({
      type: 'INIT',
      data: anecdotes
    })
  }
}

export default anecdoteReducer