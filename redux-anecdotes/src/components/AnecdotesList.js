import React from 'react'
import { connect } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = (props) => {

  return (
    <div>
      <div>
        {props.content}
      </div>
      <div>
        has {props.votes}
        <button onClick={props.handle}>vote</button>
      </div>
    </div>
  )
}

const AnecdotesList = (props) => {

  const votingFunction = (id, content, list) => {
    let anecdoteToVote = list.find(obj => obj.id === id)
    const updated = {
      ...anecdoteToVote,
      votes: anecdoteToVote.votes + 1
    }
    const text = content
    props.voteFor(updated)
    props.setNotification(`Voted for ${text}`, 5000)
  }

  return (
    <div>
      {props.anecdotes.map(anec => <Anecdote
        key={anec.id}
        id={anec.id}
        content={anec.content}
        votes={anec.votes}
        handle={() => votingFunction(anec.id, anec.content, props.anecdotes)
        } />)}
    </div>
  )

}

const mapStateToProps = (state) => {
  if (state.filter === '') {
    return {
      anecdotes: state.anecdotes
    }
  }
  return {
    anecdotes: state.anecdotes.filter(obj => obj.content.toLowerCase().includes(state.filter))
  }
}

const mapDispatchToProps = {
  setNotification,
  voteFor
}

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdotesList)

export default ConnectedAnecdotes