import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { IllustrationsProvider } from './context/illustration'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <IllustrationsProvider>
    <App />
  </IllustrationsProvider>
)
