import type { RouteObject } from 'react-router'
import Login from 'features/auth/login/Login';

const loginRoute: RouteObject[] = [
  {
    path: 'login',
    element: <Login />,
  }
]
export default loginRoute;