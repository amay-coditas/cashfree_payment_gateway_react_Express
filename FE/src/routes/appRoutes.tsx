import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
const Cashfree = lazy(() => import('views/Cashfree/Cashfree'));
const AboutUs = lazy(() => import('views/AboutUs/AboutUs'));

const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <AboutUs />,
  },
  {
    path: "/cashfree",
    element: <Cashfree />,
  },
]);

export default appRoutes;
