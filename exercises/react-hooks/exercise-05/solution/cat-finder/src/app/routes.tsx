import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CardsView } from './views/CardsView';

export const RootRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<CardsView />} />
  </Routes>
);
