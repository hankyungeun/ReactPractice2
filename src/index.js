import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import UseEffectTest from './components/hook/UseEffectTest';
import UseStateTest from './components/hook/UseStateTest';
import Layout from './components/Layout';
import './index.css';
import ErrorPage from './pages/ErrorPage';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {path:"/", element : <Layout />, errorElement: <ErrorPage />},
  {path:"/hello", element: <h2>Hello. React!</h2>},
  {path:"/component/class", element:<ClassComponent/>},
  {path:"/component/functional", element:<FunctionalComponent/>},
  {path:"/hook/state", element: <UseStateTest/>},
  {path:"/hook/effect",element:<UseEffectTest/>}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
