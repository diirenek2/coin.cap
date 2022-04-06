import { useEffect, useState } from "react"
import { currencyFormat, generateId } from '../helpers'

import { PieChart } from 'react-minimal-pie-chart'

export const Portfolio = ({operations, upodatedPrices}) => {
  const [ totalHoldingInvested, setTotalHoldingInvested ] = useState(0)
  const [ chartData, setChartData ] = useState([])
  const [ holdingCoins, setHoldingCoins ] = useState ([])
  const [ currentValue, setCurrentValue ] = useState (0)

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
    let totalInvested = 0
    let coinAmount = 0
    Object.getOwnPropertyNames(operationsGroupByCoin).forEach(propertyName => {
      let invested = 0

      operationsGroupByCoin[propertyName].forEach(operation => {
        if(operation.type.name === "Compra"){
          invested += (operation.price * operation.amount)
          coinAmount += operation.amount
        }else if(operation.type.name === "Venta"){
          invested -= (operation.price * operation.amount)
          coinAmount -= operation.amount
        }
      })

      if(invested > 0){
        totalInvested += invested
        holding.push({'coinName': propertyName,'invested': invested, 'coinAmount':coinAmount})
      }
    })

    setHoldingCoins(holding)

    setChartData(holding.map(coin=>{
      //formula porcentaje (a es x% de b)
      const percentage = (100/totalInvested)*coin.invested
      return {
        id: generateId(),
        title: coin.coinName,
        value: Number(percentage.toFixed(2)),
        amount: coin.coinAmount,
        usd: coin.invested,
        //usd: upodatedPrices[coin.coinName].USD * coin.coinAmount,
        color: '#d97706' //amber-600
      }
    }))

    setTotalHoldingInvested(totalInvested)
  }, [operations])

  useEffect(() =>{
    let sum = 0
    holdingCoins.map((coin)=>{
      //console.log(upodatedPrices[coin.coinName].USD)
      sum += upodatedPrices[coin.coinName].USD * coin.coinAmount
    })

    setCurrentValue(sum)

  }, [upodatedPrices])

  return (
    <div className="m-4 p-4">
      <div className='text-slate-300 bg-slate-800 p-4 m-1 rounded'>
        <div className="w-full mb-4 flex">
          <PieChart
            className=" w-1/6"
            data={chartData}
            animate = {true}
            radius={PieChart.defaultProps.radius - segmentsShiftWidth}
            segmentsShift={segmentsShiftWidth}
            label={({ dataEntry }) => '%'+ dataEntry.value}
            labelStyle={{
              ...customLabelStyle,
            }}
          />
          <div className="w-full text-amber-500">
            <h3 className="text-center text-3xl">
              Valor Actual: {currencyFormat(currentValue)}
            </h3>
            <h3 className="text-center text-3xl">
              Valor Invertido: {currencyFormat(totalHoldingInvested)}
            </h3>
          </div>

        </div>
        <div className="">
          {chartData.map( data => (
            <span
              key = {data.id}
              className="pr-4">
                <span className="border-amber-600 border-l border-b p-1">% { data.value } </span>
                <span className="pr-2">{Number(data.amount).toFixed(2)}</span>
                <span className="pr-2">{ data.title }</span>
                <span>{ currencyFormat(data.usd) }</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
