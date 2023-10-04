import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
    name: 'posts',
    initialState: [
        {username: 'Grumpy', posts: ['grrr', 'arrgg']}, 
        {username: 'Sleepy', posts: ['Zzzzzz...']},
        {username: 'Doc', posts: ['Say Ah....']}
    ],
    reducers: {
        addPost: (state, action) => {
            console.log('!@-------addPost-------@!')
            console.log(action.payload)
            state = state.map(element => 
                element.username === action.payload.username &&
                element.posts.push(action.payload.posts) 
            )
            
        }
    }
})

export const { addPost } = postsSlice.actions

export default postsSlice.reducer