import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addPost } from '../redux/postsSlice'

const Posts = () => {

    // display posts from posts reducer
    // write in input field and add new post to the post state array in the post reducer
    // Example: [ 'hello', 'lorem ipsuim']
    // Extra: display usernames from users reducer(<select>), push an object with username and post
    // Example: [{username: 'Grumpy, post: 'grrr'}, {username: 'Sleepy', post: 'Zzzzzz...}]
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const [inputValue, setInputValue] = React.useState({username: '', posts: ''})

  return (
    <div>Posts
    <h3>----------------------------</h3>
    {
      posts.map(e => <p>{e.username} says: {e.posts.join(' ')}</p>)
    }
    <label htmlFor='username'>Username: </label>
    <select 
      name='username' 
      id='username' 
      value={inputValue.username} 
      onChange={(event) =>setInputValue(
        { ...inputValue, 
        [event.target.name]: event.target.value })}>
      <option></option>
      {
        posts.map(e => <option value={e.username}>{e.username}</option>)
      }
    </select>

    <label htmlFor='posts'>Post: </label>
    <input
      type='text'
      name='posts'
      value={inputValue.posts}
      onChange={(event) => setInputValue({
        ...inputValue,
        [event.target.name]: event.target.value})}
     />
     <button onClick={() => dispatch(addPost(inputValue)) }>Submit Post</button>

    
    </div>

  )
}

export default Posts