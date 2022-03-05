import { dateFormat, currencyFormat } from '../helpers'

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css'

export const Operation = ({operation, setOperationEdit, deleteOperation}) => {
  const {coin, price, amount, type, id, date} = operation

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setOperationEdit(operation)}>
      <div className="flex items-center rounded">
        <div className="text-center text-yellow-500 w-full uppercase font-bold"> 
          editar
        </div>
      </div>
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => deleteOperation(id)}
      >
        <div className="flex items-center rounded">
          <div className="text-center text-red-500 w-full uppercase font-bold"> 
            eliminar
          </div>
        </div>
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="text-slate-300 bg-slate-800 p-4 m-1 rounded flex w-full">
          
          <img src={operation.coin.image} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
          <span className="text-md font-medium mx-3 w-10">
            {coin.name}
          </span>
          
          <span className="font-medium ml-3 w-1/3 text-slate-400">
            <p className='uppercase text-sm'>{type.name}</p>
            <p className='text-xs'>{dateFormat(date)}</p>
          </span>
          <span className="font-medium ml-3 w-full text-slate-400">
            <p className='text-md text-right w-full'>{currencyFormat(price*amount)}</p>
            <p className='text-xs text-right w-full'>{currencyFormat(price)}</p>
          </span>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}
