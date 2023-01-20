import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import UseEffectUse from './components/UseEffectUse/UseEffectUse'
import ContextAPI from './components/ContextAPI/ContextAPI'
// import UseEffectUse from './components/UseEffectUse/UseEffectUse';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <UseEffectUse />
  // <React.StrictMode>
  //   {/* <App /> */}
  //   <UseEffectUse/>
  // </React.StrictMode>
  <ContextAPI/>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
