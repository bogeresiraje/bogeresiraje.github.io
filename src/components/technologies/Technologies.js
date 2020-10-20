
import React from 'react';
import { technologies } from '../../utils/technologies';
import Template from '../commom/Template';


function Technologies(){
    return (
        <Template>
            <main> 
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
            </main>
        </Template>
    )
}


export default Technologies;
