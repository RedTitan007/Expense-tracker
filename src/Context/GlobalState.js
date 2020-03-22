import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'

//Initial State
const initialState={
    transactions:[]
}
//Creating context
export const GlobalContext=createContext(initialState)

//Creating Provider Component

export const GlobalProvider=({children})=>{
const[state,dispatch]=useReducer(AppReducer,initialState)

function deleteTransaction(id){
dispatch({
    type:'DELETE_TRANSACTION',
    payload:id
})
}
function addTransaction(transactions){
dispatch({
    type:'ADD_TRANSACTION',
    payload:transactions
})
}
return(
    <GlobalContext.Provider value={{transactions:state.transactions,
        addTransaction,
        deleteTransaction
    }}>
    {children}
    </GlobalContext.Provider>)
}

//here Provider is provide with a value of intitial state and services