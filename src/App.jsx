import Home from './pages/Home';
import ErrorPage from './pages/error/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/about/About';
import Accomodation from './pages/accomodation/Accomodation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'accomodation/:id', element: <Accomodation /> },
      { path: 'about', element: <About /> }
    ],
  },
  // { index: true, element: <Home />, errorElement: <ErrorPage /> },
  // { path: 'accomodation/:id', element: <Accomodation />, errorElement: <ErrorPage /> },
  // { path: 'about', element: <About />, errorElement: <ErrorPage /> }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
