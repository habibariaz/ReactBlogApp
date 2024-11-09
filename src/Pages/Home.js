import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
// import blog from '../Images/blog.png'
import blog1 from '../Images/blog1.jpg'
import blog2 from '../Images/blog2.jpg'
import blog3 from '../Images/blog3.jpg'
import '../Style/style.css'

const Home = () => {
    return (
        <>
            <div id='home-mainImg'>
                <div>
                    <Navbar />
                </div>
            </div>

            <div className="cardoverflow">
                <div className="row">
                    <div className="col-sm-3 mb-3 mb-sm-0">
                        <div className="card cardShadow">
                            <div className="card-body ">
                                <div className="text-center">
                                    <button className='btn btn-primary' style={{ width: "100%" }}>
                                        Create A Blog
                                    </button>
                                </div><br />
                                <div>
                                    <div className="list-group">
                                        <a href="#" className="list-group-item list-group-item-action">All Categories</a>
                                        <a href="#" className="list-group-item list-group-item-action">Music</a>
                                        <a href="#" className="list-group-item list-group-item-action">Movies</a>
                                        <a href="#" className="list-group-item list-group-item-action">Sports</a>
                                        <a href="#" className="list-group-item list-group-item-action">Tech</a>
                                        <a href="#" className="list-group-item list-group-item-action">Fashion</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-9">
                        <div className="card cards_border_none">
                            <div className="card-body ">
                                <div className="row">
                                    <div className="col-sm-4 mb-3 mb-sm-0">
                                        <div className="card cardShadow">
                                            <img src={blog1} alt="blog1" className='img-fluid' />
                                            <div className="text-center" >
                                                <br />
                                                <p style={{ margin: "0" }}>All</p>
                                                <h4>Testing Blog</h4>
                                                <p>Author: habibariaz</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-4">
                                        <div className="card cardShadow">
                                            <img src={blog2} alt="blog1" className='img-fluid' />
                                            <div className="text-center" >
                                                <br />
                                                <p style={{ margin: "0" }}>Sports</p>
                                                <h4>Testing Blog</h4>
                                                <p>Author: habibariaz</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-4">
                                        <div className="card cardShadow">
                                            <img src={blog3} alt="blog1" className='img-fluid' />
                                            <div className="text-center" >
                                                <br />
                                                <p style={{ margin: "0" }}>Movies</p>
                                                <h4>Testing Blog</h4>
                                                <p>Author: habibariaz</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" style={{ marginTop: "50px" }}>
                                    <div className="col-sm-4 mb-3 mb-sm-0">
                                        <div className="card cardShadow">
                                            <img src={blog3} alt="blog1" className='img-fluid' />
                                            <div className="text-center" >
                                                <br />
                                                <p style={{ margin: "0" }}>Movies</p>
                                                <h4>Testing Blog</h4>
                                                <p>Author: habibariaz</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-4">
                                        <div className="card cardShadow">
                                            <img src={blog1} alt="blog1" className='img-fluid' />
                                            <div className="text-center" >
                                                <br />
                                                <p style={{ margin: "0" }}>All</p>
                                                <h4>Testing Blog</h4>
                                                <p>Author: habibariaz</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-4">
                                        <div className="card cardShadow">
                                            <img src={blog2} alt="blog1" className='img-fluid' />
                                            <div className="text-center" >
                                                <br />
                                                <p style={{ margin: "0" }}>Sports</p>
                                                <h4>Testing Blog</h4>
                                                <p>Author: habibariaz</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: "100px" }}>
                <Footer />
            </div>
        </>
    )
}

export default Home