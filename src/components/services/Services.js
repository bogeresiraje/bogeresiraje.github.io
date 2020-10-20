
import React from 'react';
import Template from '../commom/Template';


function Services(){
    return (
        <Template>
            <main>
                <section className="home-blog-area section-padding30">
                    <h1 style={{textAlign:'center', padding: 20}}>SERVICES</h1>

                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-team mb-30">
                                    <div className="team-img">
                                        <img style={{height:300}} src={require('../../resources/img/api.jpeg')} alt=""/>
                                    </div>
                                    <div className="team-caption">
                                        <h3><a href="/services">API Development</a></h3>
                                        {/* <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-team mb-30">
                                    <div className="team-img">
                                        <img style={{height:300}} src={require('../../resources/img/mobileapp.webp')} alt=""/>
                                    </div>
                                    <div className="team-caption">
                                        <h3><a href="/services">Mobile App Development</a></h3>
                                        {/* <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-team mb-30">
                                    <div className="team-img">
                                        <img style={{height:300}} src={require('../../resources/img/web.jpg')} alt=""/>
                                    </div>
                                    <div className="team-caption">
                                        <h3><a href="/services">Web App Development</a></h3>
                                        {/* <p>Duis aute irure dolor in repr/ehenderit in voluptate velit.</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Template>
    )
}


export default Services;
