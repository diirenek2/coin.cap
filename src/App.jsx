import { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [modal, setModal] = useState(false)

  const handleModal = () => {
    setModal(true)
  }

  return (
    <>
      <Navbar />

      <button className="fixed bottom-4 right-4 bg-yellow-500 hover:bg-yellow-400 text-white active:bg-yellow-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
        type="button"
      >
        <i className="fas fa-plus"></i>
      </button>
    </>
  )
}

export default App