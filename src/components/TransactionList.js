import React, { useContext } from 'react'
import {GlobalContext} from './context/GlobalState'
import Transaction from './Transaction';

const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);
  // console.log(context);
  return (
    <>
        <h3>History</h3>
        <ul id="list" className="list">
         {transactions.map((transaction)=>{
           return (<Transaction key={transaction.id} id={transaction.id} text={transaction.text} amount={transaction.amount}/>)

         })}
         
        </ul>
    </>
  )
}

export default TransactionList