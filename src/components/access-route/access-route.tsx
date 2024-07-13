import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthStatus } from '../../types/auth-status';
import { AppRoute } from '../../const';

interface AccessRouterProps {
  children: ReactNode;
  status: AuthStatus;
}

const createAccessRouter = (statusToCheck: AuthStatus, fallbackPath: AppRoute) => function AccessRoute({ children, status }: AccessRouterProps) {
  return status === statusToCheck ? children : <Navigate to={fallbackPath} />;
};

const PrivateRoute = createAccessRouter('Auth', AppRoute.Login);
const PublicRoute = createAccessRouter('NoAuth', AppRoute.Main);

// function PrivateRoute({ children, status }: AccessRouterProps) {
//   return status === 'Auth' ? children : <Navigate to={AppRoute.Login} />;
// }

// function PublicRoute({ children, status }: AccessRouterProps) {
//   return status === 'NoAuth' ? children : <Navigate to={AppRoute.Main} />;
// }

export { PrivateRoute, PublicRoute };

