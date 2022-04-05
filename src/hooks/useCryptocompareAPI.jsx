import { useState } from 'react'
import { coinsJson } from '../data/coins'

const useCryptocompareAPI = () => {
    const [coins, setCoins] = useState({})
    const multipleSymbolsPriceAPI = ( async ()=>{
        const symbols = coinsJson.map( symbol =>{ return symbol.name })
        const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${symbols}&tsyms=USD`

        const response = await fetch (url)
        const result = await response.json()

        setCoins (result)
    })

    //multipleSymbolsPriceAPI()

    return [coins]
}

export default useCryptocompareAPI