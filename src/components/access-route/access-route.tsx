import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
// import { AuthorizationStatus } from '../../const';
import { AuthStatus } from '../../types/auth-status';
import { AppRoute } from '../../const';

interface AccessRouterProps {
  children: ReactNode;
  status: AuthStatus;
}

function PrivateRoute({ children, status }: AccessRouterProps) {
  return status === 'Auth' ? children : <Navigate to={AppRoute.Login} />;
}

function PublicRoute({ children, status }: AccessRouterProps) {
  return status === 'NoAuth' ? children : <Navigate to={AppRoute.Main} />;
}

export { PrivateRoute, PublicRoute };

