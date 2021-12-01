import sidebarMenu from '../data/sidebar-menu';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Sidebar() {
   return (
      <aside className="sidebar position-fixed top-0 left-0 min-vh-100">
         <div className="sidebar-header d-flex justify-content-start align-items-center p-3 py-4">
            <div className="me-3">
               <img src="/images/logo.png" alt="" className="img-fluid" style={{ width: 45 }} />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-start pt-2">
               <h5 className="fs-6">SLB N 01 JAKARTA</h5>
               <h6 className="fw-light" style={{ fontSize: 14 }}>Administrator</h6>
            </div>
         </div>
         <div className="sidebar-content">
            <Nav defaultActiveKey="/" className="flex-column">
               {sidebarMenu.map((item, idx) => (
                  item.header ? (
                     <li key={idx} className="nav-item mt-4">
                        <span className="sidebar-item-header">{item.title}</span>
                     </li>
                  ) : item.separator ? (
                     <li key={idx} className="nav-item">
                        <div className="dropdown-divider"></div>
                     </li>
                  ) : (
                     <li key={idx} className="nav-item">
                        <NavLink
                           to={item.path}
                           exact
                           activeClassName="active"
                           className="nav-link d-flex justify-content-start align-items-center py-2"
                        >
                           <span className={`me-3 ${item.icon}`}></span>
                           <span>{item.title}</span>
                        </NavLink>
                     </li>
                  )
               ))}
            </Nav>
         </div>
      </aside>
   )
}

export default Sidebar
