import { BrowserRouter, Routes, Route } from 'react-router';
import { BitbotRoutes } from './types';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';

export const RoutesContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={BitbotRoutes.LOGIN_PAGE} element={<LoginPage />} />
        <Route path={BitbotRoutes.HOME_PAGE} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
