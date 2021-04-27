import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout(props){
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <div className="Main__content">

            </div>
            {props.children}
            <Footer></Footer>
        </React.Fragment>
    );
}

export default Layout;