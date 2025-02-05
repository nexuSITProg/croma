import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider, 
} from 'react-router-dom';
import App from './App';
import { ErrorPage } from './routes/ErrorPage';
import { Main } from './layout/Main/Main';

import './index.scss';

const router = createBrowserRouter([
  { 
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />, 
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: 'shop',
        element: <></>
      },
      {
        path: 'about',
        element: <></>
      },
      {
        path: 'contact',
        element: <></>
      },
      {
        path: 'collections',
        element: <></>
      }
    ]
  },
]);

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)