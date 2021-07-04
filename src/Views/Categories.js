import { NavLink } from 'react-router-dom';
import category1 from '../Assets/Images/category-classic.jpg';
import category2 from '../Assets/Images/category-embroidered.jpg';
import category3 from '../Assets/Images/category-men.jpg';
import category4 from '../Assets/Images/category-new.jpg';
import category5 from '../Assets/Images/category-heel.jpg';
import category6 from '../Assets/Images/category-elastic.jpg';

function CategoriesPage() {

    return (
        <div className="me-5 ms-5">
            <div className="m-3">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink className="text-white" aria-current="page" exact to="/"> Home </NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">Categories</li>
                    </ol>
                </nav>
            </div>
            <div>
                <h3 className="text-white m-3">Categories</h3>
            </div>
            <div className="row mb-5 pb-3">
                <NavLink to="/Category" className="col-6 m-0 p-0 nav-link">
                    <div className=" bg-black h-100">
                        <div className="row g-0 ">
                            <div className="col-md-4">
                                <img src={category1} className="img-fluid" alt="shoe" />
                            </div>
                            <div className="col-md-8 ">
                                <div className="card-body h-100 m-0 p-0 d-flex">
                                    <h4 className="card-title bg-card align-self-center text-center text-dark w-100">Classic shoes</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink to="/Category" className="col-6 m-0 p-0 nav-link">
                    <div className="bg-black h-100 ">
                        <div className="row g-0 ">
                            <div className="col-md-4">
                                <img src={category4} className="img-fluid" alt="shoe" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body h-100 m-0 p-0 d-flex">
                                    <h3 className="card-title bg-card align-self-center text-center text-dark w-100">New shoes</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </NavLink>
                <NavLink to="/Category" className="col-6 m-0 p-0 nav-link">
                    <div className="bg-black h-100 ">
                        <div className="row g-0 ">
                            <div className="col-md-8">
                                <div className="card-body h-100 m-0 p-0 d-flex">
                                    <h3 className="card-title bg-card align-self-center text-center text-dark w-100">Shoes with painted heel</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src={category5} className="img-fluid" alt="shoe" />
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink to="/Category" className="col-6 m-0 p-0 nav-link">
                    <div className="bg-black h-100">
                        <div className="row g-0 ">

                            <div className="col-md-8">
                                <div className="card-body h-100 m-0 p-0 d-flex">
                                    <h1 className="card-title bg-card align-self-center text-center text-dark w-100">Embroidered shoes</h1>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src={category2} className="img-fluid" alt="shoe" />
                            </div>

                        </div>
                    </div>
                </NavLink>
                <NavLink to="/Category" className="col-6 m-0 p-0 nav-link">
                    <div className="bg-black h-100">
                        <div className="row g-0 ">
                            <div className="col-md-4">
                                <img src={category6} className="img-fluid" alt="shoe" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body h-100 m-0 p-0 d-flex">
                                    <h3 className="card-title bg-card align-self-center text-center text-dark w-100">Shoes with elastic bands</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink to="/Category" className="col-6 m-0 p-0 nav-link">
                    <div className="bg-black h-100">
                        <div className="row g-0 ">
                            <div className="col-md-4">
                                <img src={category3} className="img-fluid" alt="shoe" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body h-100 m-0 p-0 d-flex">
                                    <h4 className="card-title bg-card align-self-center text-center text-dark w-100">Shoes for men</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default CategoriesPage