import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import product1 from '../Assets/Images/product-1.jpg';
import product2 from '../Assets/Images/product-2.jpg';
import product3 from '../Assets/Images/product-3.jpg';



function CartProducts() {
    const [products, setProducts] = useState([
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
    ]);

    const addQty = (key) => {
        const newProducts = [...products];
        newProducts[key]['quantity'] += 1;
        setProducts(newProducts);
    }

    const removeQty = (key) => {
        const newProducts = [...products];
        if (newProducts[key]['quantity'] > 0) {
            newProducts[key]['quantity'] -= 1;
            setProducts(newProducts)
        };
    };

    const removeItem = (key) => {
        const newProducts = [...products];
        newProducts.splice(key, 1);
        setProducts(newProducts);
        console.log(newProducts);
    }

    let productsList = products.map((product, key) => {

        return (

            <div className="bg-white row d-flex align-items-center g-0 border" >

                <div className="col-4 col-md-1">
                    <NavLink className="nav-link" to=""><img alt="shoe" className=" img-fluid" src={product.image}></img> </NavLink>
                </div>

                <div className="col-4 col-md-3 text-center">
                    <span className="card-title ">{product.name}</span>
                </div>
                <div className="col-4 col-md-2  text-center">
                    <button onClick={() => addQty(key)} type="button" className="btn btn-outline-secondary m-1">+</button>
                    <span className="fs-5 m-2"> {product.quantity} </span>
                    <button onClick={() => removeQty(key)} type="button" className="btn btn-outline-secondary m-1">-</button>
                </div>
                <div className="col-4 col-md-2  text-center">
                    <span className="fs-6">{product.price}<span> EUR</span></span>
                </div>
                <div className="col-4 col-md-2  text-center">
                    <span className="fs-6">{product.price * product.quantity}<span> EUR</span></span>
                </div>
                <div className="col-4 col-md-2 text-center">
                    <button onClick={() => removeItem(key)} className="btn btn-warning m-1">Remove</button>
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
                        <NavLink className="nav-link border-white" aria-current="page" to="/CartProducts"> Products </NavLink>
                    </li>
                    <li className="nav-item bg-dark me-2 ms-2">
                        <NavLink className="nav-link bg-dark border-light text-muted" aria-current="page" to="/CartAddress"> Address </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link bg-dark border-light text-muted" aria-current="page" to="/CartSummary"> Summary </NavLink>
                    </li>
                </ul>
            </div>
            <div className="bg-white row d-flex align-items-center g-0 p-3" >
                <div className="col-4 col-md-1">
                </div>
                <div className="col-4 col-md-3 text-center">
                    <span className="card-title ">Product</span>
                </div>
                <div className="col-4 col-md-2  text-center">
                    <span className="fs-6 m-2"> Quantity </span>
                </div>
                <div className="col-4 col-md-2  text-center">
                    <span className="fs-6">Price</span>
                </div>
                <div className="col-4 col-md-2  text-center">
                    <span className="fs-6">Sum</span>
                </div>
                <div className="col-4 col-md-2 text-center">

                </div>
            </div>
            {productsList}
            <div className="bg-white row d-flex align-items-center g-0 p-1" >
                <div className="col-4 col-md-1">
                </div>
                <div className="col-4 col-md-3 text-center">
                </div>
                <div className="col-4 col-md-2  text-center">
                </div>
                <div className="col-4 col-md-2  text-end">
                    <span className="fs-6 ">Order sum: </span>
                </div>
                <div className="col-4 col-md-2  text-center">
                    <span className="fs-5">{products.reduce((sum, product) => sum + product.price * product.quantity, 0)}<span> EUR</span></span>
                </div>
                <div className="col-4 col-md-2 text-center">
                </div>
            </div>


        </div>
    )
}

export default CartProducts