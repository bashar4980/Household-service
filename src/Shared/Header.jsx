import React from 'react';
import {Navbar, Button} from "flowbite-react";
import { Link } from 'react-router-dom';
import './Shared.css'

const Header = () => {
    return (
        <Navbar  className=' border-b border-gray-200 dark:border-gray-600'
  fluid={false}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Button>
      Get started
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse >
  <Link  to="/">Home</Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
   <Link to="/services">Services</Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
    );
};

export default Header;