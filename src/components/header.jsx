"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./LoginButton.css";

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

  handleLoginClick = () => {
    window.location.href = "/login"; // Example of redirecting to a login page
  };

  render() {
    return (
      <header className="bg-customYellow flex items-center  justify-center  space-x-10 sm:justify-between text-green-800 p-4">
        <div>
          <Image
            src="/logox.png"
            alt="Logo Horizontal"
            width={200}
            height={100}
          />
        </div>
        <div className="hidden md:flex items-center space-x-1.5 p-2">
          <LoginButton onClick={this.handleLoginClick} />
          <NavLink href="/" onClick={this.closeMenu}>
            Home
          </NavLink>
          <NavLink href="/about" onClick={this.closeMenu}>
            About
          </NavLink>
          <NavLink href="/menu" onClick={this.closeMenu}>
            Menu
          </NavLink>
          <NavLink href="/order" onClick={this.closeMenu}>
            Order
          </NavLink>
          <LoginButton onClick={this.handleLoginClick} />
        </div>
        <button
          className="md:hidden bg-yellow-500 hover:text-green-800 hover:shadow-md hover:border-green-800 p-2 px-8 text-lg cursor-pointer rounded-full shadow-lg border-green-800 border flex items-center"
          onClick={this.toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1={4} y1={6} x2={20} y2={6} />
            <line x1={4} y1={12} x2={20} y2={12} />
            <line x1={4} y1={18} x2={20} y2={18} />
          </svg>
        </button>
        {this.state.isMobileMenuOpen && (
          <div className="md:hidden absolute top-full right-4 px-1 py-1 rounded-lg bg-yellow-500 border-green-800 border shadow-md z-50">
            <NavLinkMobile href="/" onClick={this.closeMenu}>
              Home
            </NavLinkMobile>
            <NavLinkMobile href="/about" onClick={this.closeMenu}>
              About
            </NavLinkMobile>
            <NavLinkMobile href="/menu" onClick={this.closeMenu}>
              Menu
            </NavLinkMobile>
            <NavLinkMobile href="/order" onClick={this.closeMenu}>
              Order
            </NavLinkMobile>
            <LoginButton onClick={this.handleLoginClick} />
          </div>
        )}
      </header>
    );
  }
}

const NavLink = ({ href, children, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="p-2 mx-2 rounded border-b-4 border-transparent hover:border-green-800 hover:text-green-800 active:text-green-800 active:no-underline"
    >
      {children}
    </Link>
  );
};

const NavLinkMobile = ({ href, children, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block text-lg py-1 px-3 rounded-lg hover:text-green-800 hover:border-b-4 hover:border-green-800"
    >
      {children}
    </Link>
  );
};

const LoginButton = ({ onClick }) => {
  return (
    <button
      className="rounded-full bg-customYellow hover:bg-yellow1 px-2.5 py-1 text-sm font-semibold text-green-800  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={onClick}
    >
      Sign Up
    </button>
  );
};
export default Header;
