import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',  //needs to be unique, should be the same as the function name, w/o Slice
    initialState: {
        value: 0
    },
    // reducers to set the state
    reducers: {
        increment: (state) => {
            state.value = state.value + 1
        }
    }
})

// Action creators are generated for each reducer function (from above), basically sets up dispatch
export const { increment } = counterSlice.actions

// essentially does this behind the scenes
// const reducerName = param => dispatch({
//     type: slice_name/reducer_name,
//     payload: param
// })

export default counterSlice.reducer
