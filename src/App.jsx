import { useState } from 'react'
import Navbar from './components/Navbar'
import { Modal } from './components/Modal'

const App = () => {

  const [openModal, setOpenModal] = useState(false)
  const handleAddTransaction = () => {
    setOpenModal(true)
  }

  return (
    <>
      <Navbar />

      <button className="fixed bottom-4 right-4 bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
        type="button"
        onClick={handleAddTransaction}
      >
        <i className="fas fa-plus"></i>
      </button>

      <Modal 
        open={openModal}
        setOpen={setOpenModal}
      />
    </>
  )
}

export default App