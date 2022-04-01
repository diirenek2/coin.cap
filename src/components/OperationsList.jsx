import { useState, useEffect } from "react"
import { Operation } from "./Operation"
import { ArrowNarrowLeftIcon } from '@heroicons/react/solid'
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'

export const OperationsList = ({operations, setEditOperation, deleteOperation, filter}) => {

  const [filteredOperations, setFilteredOperations ] = useState([])
  //let filteredOperations = []

  useEffect(()=>{
    if(filter != 'Todos'){
      // con filtros
      setFilteredOperations(operations.filter (operation => operation.coin.name === filter).sort(function(a,b){return b.date - a.date;}))
    }else{
      // sin filtros
      setFilteredOperations(operations.sort(function(a,b){return b.date - a.date;}))
    }
  },[filter, operations])

  return (
    <div className="m-4 p-4">
      <h2 className="uppercase text-lg text-amber-500 flex ">
        <span className="w-1/2">
          <span className="float-left flex">
            <ArrowNarrowLeftIcon className="w-6" />
            <span className="lowercase">Desliza para Eliminar</span>
          </span>
        </span>
        <span className="w-1/2">
          <span className="float-right flex">
            <span className="lowercase">Desliza para Editar</span>
            <ArrowNarrowRightIcon className="w-6" />
          </span>
        </span>
      </h2>
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
