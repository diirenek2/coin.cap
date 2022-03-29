import { useState, useEffect } from "react"
import { Operation } from "./Operation"
export const OperationsList = ({operations, setEditOperation, deleteOperation, filter}) => {

  const [filteredOperations, setFilteredOperations ] = useState([])
  //let filteredOperations = []

  useEffect(()=>{
    if(filter != 'Todos'){
      // con filtros
      setFilteredOperations(operations.filter (operation => operation.coin.name === filter))
    }else{
      // sin filtros
      setFilteredOperations(operations)
    }
  },[filter])

  return (
    <div className="m-4 p-4">
      <h2 className="block uppercase text-lg text-slate-400">Historial de Operaciones</h2>

      {filteredOperations.map( operation => (
        <Operation
          key = {operation.id}
          operation = {operation}
          setEditOperation = {setEditOperation}
          deleteOperation = {deleteOperation}
        />
      ))}
    </div>
  )
}
