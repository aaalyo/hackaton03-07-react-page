import { NavLink } from 'react-router-dom';
import logo from '../Assets/Images/logo.png'



function Header() {




    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavLink exact to="/"><img alt="logo" src={logo}></img></NavLink>
                    <div className="collapse navbar-collapse ms-5" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item ">
                                <NavLink className="nav-link" exact to="/"> Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Categories"> Categories </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/CartProducts"> Cart </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
