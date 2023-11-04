import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
// this is create for showing status of data is load or any error
//Object.freeze () this is use for no any one can alter this value
// now status became read only , no any one can alter this value
export const statuss = Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
})
const initialState = {
     data : [],
     status:statuss.IDLE, // here using idle status which come form above status
                         // we can reuse all status any wehre

}
// first create slice from redux tool kit
// createSlice() is a function which hold an object
//object hold api values
console.log(initialState)

export const productSlice = createSlice({
    name: 'product',
    initialState,
       reducers:{
        // setProduct(state,action){
        //     state.data = action.payload //action.payload se jo data ayaga wo data array main set ho jayga
        // },
        // setStatus(state,action){
        //     state.status = action.payload; // this update status of initialstate
        // }
    },
    // extraReducers in a function 
    // this contain builder which redux tool ki api
    extraReducers : (builder)=>{

           builder
 // data jab loading           
            .addCase(fetchProduct.pending,(state,action)=>{
                state.status = statuss.LOADING;
            })
// data jab mill jaye
            .addCase(fetchProduct.fulfilled,(state,action)=>{
                 state.data = action.payload;
                 state.status = statuss.IDLE;
            })

            .addCase(fetchProduct.rejected,(state,action)=>{
                state.status = statuss.ERROR;
            })
    }

})

export const{setProduct,setStatus} = productSlice.actions;
export default productSlice.reducer;


//thuks using for fetchig data
const Url = "https://fakestoreapi.com/products"
// export function fetchProduct(){
//      return async function fetchProductThunk (dispatch,getState){
//         dispatch(setStatus(statuss.LOADING)) // before data loading

//         // const getData = getState() //this is use for other works
//                 try{
//                     const response = await fetch(Url)
//                     console.log("this give response in string we have convert in json")
//                     const jsonData = await response.json();


//                     // use dispatch and pass setProduct action which is define above productSlice
//                     //and pass data which we created in initial states
//                     dispatch(setProduct(jsonData))
//                     dispatch(setStatus(statuss.IDLE)) // AFTER data load
//                 }catch(error){
//                     console.log(error)
//                     dispatch(setStatus(statuss.ERROR)) // if any error
//                 }

//      }
// }



// update version of thunk in tool kit
//createAsyncThunk has two parameter 1. identifire which is any think like:'fetch/product'
// second parameter is 2.: async()
export const fetchProduct = createAsyncThunk('fetch/product',async()=>{
                            const response = await fetch(Url)
    //                     console.log("this give response in string we have convert in json")
                        const jsonData = await response.json(); 

                        return jsonData; // done
})