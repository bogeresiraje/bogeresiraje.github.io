
import React from 'react';
import Footer from './Footer';
import Header from './Header';


function Template({children}){
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}


export default Template;
