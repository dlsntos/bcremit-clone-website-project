import type { RouteObject } from 'react-router'
import Register from 'features/auth/register/Register.tsx';
import CreateAccount from 'features/auth/register/components/CreateAccount';
import SetupInformation from 'features/auth/register/components/SetupInformation';
import SetupAddress from 'features/auth/register/components/SetupAddress';

const registerRoute: RouteObject[] = [
  {
    path: 'register',
    element: <Register />,
    children: [
      {
        index: true,
        element: <CreateAccount />
      },
      {
        path: 'setup-information',
        element: <SetupInformation />
      },
      {
        path: 'setup-address',
        element: <SetupAddress />
      }
    ],
  },

];
export default registerRoute;