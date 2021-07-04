import TextInput from '../Components/TextInput';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';



function CartAddress() {

    // const [password1, setPassword1] = useState('')

    // const SavePassword1 = (event) => {
    //     let password1new = event.target.value;
    //     setPassword1(password1new);
    //     console.log(password1new)
    // }

    // const [value, setValue] = useState('')

    // const updateValue = (value) => {
    //     setValue(value);
    // }
    


    let [registerInput, setRegisterInput] = useState('');

    const handleChange = () => {
        if (registerInput === '') {
            setRegisterInput(
                <div>
                    <div className="col-md-4" >
                        <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationCustomPassword" className="form-label">Password</label>
                        <div className="input-group has-validation">

                            <input  value='' type="password" className="form-control" id="validationCustomPassword" aria-describedby="inputGroupPrepend" required />
                            <div className="invalid-feedback">
                                Please enter a password.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationCustomPassword" className="form-label">Confirm password</label>
                        <div className="input-group has-validation">
                           
                            <input type="password" className="form-control" id="validationCustomPassword" aria-describedby="inputGroupPrepend" required />
                            <div className="invalid-feedback">
                                Please enter a password.
                            </div>

                        </div>
                    </div>
                </div>
            )
        } else {
            setRegisterInput('')
        }

    }





    return (
        <div className="me-5 ms-5" >
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
                        <NavLink className=" nav-link bg-dark border-light text-muted" aria-current="page" to="/CartProducts"> Products </NavLink>
                    </li>
                    <li className="nav-item bg-dark me-2 ms-2">
                        <NavLink className=" nav-link border-white" aria-current="page" to="/CartAddress"> Address </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link bg-dark border-light text-muted" aria-current="page" to="/CartSummary"> Summary </NavLink>
                    </li>
                </ul>
            </div>
            <div className="bg-white row d-flex align-items-center g-0 p-3 border border-top-0 mb-5">
                <div className="col m-3">
                    <div className="row">
                        <form className="row g-3 needs-validation" validate>
                            <div className="col-md-4">
                                <label htmlFor="name" className="form-label">First name</label>
                                <input type="text" className="form-control" id="validationCustom01" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="surname" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="validationCustom02" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4">

                            </div>
                            <div className="col-md-6">
                                <label htmlFor="address" className="form-label">Street address</label>
                                <input type="text" className="form-control" id="validationCustom03" required />
                                <div className="invalid-feedback">
                                    Please provide a valid address.
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="City" className="form-label">City</label>
                                <input type="text" className="form-control" id="validationCustom04" required />
                                <div className="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="State" className="form-label">State</label>
                                <select className="form-select" id="validationCustom05" required>
                                    <option defaultValue disabled value="">Choose...</option>
                                    <option>LV</option>
                                    <option>LT</option>
                                    <option>EST</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid state.
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="validationCustom05" className="form-label">Zip</label>
                                <input type="text" className="form-control" id="validationCustom06" required />
                                <div className="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="phone" className="form-label">Phone number</label>
                                <div className="input-group has-validation">
                                    <input type="text" className="form-control" id="validationCustom07" aria-describedby="inputGroupPrepend" required />
                                    <div className="invalid-feedback">
                                        Please enter a phone number.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="validationCustomPassword" className="form-label">Email address</label>
                                <div className="input-group has-validation">
                                    <input type="text" className="form-control" id="validationCustom08" aria-describedby="inputGroupPrepend" required />
                                    <div className="invalid-feedback">
                                        Please enter an email.
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <button className="btn text-white btn-warning" type="button" value="Input" onClick={handleChange}>Register</button>
                                </div>

                            </div>
                            <div>
                                {registerInput}
                            </div>

                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label" htmlFor="invalidCheck">
                                        Agree to terms and conditions
                                    </label>
                                    <div className="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn text-white btn-warning" type="submit">Save address</button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>

        </div>
    )
}


export default CartAddress