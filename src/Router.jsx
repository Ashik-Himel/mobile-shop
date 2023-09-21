import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Account from './pages/Account';
import SingleProduct from './pages/SingleProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/shop',
        element: <Shop></Shop>,
        loader: () => fetch('https://dummyjson.com/products')
      },
      {
        path: '/products/:id',
        element: <SingleProduct></SingleProduct>,
        loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
      },
      {
        path: '/my-account',
        element: <Account></Account>
      }
    ]
  }
]);

export default router;