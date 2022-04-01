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
import StateDemo from './StaeDemos/StateDemo';
import TangGiamFontSize from './StaeDemos/TangGiamFontSize';
import ThayDoiMauSac from './StaeDemos/ThayDoiMauSac';
import BtChonXe from './BtChonXe/BtChonXe';
import RenderArray from './Components/RenderArray/RenderArray';

ReactDOM.render(
  <React.StrictMode>
    <div className='App'>
 <App/>
  
   
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
