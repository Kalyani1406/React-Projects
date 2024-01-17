import React from 'react'
import './Inputbox.css'

const Inputbox = ({
        label, 
        amount,
        currencyOptions = [],
        selectedCurrency = "usd",
        onAmountChange,
        onCurrencyChange,
        amountDisabled = false,
        currencyDisabled = false
    }) => {
  return (
    <div className="inputboxContainer">
        <div className="inputContent">
            <label htmlFor="currencyAmount">{label}</label>
            <input 
                type="number" 
                id="currencyAmount"
                disabled={amountDisabled}
                value={amount}
                placeholder='Amount'
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
           
        <div className="optionContent">
            <p>Currency Type</p>
            <select 
                name="currencySymbol" 
                value={selectedCurrency} 
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisabled}
            >
                
                {
                    currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency} 
                        </option>
                    ))
                } 
            </select>
        </div>     
    </div>
  )
}

export default Inputbox
