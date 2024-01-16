import React from 'react'
import './Inputbox.css'

const Inputbox = ({
        label, 
        amount = 100,
        currencyOptions = [],
        selectedCurrency = "usd",
        onAmountChange,
        onCurrencyChange,
        amountDisabled = false,
        currencyDisabled = false,
        className = ""
    }) => {
  return (
    <div className={`inputboxContainer ${className}`}>
        <div className="inputboxContent">
            <div className="leftContent">
                <label htmlFor="currencyAmount">{label}</label>
                <input 
                    type="number" 
                    id="currencyAmount"
                    value={amount}
                    disabled={amountDisabled}
                    placeholder='Amount'
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="rightContent">
                <label htmlFor="currencySymbol">Currency Type</label>
                <select 
                    name="" 
                    id="currencySymbol" 
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
    </div>
  )
}

export default Inputbox
