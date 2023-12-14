import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar className="bg-info">
        <Container>
          <Navbar.Brand  className="fs-3"><Link to={''} className="text-decoration-none text-black">Employee Desk</Link></Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
