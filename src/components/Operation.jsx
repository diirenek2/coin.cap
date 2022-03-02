import { dateFormat, currencyFormat } from '../helpers'
export const Operation = ({operation}) => {
  const {coin, price, amount, type, id, date} = operation
  return (
    <div className="text-slate-300 bg-slate-800 p-4 m-1 rounded flex">
      <img src={operation.coin.image} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
      <span className="text-md font-medium mx-3 w-10">
        {coin.name}
      </span>
      <span className="font-medium ml-3 w-1/3 text-slate-400">
        <p className='uppercase text-sm'>{type}</p>
        <p className='text-xs'>{dateFormat(date)}</p>
      </span>
      <span className="font-medium ml-3 w-full text-slate-400">
        <p className='text-md text-right w-full'>{currencyFormat(price*amount)}</p>
        <p className='text-xs text-right w-full'>{currencyFormat(price)}</p>
      </span>
    </div>
  )
}
