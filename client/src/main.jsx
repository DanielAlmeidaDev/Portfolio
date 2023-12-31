import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import './css/App.css'

import globalEn from "./translations/en/global.json"
import globalPt from "./translations/pt/global.json"
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

i18next.init({

  interpolation:{
    escapeValue:false
  },
  lng:'GB',
  resources:{
    GB: {
      global:globalEn
    },
    PT:{
      global:globalPt
    },
  }

});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
