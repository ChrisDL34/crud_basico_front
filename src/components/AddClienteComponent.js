import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ClienteService from '../servicios/ClienteService';

function AddClienteComponent() {
const [nombre,setNombre]=useState('');
const [email,setEmail]=useState('');
const [numero,setNumero]=useState('');
const [descripcion,setDescripcion]=useState('');
const navigate = useNavigate();
const {id} = useParams();

const saveOrUpdateCliente = (e) => {
    e.preventDefault();

    if (!nombre || !email || !numero || !descripcion) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }
  

    const cliente = {nombre,email,numero,descripcion};
    if(id){
      ClienteService.actualizarCliente(id,cliente).then((response)=>{
        console.log(response.data);
        navigate('/clientes');
    }).catch(error => {
        console.log(error)
    })
    }
        
    else{
      ClienteService.guardarCliente(cliente).then((response)=>{
        console.log(response.data);
        navigate('/clientes');
    }).catch(error => {
        console.log(error)
    })
    }
    
}



useEffect(()=>{
  ClienteService.obtenerClientePorId(id).then((response)=>{
    setNombre(response.data.nombre);
    setEmail(response.data.email);
    setNumero(response.data.numero);
    setDescripcion(response.data.descripcion);
  }).catch(error => {
    console.log(error);
  })
},[])

const title=()=>{
  if(id){
    return <h1 className="list-clientes-title text-center mt-3">¡Edicion de Cliente!</h1>
    
  }
  else{
    return <h1 className="list-clientes-title text-center mt-3">¡Registro Clientes!</h1>
  }
}

const botonRegistrarEditar = () => {
  if (id) {
    return (
      <button class="btn btn-primary" onClick={(e) => saveOrUpdateCliente(e)}>Editar Cliente</button>
    );
  } else {
    return (
      <button class="btn btn-primary" onClick={(e) => saveOrUpdateCliente(e)}>Registrar Cliente</button>
    );
  }
};


  return (
    <div>
         <div className='container'>
          {
            title()
          }
      </div>
<form>
  <div class="mb-3 form-group">
    <label for="nombre" class="form-label">Nombre</label>
    <input required type="text" class="form-control" id="nombre" name='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
  </div>
  <div class="mb-3 form-group">
    <label for="email" class="form-label">Email</label>
    <input required type="text" class="form-control" id="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
  </div>
  <div class="mb-3 form-group">
    <label for="numero" class="form-label">Numero</label>
    <input required type="number" class="form-control" id="numero" name='numero' value={numero} onChange={(e) => setNumero(e.target.value)}/>
  </div>
  <div class="mb-3 form-group">
    <label for="descripcion" class="form-label">descripcion</label>
    <input  required type="text" class="form-control" id="descripcion" name='descripcion' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
  </div>

<div className="container"> 
{
botonRegistrarEditar()  
}
<Link to='/clientes' class="btn btn-danger mx-3">Cancelar</Link>


</div>

 
  
</form>
    </div>
  )
}

export default AddClienteComponent