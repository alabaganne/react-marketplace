import { Outlet, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import AppLayout from './components/AppLayout';
import ProductDetail from './pages/ProductDetail';
import Shops from './pages/Shops';
import About from './pages/About';
import Contact from './pages/Contact';
import ShopProducts from './pages/ShopProducts';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import MyShops from './pages/Admin/MyShops';
import CreateShop from './pages/Admin/CreateShop';
import ProductsList from './pages/Admin/ProductsList';
import CreateProduct from './pages/Admin/CreateProduct';
import EditProduct from './pages/Admin/EditProduct';

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
        path: 'shops/',
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
      {
        path: 'auth/',
        element: (
          <div className="container">
            <Outlet />
          </div>
        ),
        children: [
          {
            path: 'login/',
            element: <Login />,
          },
          {
            path: 'register/',
            element: <Register />,
          },
        ],
      },
      {
        path: '/admin/',
        element: (
          <div className="container">
            <Outlet />
          </div>
        ),
        children: [
          {
            path: 'shops/',
            element: <MyShops />,
          },
          {
            path: 'shops/create/',
            element: <CreateShop />,
          },
          {
            path: 'shops/:id/products/',
            element: <ProductsList />,
          },
          {
            path: 'shops/:id/products/create/',
            element: <CreateProduct />,
          },
          {
            path: 'shops/:id/products/:id/',
            element: <EditProduct />,
          },
        ],
      },
    ],
  },
]);

export default router;
