import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { IllustrationsProvider } from './context/illustration'
import { ErrorProvider } from './context/error'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ErrorProvider>
    <IllustrationsProvider>
      <App />
    </IllustrationsProvider>
  </ErrorProvider>
)
