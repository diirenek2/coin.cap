export const generateId = () => {
  const random = Math.random().toString(36).substr(2)
  const date = Date.now().toString(36)
  return random + date
}

export const dateFormat = date => {
  const newDate = new Date (date);
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }
  return newDate.toLocaleDateString('es-ES', options)
}

export const currencyFormat = (currency) =>{
  return currency.toLocaleString('en-US',{
    style: 'currency',
    currency: 'USD'
  })
}

export const cryptoCompareMultipleSymbolsPriceAPI = ( async (coinsJson)=>{
  const symbols = coinsJson.map( symbol =>{ return symbol.name })
  const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${symbols}&tsyms=USD&api_key=7fbc611887888ed2bd9c1886617301d46794a31eb0dbc199a9a87c72c271e53f`

  const response = await fetch (url)
  const result = await response.json()
  return result
})
