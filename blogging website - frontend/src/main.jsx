import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <BrowserRouter>
    <App />
    </BrowserRouter>
   
  </React.StrictMode>,
)//ก่อนจะเปิด web ต้อง cd mern-blogging-website และก็ cd "blogging website - frontend"
//ค่อย npm run dev