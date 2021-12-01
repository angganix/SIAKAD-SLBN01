import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Topnav from "./Topnav";
import Sidebar from "./Sidebar";

function Layout({ children, pageTitle = "" }) {
   return (
      <div className="min-vh-100">
         <div className="d-flex justify-content-between align-items-start">
            <Sidebar />
            <div className="content-wrapper w-100">
               <Container>
                  <Topnav pageTitle={pageTitle} />
                  <div className="p-4">
                     {children}
                  </div>
               </Container>
            </div>
         </div>
      </div>
   )
}

export default Layout
