import React from "react"
import { Transaction } from "./Transaction"
export const TransactionsHistory = ({transactions}) => {
  return (
    <div className="m-4 p-4">
      <h2>Historial de Transacciones</h2>

      {transactions.map( transacrtion => (
        <Transaction 
          key = {transacrtion.id}
          transacrtion = {transacrtion}
        />
      ))}

    </div>
  )
}
