
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './router/Index'
import './i18n'

createRoot(document.getElementById('root')!).render(

    <AppRouter/>

)
