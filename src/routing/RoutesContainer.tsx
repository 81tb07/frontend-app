import { BrowserRouter, Routes, Route } from 'react-router'
import { BitBotRoutes } from './types'
import { Home as HomePage } from '../pages/Home'
import { Login as LoginPage } from '../pages/Login'

export const RoutesContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={BitBotRoutes.LOGIN_PAGE} element={<LoginPage />} />
        <Route path={BitBotRoutes.HOME_PAGE} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
