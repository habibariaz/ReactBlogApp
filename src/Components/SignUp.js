import React, { useState } from 'react'
import '../Style/style.css'
import blog_logo from '../Images/blog.png'





const SignUp = () => {

    const [account, toogleAccount] = useState('SignUp');

    const toogleSignup = () => {
        account === 'SignUp' ? toogleAccount('Login') : toogleAccount('SignUp');
    }


    return (
        <>
            {
                account === 'SignUp' ?
                    <div className="row" style={{ margin: "0" }}>
                        <div className="col-sm-4 mb-3 mb-sm-0 registration_topmargin">
                            <div className="card cards_border_none">
                            </div>
                        </div>
                        <div className="col-sm-4 registration_topmargin" >
                            <div className="card registration_card_shadow ">
                                <div className="card-body">
                                    <div className="text-center">
                                        <img className='registration_logo' src={blog_logo} alt="SignUp" />
                                    </div>
                                    <div className='registrationInputs_padding'>
                                        <div >
                                            <input type="text" name="name" className='form-control input-underline' placeholder='Enter Name' />
                                        </div><br />
                                        <div>
                                            <input type="text" name="username" className='form-control input-underline' placeholder='Enter Username' />
                                        </div><br />
                                        <div>
                                            <input type="password" name="password" className='form-control input-underline' placeholder='Enter Password' />
                                        </div><br />
                                        <div className="text-center">
                                            <button type="button" className="btn btn-danger registrationBtn">SignUp</button>
                                        </div>
                                        <div className="text-center">
                                            <p style={{ color: "grey", paddingTop: "10px" }}>OR</p>
                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-secondary registrationBtn" onClick={() => { toogleSignup() }}>Already Account</button>
                                        </div><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 registration_topmargin">
                            <div className="card cards_border_none">
                            </div>
                        </div>
                    </div>
                    :
                    <div className="row" style={{ margin: "0" }}>
                        <div className="col-sm-4 mb-3 mb-sm-0 registration_topmargin">
                            <div className="card cards_border_none">
                            </div>
                        </div>
                        <div className="col-sm-4 registration_topmargin  " >
                            <div className="card registration_card_shadow">
                                <div className="card-body">
                                    <div className="text-center">
                                        <img className='registration_logo' src={blog_logo} alt="SignUp" />
                                    </div>
                                    <div className='registrationInputs_padding'>
                                        <div>
                                            <input type="text" name="username" className='form-control input-underline' placeholder='Enter Username' />
                                        </div><br />
                                        <div>
                                            <input type="password" name="password" className='form-control input-underline' placeholder='Enter Password' />
                                        </div><br />
                                        <div className="text-center">
                                            <button type="button" className="btn btn-danger registrationBtn">Login</button>
                                        </div>
                                        <div className="text-center">
                                            <p style={{ color: "grey", paddingTop: "10px" }}>OR</p>
                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-secondary registrationBtn" onClick={() => { toogleSignup() }}>Create An Account</button>
                                        </div><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 registration_topmargin">
                            <div className="card cards_border_none">
                            </div>
                        </div>
                    </div>
            }

        </>
    )
}

export default SignUp