"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoX from "../logos/logox.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileMenuOpen: false,
    };
  }

  toggleMobileMenu = () => {
    this.setState({ isMobileMenuOpen: !this.state.isMobileMenuOpen });
  };

  closeMenu = () => {
    this.setState({ isMobileMenuOpen: false });
  };

  render() {
    return (
      <header className="bg-customYellow flex items-center  justify-center  space-x-10 sm:justify-between text-green-800 p-4">
        <div>
          <Image src={LogoX} alt="Logo Horizontal" className="h-12 w-auto" />
        </div>
        <nav className="hidden sm:flex space-x-1.5">
          <NavLink href="/" onClick={this.closeMenu}>Home</NavLink>
          <NavLink href="/about" onClick={this.closeMenu}>About</NavLink>
          <NavLink href="/projects" onClick={this.closeMenu}>Menu</NavLink>
          <NavLink href="/uses" onClick={this.closeMenu}>Order</NavLink>
        </nav>
        <div className="relative sm:hidden">
          <button
            className="px-6 bg-customYellow hover:text-green-800 hover:shadow-md hover:shadow-green-800 hover:border-green-800 p-2 text-lg cursor-pointer rounded-full shadow-lg border-green-800 border flex items-center"
            onClick={this.toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
          {this.state.isMobileMenuOpen && (
            <div className="absolute right-0 mt-2  rounded-lg bg-customYellow border-green-800 border shadow-md hover:shadow-green-800 z-50">
              <NavLinkMobile href="/" onClick={this.closeMenu}>Home</NavLinkMobile>
              <NavLinkMobile href="/about" onClick={this.closeMenu}>About</NavLinkMobile>
              <NavLinkMobile href="/projects" onClick={this.closeMenu}>Menu</NavLinkMobile>
              <NavLinkMobile href="/uses" onClick={this.closeMenu}>Order</NavLinkMobile>
            </div>
          )}
        </div>
      </header>
    );
  }
}

const NavLink = ({ href, children, onClick }) => {
  return (
    <Link href={href} onClick={onClick} className="p-2 mx-2 rounded border-b-4 border-transparent hover:border-green-800 hover:text-green-800 active:text-green-800 active:no-underline">
      {children}
    </Link>
  );
};

const NavLinkMobile = ({ href, children, onClick }) => {
  return (
    <Link href={href} onClick={onClick} className="block text-lg py-1 px-3 rounded-lg hover:text-green-800 hover:border-b-4 hover:border-green-800">
      {children}
    </Link>
  );
};

export default Header;

