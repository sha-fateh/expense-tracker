import React, { useContext, useState }from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

const [buttonText, setButtonText] = useState(true)

const [listCss, setlistCss]= useState(true)

var toggleCss= listCss ? "list": "open";


var buttontoggle = buttonText ? 'Show': 'Hide';
function toggleButton () {
  setButtonText(!buttonText);
  setlistCss(!listCss);
}
  return (
    <>
      <h3>History</h3><button onClick={() => toggleButton()
    }>{buttontoggle}</button>
      <ul id= "list" className={`${toggleCss}`}>
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
