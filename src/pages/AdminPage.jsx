import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdminStyles.css'; // Si decides agregar estilos específicos

const AdminPage = () => {
    return (
        <div className="admin-container">
            <header className="admin-header">
                <h1>Panel de Administrador</h1>
            </header>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Autor</th>
                            <th>Descripción</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Aquí puedes mapear tus datos */}
                        {/* Ejemplo de fila */}
                        <tr>
                            <td>Ejemplo de Publicación</td>
                            <td>Autor 1</td>
                            <td>Descripción de la publicación</td>
                            <td>01/01/2023</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="button-container">
                <Link to="/create" className="admin-button">Crear</Link>
                <Link to="/edit" className="admin-button">Editar</Link>
                <Link to="/delete" className="admin-button">Eliminar</Link>
                <Link to="/modify" className="admin-button">Modificar</Link>
            </div>
        </div>
    );
};

export default AdminPage;