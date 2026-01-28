import DashboardLayout from 'layout/DashboardLayout';
import DashboardHome from '../pages/dashboard/home/DashboardHome';
import { requireAuth } from '../features/auth/protected';
import type { RouteObject } from 'react-router'
import History from '../pages/dashboard/history/History';
import Settings from '../pages/dashboard/settings/Settings';
import Support from '../pages/dashboard/support/Support';
import BcRemitPay from '../pages/dashboard/bcremit-pay/BcRemitPay';

const dashboardRoutes: RouteObject[] = [
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    loader: () => requireAuth(),
    children: [
      {
        index: true,
        element: <DashboardHome />
      },
      {
        path: "transaction-history",
        element: <History />
      },
      {
        path: "settings",
        element: <Settings />
      },
      {
        path: "support",
        element: <Support />
      },
      {
        path: "bcremit-pay",
        element: <BcRemitPay />
      }
    ],

  } 
]

export default dashboardRoutes;