import { HashRouter, Route, Routes } from 'react-router-dom'

// Componentes que harán de vistas de la aplicación
import AppList from './AppList'
import AppEditItem from './AppEditItem'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppList />} />
        <Route path="/:itemId" element={<AppEditItem />} />
      </Routes>
    </HashRouter>
  )
}
