import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CardRCC from './Components/CardRCC';
import CardRFC from './Components/CardRFC';
import BTLayout from './Components/BTLayout/BTLayout';
import DataBinding from './DataBinding/DataBinding';
import HandleEvnet from './Components/HandelEvent/HandleEvnet';

ReactDOM.render(
  <React.StrictMode>
    <div className='App'>
    <HandleEvnet />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
