import { useEffect, useState} from 'react'

const useCurrencyInfo = (currency) => {

    const [currencySymbolInfo, setCurrencySymbolInfo] = useState ({});
    useEffect(() => {
     fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
     .then((response) => response.json())
     .then((data) =>  setCurrencySymbolInfo(data[currency]))
    }, [currency])

    return currencySymbolInfo;

} 

export default useCurrencyInfo
