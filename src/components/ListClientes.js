import React, { useEffect, useState } from 'react';
import './css/ListClientes.css';
import ClienteService from '../servicios/ClienteService';
import { Link } from 'react-router-dom';

function ListClientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
listarClientes()
  }, [])

  const listarClientes = () =>{
    ClienteService.obtenerClientes().then(response => {
      setClientes(response.data);
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  const deleteCliente = (clienteId) =>{
    ClienteService.eliminarCliente(clienteId).then((response)=>{
      listarClientes();
    }).catch(error=>{
      console.log(error);
    })
  }

  return (
    <div className="list-clientes-container">
      <div className='container  '>
        <h1 className="list-clientes-title text-center">¡Explora Nuestros Clientes!</h1>
      </div>

      <div className='container text-center'>
        <table className="table table-striped table-bordered table-striped  table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Numero</th>
              <th scope="col">Descripcion</th>
              <th scope="col">accion</th>
            </tr>
          </thead>

          <tbody>
            {
              clientes.map(
                cliente =>
                  <tr key={cliente.idCliente}>
                    <td>{cliente.idCliente}</td>
                    <td>{cliente.nombre}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.numero}</td>
                    <td>{cliente.descripcion}</td>
                    <td>
                      <Link className="btn btn-info" to={`/edit-cliente/${cliente.idCliente}`}>Editar</Link>
                      <button className='btn btn-danger mx-2' onClick={() => deleteCliente(cliente.idCliente)}>Eliminar</button>
                      
                    </td>
                  </tr>
              )
            }
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default ListClientes;
