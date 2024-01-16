import React,{ useState } from 'react';
import './App.css';
import Inputbox from './components/Inputbox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLeft }  from '@fortawesome/free-solid-svg-icons'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount( amount * currencyInfo[to]);
  }

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  return (
    <div className='currencyConverterContainer'>
      <div className="inputContent">
        <h1>Currency Converter</h1>
        <form onSubmit = {(e) => {
          e.preventDefault();
          convert();
        }}>
          <div className="formContent">
            <Inputbox label="From" 
              amount={amount} 
              currencyOptions={options} 
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={from}
            />
            <button 
              className='swapBtn'
              onClick={swap}
            >
              <FontAwesomeIcon icon={faRightLeft} rotation={90}/>
            </button>
            <Inputbox  
              label="To"
            />
            <button className='convertBtn'>Convert</button>
          </div> 
        </form>
      </div>
    </div>
    
  );
}

export default App;
