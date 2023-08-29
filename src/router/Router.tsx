import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import Home from '../pages/Home';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
