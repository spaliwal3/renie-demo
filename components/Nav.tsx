"use client";

import { Button, Navbar } from "flowbite-react";

const Nav = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://renie.io">
        <img src="/logo.svg" className="mr-3 h-6 sm:h-9" alt="Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button pill gradientDuoTone="purpleToBlue">Contact Us</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>Home</Navbar.Link>
        <Navbar.Link href="#">Renie Bins</Navbar.Link>
        <Navbar.Link href="#">Renie Hub</Navbar.Link>
        <Navbar.Link href="#">Renie App</Navbar.Link>
        <Navbar.Link href="#">Ads that matter</Navbar.Link>
        <Navbar.Link href="#">About us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;

