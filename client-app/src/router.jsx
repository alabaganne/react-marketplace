import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import AppLayout from './components/AppLayout';
import ProductDetail from './pages/ProductDetail';
import Shops from './pages/Shops';
import About from './pages/About';
import Contact from './pages/Contact';
import ShopProducts from './pages/ShopProducts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'shops',
        element: <Shops />,
      },
      {
        path: 'shops/:id/products',
        element: <ShopProducts />,
      },
      {
        path: 'shops/:id/products/:id',
        element: <ProductDetail />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;
