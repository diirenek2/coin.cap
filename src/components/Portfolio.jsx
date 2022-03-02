import { useEffect, useState } from "react"
import { currencyFormat } from '../helpers'


export const Portfolio = ({operations}) => {
  const [total, setTotal ] = useState(0)

  useEffect(() => {
    const totalValue = operations.reduce( (total, operation) => operation.price * operation.amount + total, 0 )
    setTotal(totalValue)
  }, [operations])

  return (
    <div className="m-4 p-4">
      <div className='text-slate-300 bg-slate-800 p-4 m-1 rounded flex'>Total: {currencyFormat(total)}</div>
    </div>
  )
}
