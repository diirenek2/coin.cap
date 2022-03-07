import { useState, useEffect } from 'react'

import { Sidebar } from './components/layouts/Sidebar';
import { Navbar } from './components/layouts/Navbar'
import { Portfolio } from './components/Portfolio'
import { Modal } from './components/layouts/Modal'
import { OperationsList } from './components/OperationsList'

import { generateId } from './helpers'
import { PlusCircleIcon } from '@heroicons/react/outline'

const App = () => {
  const [openModal, setOpenModal] = useState(false)
  const [operations, setOperations] = useState([])
  const [operationEdit, setEditOperation] = useState({})

  const [total, setTotal] = useState(0)

  const saveOperation = operation =>{
    if (operation.id){
      console.log("editando")
      //edita la operacion existente
      const updatedOperation = operations.map( operationState => operationState.id === operation.id ? operation: operationState)
      setOperations(updatedOperation)
    }else{
      //guarda nueva operacion
      operation.id = generateId()
      operation.date = Date.now()
      setOperations([...operations, operation])
    }
  }
  const deleteOperation = id =>{
    const updatedOperations = operations.filter(operation => operation.id !== id)

    setOperations(updatedOperations)
  }

  useEffect(()=>{
    openModal == false, setEditOperation({})
  },[openModal])

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Navbar />
        <main>
          <Portfolio
            operations = {operations}
          />

          <OperationsList
            operations={operations}
            setEditOperation = {setEditOperation}
            deleteOperation = {deleteOperation}
          />
        </main>
        {/*  Fiexed */}
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <button className="fixed text-white bottom-4 right-4 bg-yellow-500 active:bg-yellow-500 hover:bg-yellow-400 font-bold uppercase text-sm px-2 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
            type="button"
            onClick={() => setOpenModal(true)}
          >
            <PlusCircleIcon className="h-9 w-9" aria-hidden="true" />
          </button>
        </div>
        <Modal
          open={openModal}
          setOpen={setOpenModal}
          saveOperation = {saveOperation}
          operationEdit = {operationEdit}
        />
      </div>

  </div>
  )
}

export default App