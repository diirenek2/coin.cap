import { useEffect, useState } from "react"
import { currencyFormat, generateId } from '../helpers'


import { PieChart } from 'react-minimal-pie-chart'


export const Portfolio = ({operations}) => {
  const [totalValueUsd, setTotalValueUsd ] = useState(0)
  const [chartData, setChartData] = useState([])
  
  const segmentsShiftWidth = 0.5;

  const customLabelStyle = {
    fontSize: '10px',
    fontFamily: 'sans-serif',
    fill: '#e2e8f0'//slate-200
  };

  useEffect(() => {

    //agrupa las operaciones segun las coins
    const operationsGroupByCoin = operations.reduce((accumulator, currentValue) => {
      (accumulator[currentValue.coin.name] = accumulator[currentValue.coin.name] || []).push(currentValue)
      return accumulator
    }, {})

    let holding = []
    let totalValueUsd = 0
    
    Object.getOwnPropertyNames(operationsGroupByCoin).forEach(propertyName => {
      let valueUsd = 0

      operationsGroupByCoin[propertyName].forEach(operation => {
        if(operation.type.name === "Compra"){
          valueUsd += (operation.price * operation.amount)
        }else if(operation.type.name === "Venta"){
          valueUsd -= (operation.price * operation.amount)
        }
      })

      if(valueUsd>0){
        totalValueUsd += valueUsd
        holding.push({'coinName': propertyName,'valueUsd': valueUsd})
      }
    })

    setChartData(holding.map(element=>{
      //formula porcentaje (a es x% de b)
      const percentage = (100/totalValueUsd)*element.valueUsd
      return { 
        id: generateId(),
        title: element.coinName, 
        value: Number(percentage.toFixed(2)), 
        usd: element.valueUsd,
        color: '#d97706' //amber-600
      }
    }))

    setTotalValueUsd(totalValueUsd)
    
  }, [operations])

  return (
    <div className="m-4 p-4">
      <div className='text-slate-300 bg-slate-800 p-4 m-1 rounded'>
        <div className="w-full mb-4 flex">
          <PieChart
            className="w-1/4"
            data={chartData}
            animate = {true}
            radius={PieChart.defaultProps.radius - segmentsShiftWidth}
            segmentsShift={segmentsShiftWidth}
            label={({ dataEntry }) => '%'+ dataEntry.value}
            labelStyle={{
              ...customLabelStyle,
            }}
          />
          <h3 className="w-3/4 text-center text-3xl">
            {currencyFormat(1000)}
          </h3>
        </div>
        <div className="">
          {chartData.map( data => (
            <span 
              key = {data.id}
              className="pr-4">
                <span className="border-amber-600 border-l border-b p-1">% { data.value } </span>
                <span className="pr-2">{ data.title }</span>
                <span>{ currencyFormat(data.usd) }</span>
            </span>
          ))}
          
        </div>
      </div>
    </div>
  )
}
