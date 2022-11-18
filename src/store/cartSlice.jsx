import { configureStore , createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: 
    [],
    reducers: {
        addItem(state, action){
            let newshoe = {id : action.payload.id, title : action.payload.title, img : action.payload.img, count : action.payload.count, price : action.payload.price, grade : action.payload.grade}
            state.push(newshoe) 
        },
        deleteItem(state, action){
            let findedpro = state.indexOf((user)=> user.id == action.payload.id)
            state.splice(action.payload,1)
        }
    }
    
})



export let { plusNum , addItem, deleteItem } = user.actions

export default user