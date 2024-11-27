import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RoutesContainer } from './routing/RoutesContainer.tsx';

import './locales/i18n.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutesContainer />
  </StrictMode>,
);
