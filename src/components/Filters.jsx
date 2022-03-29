import { useState, useEffect } from 'react'
import { coinsJson } from '../data/coins'

import SelectImage from './layouts/forms/SelectImage'


export const Filters = ({setFilter}) => {
  const [coins, setCoins ] = useState([])
  const [coinFilter, setCoinFilter] = useState({id: 1, name: 'Todos'})

  useEffect(()=>{
    //lista ordenada por id
    setCoins([...coinsJson, {id: 1, name: 'Todos'}].sort((a, b)=>{
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    }))
  },[])

  useEffect(()=>{
    setFilter(coinFilter.name)
  }, [coinFilter])

  return (
    <div className='m-4 p-4'>
      <div className=' bg-slate-800'>
        <div className='flex items-center justify-between mt-5 mb-3'>
          <span className='w-1/3 px-3 text-slate-200'>
            Filtros:
          </span>
          <div className='w-1/3 pr-1'>
            <SelectImage
              options = {coins}
              selected = {coinFilter}
              setSelected = {setCoinFilter}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
