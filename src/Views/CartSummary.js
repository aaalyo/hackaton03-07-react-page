import { NavLink } from 'react-router-dom';
import product1 from '../Assets/Images/product-1.jpg';
import product2 from '../Assets/Images/product-2.jpg';
import product3 from '../Assets/Images/product-3.jpg';



function CartSummary() {


    const products = [
        {
            quantity: 1,
            image: product1,
            name: 'M71 GOYA',
            price: 190
        },
        {
            quantity: 2,
            image: product2,
            name: 'M17 INGLÉS BORDADO',
            price: 215
        },

        {
            quantity: 1,
            image: product3,
            name: 'M84 GUATINÉ II',
            price: 235
        }
    ];

    const address = 
        {
            name: 'Alona',
            surname: 'Tarasova',
            streetAddress: 'Lienes 12/3-85',
            city: 'Riga',
            state: 'LV',
            zip: 'LV-1079',
            phone: '23233333',
            email: 'alo@alo.lv'
        }
       
    ;


    let productsList = products.map((product) => {

        return (

            <div className="bg-white row d-flex align-items-center g-0 border border-top-0" >

                <div className="col col-md-2">
                    <div className="nav-link" ><img alt="shoe" className=" img-fluid" src={product.image}></img> </div>
                </div>

                <div className="col text-start">
                    <span className="card-title ">{product.name}</span>
                </div>
                <div className="col  text-center">

                    <span className="fs-5 m-2"> {product.quantity} </span>

                </div>
               
                <div className="col text-center">
                    <span className="fs-6">{product.price * product.quantity}<span> EUR</span></span>
                </div>
                
            </div>
        )

    })

    if (products.length === 0) {
        productsList = (<div className="bg-white row d-flex align-items-center g-0 border text-center"><h3 className="text-danger p-3">Cart is empty</h3></div>)
    }


    return (
        <div className="me-5 ms-5 mb-5">
            <div className="m-3">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink className="text-white" aria-current="page" exact to="/"> Home </NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">Cart</li>
                    </ol>
                </nav>
            </div>
            <div>
                <h3 className="text-white m-3">Cart</h3>
            </div>
            <div>
                <ul className="nav nav-tabs border-dark">
                    <li className="nav-item">
                        <NavLink className="nav-link bg-dark border-light text-muted" aria-current="page" to="/CartProducts"> Products </NavLink>
                    </li>
                    <li className="nav-item bg-dark me-2 ms-2">
                        <NavLink className="nav-link bg-dark border-light text-muted" aria-current="page" to="/CartAddress"> Address </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link border-white" aria-current="page" to="/CartSummary"> Summary </NavLink>
                    </li>
                </ul>
            </div>
            <div className="bg-white row d-flex align-items-center g-0 p-3 border border-top-0" >
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <span className="fs-6 text-center"> Shipping address </span>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col col-md-2">
                            </div>
                            <div className="col text-start">
                                <span className="card-title ">Product</span>
                            </div>
                            <div className="col  text-end">
                                <span className="fs-6 m-2"> Quantity </span>
                            </div>
                            
                            <div className="col  text-end">
                                <span className="fs-6">Sum</span>
                            </div>                            
                        </div>
                    </div>
                </div>

            </div>
            <div className="row bg-white d-flex align-items-center g-0 p-0">
                <div className="col-12 col-md-6 bg-white m-0 p-0 text-center">
                    <h4>{address.name}<span> {address.surname}</span></h4>
                    <div>{address.streetAddress}</div>
                    <div>{address.city},<span> {address.state}</span></div>
                    <div>{address.zip}</div>
                    <div>{address.phone}</div>
                    <div>{address.email}</div>
                    
                </div>
                <div className="col-12 col-md-6  m-0 p-0">
                    {productsList}
                </div>

            </div >

            <div className="bg-white row d-flex align-items-center g-0 p-2 mb-5" >
                <div className="row">                   
                    <div className="col  text-end">
                    <button className="btn text-white btn-warning  fs-4 me-5" type="submit">Go to payment</button>
                        <span className="fs-5">{products.reduce((sum, product) => sum + product.price * product.quantity, 0)}<span> EUR</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartSummary