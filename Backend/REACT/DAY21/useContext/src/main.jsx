import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dataprovider from './provider/Dataprovider.jsx'
import Themeprovider from './provider/Themeprovider.jsx'
import Loginprovider from './provider/Loginprovider.jsx'

createRoot(document.getElementById("root")).render(
  <Dataprovider>
    <Themeprovider>
      <Loginprovider>
        <App />
      </Loginprovider>
    </Themeprovider>
  </Dataprovider>,
);



