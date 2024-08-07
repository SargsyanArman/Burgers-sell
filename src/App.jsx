import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './Rooters/Root';
import Main from './Components/Main/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: ':menu',
        element: <Main />,
      },
    ],
  },
]);

export default router;
