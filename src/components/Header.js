import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./header.css";


function Header() {
    return (
      <>
      <Navbar collapseOnSelect expand="lg"   style={{display:'flex',justifyContent:'space-between' ,paddingRight:"50px",paddingLeft:"50px" ,backgroundColor:'darkgreen' }}>
        <Navbar.Brand style={{color:"white" ,fontSize:"26px"  }} > Favorite Image</Navbar.Brand>
        <div className='headernav'>
        <NavItem><Link to="/" className="nav-link"  style={{ color:"white",paddingRight:"20px" }}>Home</Link></NavItem>
        <NavItem><Link to="/About" className="nav-link" style={{ color:"white"}}>About</Link></NavItem>


         </div>
      </Navbar>
      </>
    );
  }
  
  export default Header;
  