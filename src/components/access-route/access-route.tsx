import type { ReactNode } from 'react';
import { Navigate, To } from 'react-router-dom';
import { AuthStatus } from '../../types/auth-status';
import { AppRoute } from '../../const';

interface AccessRouterProps {
  children: ReactNode;
  status: AuthStatus;
}

const createAccessRouter = (statusToCheck: AuthStatus, fallbackPath: To) =>
  function AccessRoute({ children, status }: AccessRouterProps) {
    switch (status) {
      case statusToCheck:
        return children;
      case 'Unknown':
        return 'Loading...';
      default:
        return <Navigate to={fallbackPath}/>;
    }
  };

const PrivateRoute = createAccessRouter('Auth', AppRoute.Login);
const PublicRoute = createAccessRouter('NoAuth', AppRoute.Main);

export { PrivateRoute, PublicRoute };

