import React from 'react'
import Logo from "./navbar/Logo.jsx"
import { Navbar } from "flowbite-react";

const NavbarComponent = () => {
  return (
    <div className=" bg-primary">
      <Navbar className=" bg-primary">
        <div className=" h-12 flex justify-between items-center bg-white w-full">
          <div className="">
            <Navbar.Brand>
              <div className=" w-32 h-full">
                <Logo />
              </div>
            </Navbar.Brand>
          </div>
          <div className="">
            <Navbar.Collapse>
              <Navbar.Link href="#" active>
                Home
              </Navbar.Link>
              <Navbar.Link href="#">About</Navbar.Link>
              <Navbar.Link href="#">Services</Navbar.Link>
              <Navbar.Link href="#">Pricing</Navbar.Link>
              <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
          </div>
        </div>
        <Navbar.Toggle />
      </Navbar>
    </div>
  );
};

export default NavbarComponent