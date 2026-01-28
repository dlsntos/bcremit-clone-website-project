import { RouterProvider, createBrowserRouter } from "react-router";
import loginRoute from './routes/loginRoute';
import registerRoute from './routes/registerRoute';
import dashboardRoutes from './routes/dashboardRoutes';
import WebsiteLayout from './layout/WebsiteLayout';
import LandingPage from './pages/landing-page/LandingPage';
import beneficiaryRoutes from "./routes/beneficiaryRoutes";
import sendMoneyRoute from "./routes/sendMoneyRoute";

const App = () => {

  {/* Route Elements for website to be added later on */ }
  const route = createBrowserRouter([
    {
      path: '/',
      element: <WebsiteLayout />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "how-it-works",
          element: ""
        },
        {
          path: "contact",
          element: ""
        },
        {
          path: "faqs",
          element: ""
        },
        {
          path: "blog",
          element: ""
        },
      ],
    },
    ...loginRoute,
    ...registerRoute,
    ...dashboardRoutes,
    ...beneficiaryRoutes,
    ...sendMoneyRoute
  ]);
  return (
    <RouterProvider
      router={route}
    />
  );
}

export default App;
