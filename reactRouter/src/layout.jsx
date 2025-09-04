import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom"; 

function Layout(){
    return (
        <>
        <Header/>
        {/* It will freeze the header and footer and move the center part  */}
        {/* it depends where we are placing Outlet in the line */}
        <Outlet/>   
        <Footer/>
        </>
    )
}

export default Layout