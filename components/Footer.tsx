"use client";

import { Footer } from "flowbite-react";

const SimpleFooter = () => {
    return (
      <Footer container>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              href="https://renie.io"
              src="/logo.svg"
              alt="Renie Logo"
            />
            <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms of use</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="Renie" year={2024} />
        </div>
      </Footer>
    );
}
export default SimpleFooter;