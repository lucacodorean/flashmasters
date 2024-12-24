import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {UserProvider} from "./contexts/userContext";

createRoot(document.getElementById('root')).render(
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>,
)
