import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import Navbar from './components/Navbar'
import './index.css'
import { Provider } from 'react-redux/es'
import { store } from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>      
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
