import './App.css';
import HeaderComponent from './components/HeaderComponent';
import ListClientes from './components/ListClientes';
import AddClienteComponent from './components/AddClienteComponent'
import { BrowserRouter, Routes,Route } from 'react-router-dom';



function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<ListClientes />}></Route>
            <Route  path='/clientes' element={<ListClientes />}></Route>
            <Route  path='/agregar-cliente' element={<AddClienteComponent />}></Route>
            <Route  path='/edit-cliente/:id' element={<AddClienteComponent />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
