import '../Assets/index.css';
import { NavLink } from 'react-router-dom';
import carouselItem1 from '../Assets/Images/carousel-1.jpg';
import carouselItem2 from '../Assets/Images/carousel-2.jpg';
import carouselItem3 from '../Assets/Images/carousel-3.jpg';
import category1 from '../Assets/Images/category-classic.jpg';
import category2 from '../Assets/Images/category-embroidered.jpg';
import category3 from '../Assets/Images/category-men.jpg';
import category4 from '../Assets/Images/category-new.jpg';
import category5 from '../Assets/Images/category-heel.jpg';
import category6 from '../Assets/Images/category-elastic.jpg';
import pretty from '../Assets/Images/pretty.png';


function HomePage() {

    return (
        <div className="">
            <div id="carouselExampleFade" className="carousel slide carousel-fade p-0 m-0 w-100" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <NavLink className="nav-link align-self-end p-0 " to="/Categories"><img className="w-100" src={carouselItem1} alt="shoe"></img> </NavLink>
                    </div>
                    <div className="carousel-item">
                        <NavLink className="nav-link align-self-end p-0 " to="/Categories"><img className="w-100" src={carouselItem2} alt="shoe"></img> </NavLink>

                    </div>
                    <div className="carousel-item">
                        <NavLink className="nav-link align-self-end p-0 " to="/Categories"><img className="w-100" src={carouselItem3} alt="shoe"></img> </NavLink>

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="row m-0 p-0 text-center">
                <div className="col m-3">
                    <h3 className="text-white"><span><img alt="logo" src={pretty}></img></span> Categories <img alt="shoe" className="pretty-left" src={pretty}></img></h3>
                </div>
            </div>
            <div className="row pb-5 mb-5 w-100 ms-0">
                <div className="col-6 col-md-2   p-0 m-0">
                    <div className="card bg-dark text-white">
                        <NavLink to="/Category">
                            <img alt="shoe" className="img-fluid rounded-start" src={category4}></img>
                            <div className="card-img-overlay text-white d-flex p-0">
                                <h3 className="card-title text-center align-self-center w-100  category-title">New</h3>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="col-6 col-md-2  p-0 m-0">
                    <div className="card bg-dark text-white">
                        <NavLink exact to="/Category">
                            <img alt="shoe" className="img-fluid" src={category1}></img>
                            <div className="card-img-overlay text-white d-flex p-0">
                                <h3 className="card-title text-center align-self-center w-100  category-title">Classic</h3>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="col-6 col-md-2   p-0 m-0">
                    <div className="card bg-dark text-white">
                        <NavLink to="/Category">
                            <img alt="shoe" className="img-fluid" src={category2}></img>
                            <div className="card-img-overlay text-white d-flex p-0">
                                <h3 className="card-title text-center align-self-center w-100  category-title">Embroidered</h3>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="col-6 col-md-2    p-0  m-0">
                    <div className="card bg-dark text-white">
                        <NavLink to="/Category">
                            <img alt="shoe" className="img-fluid" src={category5}></img>
                            <div className="card-img-overlay text-white d-flex p-0">
                                <h3 className="card-title text-center align-self-center w-100  category-title">Painted heel</h3>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="col-6 col-md-2   p-0  m-0">
                    <div className="card bg-dark text-white">
                        <NavLink to="/Category">
                            <img alt="shoe" className="img-fluid" src={category6}></img>
                            <div className="card-img-overlay text-white d-flex p-0">
                                <h3 className="card-title text-center align-self-center w-100  category-title">Elastic</h3>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="col-6 col-md-2   p-0  m-0">
                    <div className="card bg-dark text-white">
                        <NavLink to="/Category">
                            <img alt="shoe" className="img-fluid" src={category3}></img>
                            <div className="card-img-overlay text-white d-flex p-0">
                                <h3 className="card-title text-center align-self-center w-100  category-title">Men</h3>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePage