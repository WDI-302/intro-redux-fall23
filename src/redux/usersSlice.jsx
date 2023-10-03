import { createSlice } from "@reduxjs/toolkit"

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        usersArray: [
            {
                name: 'Grumpy',
                age: 60
            },
            {
                name: 'Sleepy',
                age: 50
            },
            {
                name: 'Happy',
                age: 40                
            },
            {
                name: "Dopey",
                age: 10
            }
        ],
        totalAges: 0
    },
    reducers: {
        addUser: (state,action) => {
            // console.log('!@-------addUser-------@!')
            // console.log(action.payload)
            
            // let newArr = state.usersArray
            // newArr.push(state.payload)
            // return {
                //     ...state,
                //     usersArray: newArr
                // }
                
            state.usersArray.push(action.payload)
        }

    }
})

export const { addUser } = usersSlice.actions

export default usersSlice.reducer