import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdminStyles.css'; // Si decides agregar estilos específicos

const AdminPage = () => {
    const [users, setUsers] = React.useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/v1/users/admin')
            .then(res => res.json())
            .then(data => setUsers(data.reverse()))
            .catch(err => console.log(err))
    }, [])
    return (
        <section className="admin-container">
            <header className="admin-header">
                <h3>Panel de Administrador</h3>
            </header>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>Fecha de Nacimiento</th>
                            <th>Fecha de Registro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.username}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.dateborn.substring(0, 10)}</td>
                                    <td>{user.created_at}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="button-container">
                <Link to="/create" className="admin-button">Crear</Link>
                <Link to="/edit" className="admin-button">Editar</Link>
                <Link to="/delete" className="admin-button">Eliminar</Link>
                <Link to="/modify" className="admin-button">Modificar</Link>
            </div>
        </section>
    );
};

export default AdminPage;