import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AppContext';

export const NavigationBar = () => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    const handleLogout = () => {
        auth.logout()
        navigate('/login', { replace: true });
    }

    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">ToDo</a>
                    </li>
                </ul>
                <ul className="d-flex">
                    <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
                </ul>
            </div>
        </nav>
    )
}
