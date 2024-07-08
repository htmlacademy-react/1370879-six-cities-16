import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login-page/login';
import Offer from '../../pages/offer/offer';
import Page404 from '../../pages/page-404/page-404';
import { MainProps, Main } from '../../pages/main/main';
import { AppRoutes } from '../../const';

function App({ places }: MainProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<Main places={places} />} />
        <Route path={AppRoutes.Login} element={<Login />} />
        <Route path={AppRoutes.Favorites} element={<Favorites />} />
        <Route path={AppRoutes.Offer} element={<Offer />} />
        <Route path='*' element={<Page404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
