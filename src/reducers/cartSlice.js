import {createSlice} from '@reduxjs/toolkit'

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items: []
    },
    reducers:{
        itemsAdded:(state,action)=>{
            const addedItem = state.items.find((x)=>x.id=== action.payload.id)
            if(addedItem){
                addedItem.quantity+=1
            }
            else{
            state.items.push({...action.payload,quantity: 1})
            }
        },
        itemDeleted:(state,action)=>{
            state.items=state.items.filter((x)=>x.id!==action.payload)
        },
        increaseQuantity:(state,action)=>{
            const addedItem = state.items.find((x)=>x.id=== action.payload.id)
            if(addedItem){
                addedItem.quantity+=1
            }
        },
        decreaseQuantity:(state,action)=>{
            const addedItem = state.items.find((x)=>x.id=== action.payload.id)
            if(addedItem.quantity>1){
                addedItem.quantity-=1
            }
            else{
                state.items=state.items.filter((x)=>x.id!==action.payload.id)
            }
        }
    }
})
export const{itemsAdded,itemDeleted,increaseQuantity,decreaseQuantity}=cartSlice.actions
export default cartSlice.reducer