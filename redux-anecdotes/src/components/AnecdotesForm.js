import React from 'react'
import { connect } from 'react-redux'
import { newPost } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'



const AnecdotesFrom = (props) => {
    

    const addPost = async (event) => {
        event.preventDefault()
        const text = event.target.text.value
        props.newPost(text)
        props.setNotification(`${text} was added to the list`, 1500)
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addPost}>
                <div><input name='text' /></div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default connect(
    null,
    { newPost, setNotification }
)(AnecdotesFrom)