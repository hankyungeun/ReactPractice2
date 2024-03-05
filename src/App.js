import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddressBook from './components/AddressBook';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import Layout2 from './components/Layout2';
import UseContextTest from './components/hook/UseContextTest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 path인경우 연결할 컴포넌트(Layout2) */}
          <Route path='/' element={<Layout2/>}/>
          <Route path='/component/class' element={<ClassComponent/>}/>
          <Route path='/component/functional' element={<FunctionalComponent/>}/>
          <Route path='/hook/context' element={<UseContextTest/>}/>
          <Route path='/addressBook' element={<AddressBook/>}/>
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
