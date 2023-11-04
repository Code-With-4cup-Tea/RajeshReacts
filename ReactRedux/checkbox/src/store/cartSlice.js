import {createSlice} from '@reduxjs/toolkit'



const initialState = []
// first create slice from redux tool kit
// createSlice() is a function which hold an object
console.log(initialState)

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload) //state update with whcih value pass this goes to initialState update
        },
        del(state,action){
            return state.filter(item=>item.id !== action.payload) // state ko filter karo jis item ki id
                                                                   //action ki id ke equal nahi wo dedo or baki
                                                                   //delete kardo
        }
    }

})

export const{add,del} = cartSlice.actions;
export default cartSlice.reducer;