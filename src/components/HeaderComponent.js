import React from 'react';
import './css/HeaderComponent.css';

function HeaderComponent() {
  return (
    <div className="mx-auto" style={{ maxWidth: "800px" }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light"  >
        <a className="navbar-brand mr-auto" href="/">Sistema Clientes</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Inicio <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/agregar-cliente">Agregar Cliente</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default HeaderComponent;
