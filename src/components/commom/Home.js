
import React from 'react';
import { technologies } from '../../utils/technologies';
import Template from './Template';



function Home(){
    
    return (
        <Template>

            <main>
                <div className="slider-area ">
                    <div className="slider-active">
                        <div className="single-slider slider-height d-flex align-items-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-7 col-md-8">
                                        <div className="hero__caption">
                                            <span data-animation="fadeInUp" data-delay=".4s">BOGERE SIRAJE</span>
                                            <h1 data-animation="fadeInUp" data-delay=".6s">Automate Your Business Processes With Software Systems.</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-man">
                                <img src="assets/img/hero/hero_man1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="about-area about1 section-padding30">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-5 col-lg-6">
                                <div className="about-caption2 mb-50">
                                    <h3>HOW I MAKE USER EXPERIENCES</h3>
                                    <div className="send-cv">
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5">
                                <div className="about-caption mb-50">
                                    <h3>You can’t use up creativity. The more you use, the
                                        more you have in your signifant mind.</h3>
                                    <div className="experience">
                                        <div className="year">
                                            <span>01</span>
                                        </div>
                                        <div className="year-details"><p>YEARS OF SOFTWARE DEVELOPMENT</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-shape d-none d-xl-block">
                        <img src="assets/img/gallery/about_shape.png" alt=""/>
                    </div>
                </section>

                <section className="home-blog-area section-padding30">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-team mb-30">
                                    <div className="team-img">
                                        <img style={{height:300}} src={require('../../resources/img/api.jpeg')} alt=""/>
                                    </div>
                                    <div className="team-caption">
                                        <h3><a href="services.html">API Development</a></h3>
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
                                        <h3><a href="services.html">Mobile App Development</a></h3>
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
                                        <h3><a href="services.html">Web App Development</a></h3>
                                        {/* <p>Duis aute irure dolor in repr/ehenderit in voluptate velit.</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="brand-area pb-bottom section-padding30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-tittle mb-30">
                                    <h2>Programming languages and frameworks that I use.</h2>
                                </div>
                            </div>
                            {
                                technologies.map(tech => (
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <div className="single-brand text-center mb-30">
                                            <img style={{width:200, height: 200}} src={`assets/img/tech/${tech.image}`} alt=""/>
                                            <p>{tech.title}</p>
                                        </div>
                                    </div>
                                ))
                            }
                              
                        </div>
                    </div>
                    <div className="brand-shape d-none d-lg-block">
                        <img src="assets/img/gallery/brand_shape.png" alt=""/>
                    </div>
                </section>
{/* 
                <div className="testimonial-area testimonial-padding">
                    <div className="container ">
                        <div className="row d-flex justify-content-center">
                            <div className="col-xl-11 col-lg-11 col-md-9">
                                <div className="h1-testimonial-active">
                                    <div className="single-testimonial text-center">
                                        <div className="testimonial-caption ">
                                            <div className="testimonial-top-cap">
                                                <img src="assets/img/gallery/testimonial.png" alt=""/>
                                                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis por incididunt ut labore et dolore mas. </p>
                                            </div>
                                            <div className="testimonial-founder d-flex align-items-center justify-content-center">
                                                <div className="founder-img">
                                                    <img src="assets/img/gallery/Homepage_testi.png" alt=""/>
                                                </div>
                                                <div className="founder-text">
                                                    <span>Jessya Inn</span>
                                                    <p>Chif Photographer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-testimonial text-center">
                                        <div className="testimonial-caption ">
                                            <div className="testimonial-top-cap">
                                                <img src="assets/img/gallery/testimonial.png" alt=""/>
                                                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis por incididunt ut labore et dolore mas. </p>
                                            </div>
                                            <div className="testimonial-founder d-flex align-items-center justify-content-center">
                                                <div className="founder-img">
                                                    <img src="assets/img/gallery/Homepage_testi.png" alt=""/>
                                                </div>
                                                <div className="founder-text">
                                                    <span>Jessya Inn</span>
                                                    <p>Chif Photographer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

            </main>

            <div id="back-top" >
                <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
            </div>
        </Template>
    );
}


export default Home;
