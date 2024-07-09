import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login-page/login';
import Offer from '../../pages/offer/offer';
import Page404 from '../../pages/page-404/page-404';
import PrivateRoute from '../private-route/private-route';
import { MainProps, Main } from '../../pages/main/main';
import { AppRoutes, AuthorizationStatus } from '../../const';

function App({ places }: MainProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<Main places={places} />} />
        <Route path={AppRoutes.Login} element={<Login />} />
        <Route path={AppRoutes.Favorites} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path={AppRoutes.Offer} element={<Offer />} />
        <Route path='*' element={<Page404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
