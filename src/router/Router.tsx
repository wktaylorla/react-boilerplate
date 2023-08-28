import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from '../Pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
