
import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
    return (   
        <header>
            <div className="header-area header-transparent">
            <div className="main-header  header-sticky">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-2 col-md-1">
                            <div className="logo">
                                <a href="/">BOGERE SIRAJE</a>
                            </div>
                        </div>

                        <div className="col-xl-10 col-lg-10 col-md-10">
                            <div className="menu-main d-flex align-items-center justify-content-end">
                                <div className="main-menu f-right d-none d-lg-block">
                                    <nav> 
                                        <ul id="navigation">
                                            <li> <Link to="/">Home</Link></li>
                                            <li> <Link to="/services">Services</Link> </li>
                                            <li> <Link to="/technologies">Tehnologies</Link> </li>
                                        </ul>
                                    </nav>
                                </div>

                                <div className="header-right-btn f-right d-none d-lg-block ml-20">
                                    <a href="Tel:+256770703204" className="btn header-btn">Call Now</a>
                                </div>
                            </div>
                        </div>   

                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </header>
    )
}

export default Header;
