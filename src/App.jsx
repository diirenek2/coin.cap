import { useState } from 'react'

import { Sidebar } from './components/layouts/Sidebar';
import { Navbar } from './components/layouts/Navbar'
import { Portfolio } from './components/Portfolio'
import { Modal } from './components/Modal'
import { TransactionsHistory } from './components/TransactionsHistory'


import { generateId } from './helpers'
import { PlusCircleIcon } from '@heroicons/react/outline'

const App = () => {
  const [openModal, setOpenModal] = useState(false)
  const [transactions, setTransactions] = useState([])

  const saveTransaction = transaction =>{
    transaction.id = generateId()
    setTransactions([...transactions, transaction])
    //setOpenModal(false) production
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Navbar />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            dd
          </div>
        </main>
      </div>
  </div>
  )
}

export default App