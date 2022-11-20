import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CardsView } from './views/CardsView';

// if AboutView have default export then we can jus do:  React.lazy(() => import(/* webpackChunkName: "AboutView" */ './views/AboutView'));
const AboutView = React.lazy(() => import(/* webpackChunkName: "AboutView" */ './views/AboutView').then(module => ({ default: module.AboutView })));

export const RootRoutes: React.FC = () => (
  <Routes>
    <Route path="about" element={<React.Suspense fallback={<>...</>}><AboutView /></React.Suspense>}/>
    <Route path="/" element={<CardsView />} />
  </Routes>
);
