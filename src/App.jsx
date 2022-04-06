import { useState, useEffect } from 'react'

import { Sidebar } from './components/layouts/Sidebar';
import { Navbar } from './components/layouts/Navbar'
import { Portfolio } from './components/Portfolio'
import { Modal } from './components/Modal'
import { OperationsList } from './components/OperationsList'
import { Filters } from './components/Filters'

import { generateId, cryptoCompareMultipleSymbolsPriceAPI } from './helpers'
import { coinsJson } from './data/coins'

import { PlusCircleIcon } from '@heroicons/react/outline'

const App = () => {
  const [openModal, setOpenModal] = useState(false)
  const [operations, setOperations] = useState(
    JSON.parse(localStorage.getItem('operations')) ?? [
      {"amount":0.0015,"price":41300,"type":{"id":1,"name":"Compra"},"coin":{"id":2,"name":"BTC","image":"https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC.svg"},"id":"wy4i70f7t5l0ugea1h","date":1647488971349},
      {"amount":0.03,"price":2700,"type":{"id":1,"name":"Compra"},"coin":{"id":3,"name":"ETH","image":"https://s3-symbol-logo.tradingview.com/crypto/XTVCETH.svg"},"id":"py6kfx6kxzjl0uhdvaf","date":1647490631847},
      {"amount":0.0003,"price":44300,"type":{"id":2,"name":"Venta"},"coin":{"id":2,"name":"BTC","image":"https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC.svg"},"id":"02a9o022w1k2l0uhfevy","date":1647490703902}
    ]
  )
  const [operationEdit, setEditOperation] = useState({})
  const [filter , setFilter ] = useState ('')

  const [upodatedPrices, setUpodatedPrices] = useState([])

  const saveOperation = operation =>{
    if (operation.id){
      console.log("editando")
      //edita la operacion existente
      const updatedOperation = operations.map( operationState => operationState.id === operation.id ? operation : operationState)
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

    (function  cryptoCompareAPI() { 
      cryptoCompareMultipleSymbolsPriceAPI(coinsJson).then( val => {
        setUpodatedPrices( val )        
      })

      setTimeout(cryptoCompareAPI, 5000); 
    })();

  }, [])

  useEffect(()=>{
    localStorage.setItem('operations', JSON.stringify( operations ))
  },[operations])

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
            upodatedPrices = {upodatedPrices}
          />

          <Filters
            setFilter = {setFilter}
          />

          <OperationsList
            operations={operations}
            setEditOperation = {setEditOperation}
            deleteOperation = {deleteOperation}
            filter = {filter}
          />
        </main>
        {/*  Fiexed */}
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <button className="fixed text-white bottom-4 right-4 bg-amber-600 active:bg-amber-600 hover:bg-amber-500 font-bold uppercase text-sm px-2 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
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
          setEditOperation = {setEditOperation}
          upodatedPrices = {upodatedPrices}
          coinsJson  = {coinsJson }
        />
      </div>

  </div>
  )
}

export default App