import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login-page/login';
import Offer from '../../pages/offer/offer';
import Page404 from '../../pages/page-404/page-404';
import { PrivateRoute, PublicRoute } from '../access-route/access-route';
import { MainProps, Main } from '../../pages/main/main';
import { AppRoute } from '../../const';
import { AuthStatus } from '../../types/auth-status';

const currentStatus: AuthStatus = 'NoAuth';

function App({ places }: MainProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Main places={places} />} />
          <Route path={AppRoute.Login} element={
            <PublicRoute status={currentStatus}>
              <Login />
            </PublicRoute>
          }
          />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute status={currentStatus}>
              <Favorites />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Offer} element={<Offer />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
