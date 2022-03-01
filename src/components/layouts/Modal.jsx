import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { coins } from '../../data/coins'

import Input from './forms/Input'
import SelectImage from './forms/SelectImage'

export const Modal = ({open, setOpen, saveTransaction}) => {
  const [error, setError] = useState(false)
 
  const [amount, setAmount] = useState(0)
  const [price, setPrice] = useState(0)

  const [transactionType, setTransactionType] = useState({id: 0, name: "Seleccione Tipo Transaccion"})
  const [coin, setCoin] = useState({id: 0, name: "Seleccione Coin"})

  const cancelButtonRef = useRef(null)

  const handleSubmit = e =>{
    console.log("submit")
    e.preventDefault();

    //pendiente mejorar
    if([ amount, price].includes(0)){
      console.log("fallo la validacion")
      return
    }

    saveTransaction({amount: amount, price: price, type: transactionType.name, coin: coin.name})
  }


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <form 
              onSubmit={handleSubmit}
              className="inline-block align-bottom text-left overflow-show shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full"
            >
              <div className=" bg-slate-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-t">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <Dialog.Title as="h3" className="uppercase text-lg leading-6 font-medium text-slate-300">
                      Nueva Transaccion
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-MD text-slate-400">
                        En este emergente podras agregar los diferentes tipos de operaciones.
                      </p>
                      <div className='flex items-center justify-between mt-5 mb-3'>
                        <div className='w-1/2 pr-1'>
                        <SelectImage
                            options = {coins}
                            selected = {coin}
                            setSelected = {setCoin}
                          />
                        </div>
                        <div className='w-1/2 pl-1'>
                          <SelectImage
                            options = {[
                              {id: 1, name: 'Compra'},
                              {id: 2, name: 'Venta'},
                              {id: 3, name: 'Ingreso'},
                              {id: 4, name: 'Egreso'},
                            ]}

                            selected = {transactionType}
                            setSelected = {setTransactionType}
                          />
                        </div>
                      </div>
                      <div className='mt-5 mb-3 w-full'>
                        <Input
                          id = {'amount'}
                          type = {'number'}
                          label = {'Cantidad (*)'}
                          value = {amount}
                          onChange = {e => setAmount(Number(e.target.value))}
                        />
                      </div>
                      <div className='mt-5 mb-3 w-full'>
                        <Input
                          id = {'price'}
                          type = {'number'}
                          label = {'Precio (*)'}
                          value = {price}
                          onChange = {e => setPrice(Number(e.target.value))}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse rounded-b">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-600 text-base font-medium text-slate-300 hover:text-white hover:bg-yellow-500 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-slate-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Confirmar
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-slate-500 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-400 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-slate-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}