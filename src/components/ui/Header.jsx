import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

export default function Header() {
  return (
    <header className="bg-white border-bottom">
      <div className="container d-flex align-items-center justify-content-between py-3">
        <div className="d-flex align-items-center">
          <Link to='/profile' className="btn btn-light me-3 rounded-circle">
            <IoArrowBack className="text-secondary" size={20} />
          </Link>
          <h1 className="h5 mb-0 fw-semibold text-dark">Comparte tu sitio favorito</h1>
        </div>
      </div>
    </header>
  );
}