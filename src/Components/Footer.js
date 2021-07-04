import { NavLink } from 'react-router-dom';
import fbLogo from '../Assets/Images/fb-logo.png'

function Footer() {

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark p-0 fixed-bottom">
                <div className="container-fluid p-0">
                    <span className="text-muted ms-3">&copy; 2021</span>                    
                    <NavLink className="nav-link align-self-end p-1 pe-3" to="https://www.facebook.com/begonacerverazapatos?ref=hl"><img alt="fb" className="w-100" src={fbLogo}></img> </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Footer
