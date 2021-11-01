import { Redirect, Route, RouteProps } from 'react-router';
import { ValidationService } from '../services/ValidationService';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
} & RouteProps;

export default function ProtectedRoute({ isAuthenticated, ...routeProps }: ProtectedRouteProps) {
  if (ValidationService.isLoggedIn()) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: "/login" }} />;
  }
};