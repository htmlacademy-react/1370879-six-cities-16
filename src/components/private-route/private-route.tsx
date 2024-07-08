import { Navigate } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: string;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps) {
  const { authorizationStatus, children } = props;
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoutes.Login}/>
  );
}

export default PrivateRoute;
