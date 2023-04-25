import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CalculatorStore from './store/CalculatorStore';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    calculator: new CalculatorStore()
  }}>
    <App />
  </Context.Provider>,

);

