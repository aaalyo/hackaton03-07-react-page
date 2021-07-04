import { NavLink } from 'react-router-dom';
import categoryProfile from '../Assets/Images/category-embroidered-profile.jpg';
import categoryProduct1 from '../Assets/Images/category-product-1.jpg';
import categoryProduct2 from '../Assets/Images/category-product-2.jpg';
import categoryProduct3 from '../Assets/Images/category-product-3.jpg';
import categoryProduct4 from '../Assets/Images/category-product-4.jpg';
import categoryProduct5 from '../Assets/Images/category-product-5.jpg';
import categoryProduct6 from '../Assets/Images/category-product-6.jpg';


function CategoryPage() {

    return (
        <div className="me-3 ms-3">
            <div className="m-3">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink className="text-white" aria-current="page" exact to="/"> Home </NavLink></li>
                        <li className="breadcrumb-item"><NavLink className="text-white" aria-current="page" exact to="/Categories"> Categories </NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">Embroidered</li>
                    </ol>
                </nav>
            </div>
            <div className="row m-0 p-0 nav-link bg-white mb-5">
                <div className="bg-white p-3 ">
                    <div className="row g-0 ">
                        <div className="col-md-2">
                            <img src={categoryProfile} className="img-fluid " alt="shoe" />
                        </div>
                        <div className="col-md-10">
                            <div className="card-body m-0 p-0 ">
                                <h2 className="card-title bg-card text-dark text-center m-2"> Shoes with embroidery</h2>
                                <p className="card-title bg-card text-dark  m-2">Our objective centers on combining tradition and technical innovation to create an end product that incorporates quality, design, comfort and the label Made in Spain. Since 2014 our brand has bent for
                                    an artistic project adapted to the shoe: The ARTY heel, a concept based on customization led to full power, where the custom can choose between different styles and drawn by our artistic team.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="card-group row m-0 p-3 w-100 pt-0">
                    <NavLink to="/Product" className="bg-white col-3 nav-link p-2 ">
                        <img src={categoryProduct1} className="card-img-top border " alt="shoe" />
                        <div className="card-body border border-top-0">
                            <h6 className="text-dark text-center">M17 INGLÉS BORDADO</h6>
                            <p className="text-danger text-center">195 EUR</p>
                        </div>
                    </NavLink>
                    <NavLink to="/Product" className="bg-white col-3 nav-link p-2">
                        <img src={categoryProduct2} className="card-img-top border" alt="shoe" />
                        <div className="card-body border border-top-0">
                            <h6 className="text-dark text-center">M19 BORD. CORD. II</h6>
                            <p className="text-danger text-center">215 EUR</p>
                        </div>
                    </NavLink>
                    <NavLink to="/Product" className="bg-white col-3 nav-link p-2 ">
                        <img src={categoryProduct3} className="card-img-top border" alt="shoe" />
                        <div className="card-body border border-top-0">
                            <h6 className="text-dark text-center">M42 LUNAS BORD.</h6>
                            <p className="text-danger text-center">200 EUR</p>
                        </div>
                    </NavLink>
                    <NavLink to="/Product" className="bg-white col-3 nav-link p-2">
                        <img src={categoryProduct5} className="card-img-top border" alt="shoe" />
                        <div className="card-body border border-top-0">
                            <h6 className="text-dark text-center">M18 BORD. CORDONERA</h6>
                            <p className="text-danger text-center">225 EUR</p>
                        </div>
                    </NavLink>
                    <NavLink to="/Product" className="bg-white col-3 nav-link p-2">
                        <img src={categoryProduct4} className="card-img-top border" alt="shoe"/>
                        <div className="card-body border border-top-0">
                            <h6 className="text-dark text-center">M73 CHOCOLATA</h6>
                            <p className="text-danger text-center">390 EUR</p>
                        </div>
                    </NavLink>
                    <NavLink to="/Product" className="bg-white col-3 nav-link p-2 ">
                        <img src={categoryProduct6} className="card-img-top border" alt="shoe" />
                        <div className="card-body text-black border border-top-0">
                            <h6 className="text-dark text-center">M20 BOTÍN BORDADO</h6>
                            <p className="text-danger text-center">200 EUR</p>
                        </div>
                    </NavLink>
                </div>


            </div>

        </div>
    )
}

export default CategoryPage