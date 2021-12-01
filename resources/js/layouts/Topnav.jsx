import { Navbar, Container, Nav, NavDropdown, Modal } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import DataSearch from "../components/widgets/DataSearch";

function Topnav({ pageTitle }) {
   const [showSearch, setShowSearch] = useState(false);

   return (
      <Navbar bg="transparent" expand="lg">
         <Container className="pt-3 px-4">
            <NavLink to="/" className="navbar-brand">
               {pageTitle}
            </NavLink>

            <Navbar.Toggle aria-controls="top-nav-menu" />
            <Navbar.Collapse id="top-nav-menu">
               <Nav className="ms-auto">
                  <button className="btn btn-light-primary btn-sm me-2 shadow-none" onClick={() => setShowSearch(true)}>
                     <i className="fas fa-search fa-fw"></i>
                  </button>
                  <NavDropdown title="Administrator" id="data-master-nav" align="end">
                     <li>
                        <NavLink className="dropdown-item" exact to="/profil">
                           <span className="fas fa-user-circle fa-fw me-3"></span>
                           <span>Profil</span>
                        </NavLink>
                     </li>
                     <li>
                        <NavLink className="dropdown-item" exact to="/ganti-password">
                           <span className="fas fa-lock fa-fw me-3"></span>
                           <span>Ganti Password</span>
                        </NavLink>
                     </li>
                     <NavDropdown.Divider />
                     <li>
                        <NavLink className="dropdown-item text-danger" exact to="/logout">
                           <span className="fas fa-sign-out-alt fa-fw me-3"></span>
                           <span>Keluar</span>
                        </NavLink>
                     </li>
                  </NavDropdown>
               </Nav>
            </Navbar.Collapse>
            <Modal show={showSearch} onHide={() => setShowSearch(false)} centered>
               <Modal.Body>
                  <DataSearch closeSearch={() => setShowSearch(false)} />
               </Modal.Body>
            </Modal>
         </Container>
      </Navbar>
   )
}

export default Topnav
