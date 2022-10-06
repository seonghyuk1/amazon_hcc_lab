import { configureStore , createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: 
    [{id : 0, name : 'SAMSUNG Galaxy S21 FE 5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display Screen, Pro Grade Camera, All Day Intelligent Battery, US Version, Lavender Magnetic Base for PopSocket Phone Grips and iPhone MagSafe Cases, Black'
    ,img : "https://m.media-amazon.com/images/I/61UDrA6RtTL._AC_UL480_FMwebp_QL65_.jpg", count : 2, price : 120000},],
    reducers: {
        plusNum(state, i){
            let findedpro = state.find((user)=>{
                return user.id == i.payload
            })
            findedpro.count = Number(findedpro.count) + 1
        },
        addItem(state, action){
            let newshoe = {id : action.payload.id, name : action.payload.title, img : action.payload.img, count : action.payload.count, price : action.payload.price}
            let findedpro = state.find((user)=>{
                return user.id == action.payload.id
            })
            state.includes(findedpro)?
            findedpro.count += Number(action.payload.count):
            state.push(newshoe)
            
        },
        deleteItem(state, action){
            let findedpro = state.indexOf((user)=> user.id == action.payload.id)
            console.log(user.id)
            state.splice(action.payload,1)
        }
    }
    
})



export let { plusNum , addItem, deleteItem } = user.actions

export default user