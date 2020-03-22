import React, { useContext } from 'react'
import '../App.css'
import {GlobalContext} from '../Context/GlobalState'

export const IncomeExpenses = () => {
    const {transactions}=useContext(GlobalContext)

    const amounts=transactions.map(transaction=>transaction.amount)
    const Income=amounts.filter(item=>item>0).reduce((acc,item)=>acc+=item,0).toFixed(2)
    const Expenses = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0)*-1).toFixed(2)
    return (
        <div class="inc-exp-container">
            <div>
           <h4>Income</h4>
           <p className="money plus">{Income}</p>
            </div>
            <div>
              <h4>Expenses</h4>
    <p className="money minus">{Expenses}</p>
            </div>   
        </div>
    )
}
