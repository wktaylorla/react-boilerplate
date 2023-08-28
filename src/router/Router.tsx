import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
