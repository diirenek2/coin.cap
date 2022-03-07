import { useEffect, useState } from "react"
import { currencyFormat } from '../helpers'
import { PieChart } from 'react-minimal-pie-chart';


export const Portfolio = ({operations}) => {
  const [total, setTotal ] = useState(0)
  
  const dataMock = [
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ];

  const segmentsShiftWidth = 0.5;

  const customLabelStyle = {
    fontSize: '12px',
    fontFamily: 'sans-serif',
    fill: '#e2e8f0'
  };

  useEffect(() => {

    //agrupa las operaciones segun las coins
    const operationsGroupByCoin = operations.reduce((accumulator, currentValue) => {
      (accumulator[currentValue.coin.name] = accumulator[currentValue.coin.name] || []).push(currentValue)
      return accumulator
    }, [])

    let holdingTotal = []
    
    Object.getOwnPropertyNames(operationsGroupByCoin).forEach(propertyName => {

      let holdingValue = 0
      Array.from(operationsGroupByCoin[propertyName]).forEach(operation => {
        if(operation.type.name === "Compra"){
          holdingValue += (operation.price * operation.amount)
        }else if(operation.type.name === "Venta"){
          holdingValue -= (operation.price * operation.amount)
        }
      })

      if(holdingValue>0){
        holdingTotal.push({'coinName': propertyName,'holdingValue': holdingValue})
      }
    })



    const totalValue = holdingTotal.reduce( (total, operation) => operation.holdingValue + total, 0 )

    setTotal(totalValue)

  }, [operations])

  return (
    <div className="m-4 p-4">
      <div className='text-slate-300 bg-slate-800 p-4 m-1 rounded flex'>
        <span className="w-1/2">

        <PieChart
          className=" w-36"
          data={dataMock}
          animate = {true}
          radius={PieChart.defaultProps.radius - segmentsShiftWidth}
          segmentsShift={segmentsShiftWidth}
          label={({ dataEntry }) => '%'+ dataEntry.value}
          labelStyle={{
            ...customLabelStyle,
          }}
        />
        </span>
        <span className="w-1/2 text-center">
          Total: {total}
        </span>
      </div>
    </div>
  )
}
