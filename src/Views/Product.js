import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import product2 from '../Assets/Images/product-2.jpg';
import product2a from '../Assets/Images/product-2-2.jpg';
import product2b from '../Assets/Images/product-2-3.jpg';
import product2c from '../Assets/Images/product-2-4.jpg';

function Product() {
    const [image, setImage] = useState(product2);
    const imageArray = [product2, product2a, product2b, product2c];
    const loadImage = (event) => {
        setImage(event.target.src)
    };
    const arrayList = imageArray.map((image) => {
        return (
            <div className="col w-100 p-0"><img onClick={loadImage} className="img-fluid" src={image} alt="shoe" /></div>
            )
    });


    let [quantity, setQuantity] = useState(1);
    const addQty = () => {
        setQuantity(quantity += 1);
    };
    const removeQty = () => {
        if (quantity > 0) {
            setQuantity(quantity -= 1);
        };
    };


    let [addedPopover, setaddedPopover] = useState('');
    const handleChange = () => {
        if (addedPopover === '') {
            setaddedPopover(
                <span className="ms-4 alert alert-warning" role="alert">
                    Added to cart!
                    <NavLink className="text-white" aria-current="page" exact to="/CartProducts"><button className='btn btn-warning m-2 text-white'>Go to cart</button></NavLink>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </span>
            )
        } else {
            return
        }

    };


    return (
        <div className=" bg-white m-0 p-0 w-100 mb-5">
            <div className="row m-0 p-0 w-100">
                <div className="col-12 col-md-3">
                    <div className="row">
                        <div className="col p-0">
                            <img className="img-fluid" src={image} alt="cat" />
                        </div>
                    </div>
                    <div className="row">
                        {arrayList}
                    </div>
                </div>
                <div className="col-12 col-md-9 p-0">
                    <div className="row m-0 p-0 ">
                        <h2 className="p-3 m-0">M17 INGLÉS BORDADO</h2>
                        <h6> Category: 
                        <NavLink className="text-dark" aria-current="page" exact to="/Category"><span className='ms-2'>Embroidered</span></NavLink>
                        </h6>
                       
                    </div>
                    <div className="m-3 p-0">
                        <select className="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                            <option disabled selected>Select shoe size</option>
                            <option value="1">35</option>
                            <option value="2">36</option>
                            <option value="3">37</option>
                            <option value="3">38</option>
                            <option value="3">39</option>
                            <option value="3">40</option>
                            <option value="3">41</option>
                        </select>
                    </div>
                    <div className="m-3 p-0">
                        <select className="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                            <option disabled selected>Select shoe color</option>
                            <option value="1">Agapanto</option>
                            <option value="2">Armagnac</option>
                            <option value="3">Beige</option>
                            <option value="3">White</option>
                            <option value="3">Caldera</option>
                            <option value="3">Chino</option>
                            <option value="3">Dante</option>
                        </select>
                    </div>
                    <div className="m-3 p-0">
                        <select className="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                            <option disabled selected>Select shoe MATERIAL</option>
                            <option value="1">Ante</option>
                            <option value="2">Box</option>
                            <option value="3">Charol</option>
                            <option value="3">Coco</option>
                        </select>
                    </div>
                    <div className="m-3 p-0">
                        <select className="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                            <option disabled selected>Select shoe HEEL</option>
                            <option value="1">Alto (7cms)</option>
                            <option value="2">Carrete Bajo (5 cms)</option>
                            <option value="3">Cubano (5cm)</option>
                            <option value="3">BBB (3 cms)</option>
                        </select>
                    </div>
                    <div className="m-3 p-0">
                        <select className="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                            <option disabled selected>Select shoe HEEL STYLE</option>
                            <option value="1">Forrado al tono</option>
                            <option value="2">Lacado</option>
                            <option value="3">Lacado oscuro</option>
                            <option value="3">Lacado pintado</option>
                        </select>
                    </div>
                    <div className="row m-3">
                        <h3 className="text-danger m-3 col-12">195 EUR</h3>
                        <div className="col-12 col-md-3">
                            <button onClick={addQty} type="button" className="btn btn-outline-secondary m-1">+</button>
                            <span className="fs-5 m-2"> {quantity} </span>
                            <button onClick={removeQty} type="button" className="btn btn-outline-secondary m-1">-</button>
                        </div>
                        <div className="col-12 col-md-3">
                            <button onClick={handleChange} className='btn btn-warning m-1 text-white'>Add to cart</button>
                        </div>
                        <div className="col-12 col-md-6">
                            <span className=''>{addedPopover}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product