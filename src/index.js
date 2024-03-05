import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import UseCallbackTest from './components/hook/UseCallbackTest';
import UseContextTest from './components/hook/UseContextTest';
import UseEffectTest from './components/hook/UseEffectTest';
import UseMemoTest from './components/hook/UseMemoTest';
import UseRefTest from './components/hook/UseRefTest';
import UseStateTest from './components/hook/UseStateTest';
import Layout2 from './components/Layout2';
import CountingLetters from './components/practice/CountingLetters';
import './index.css';
import ErrorPage from './pages/ErrorPage';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {path:"/", element : <Layout2 />, errorElement: <ErrorPage />},
  {path:"/hello", element: <h2>Hello. React!</h2>},
  {path:"/component/class", element:<ClassComponent/>},
  {path:"/component/functional", element:<FunctionalComponent/>},
  {path:"/pratice", element:<CountingLetters/>},
  {path:"/hook/state", element: <UseStateTest/>},
  {path:"/hook/effect",element:<UseEffectTest/>},
  {path:"/hook/memo",element:<UseMemoTest/>},
  {path:"/hook/callback",element:<UseCallbackTest />},
  {path:"/hook/dom",element:<UseRefTest />},
  {path:"/hook/context",element:<UseContextTest />}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <App></App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
