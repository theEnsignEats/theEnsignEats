"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

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
    window.location.assign("/login"); // Updated to use window.location.assign
  };

  render() {
    return (
      <header className="bg-customYellow flex justify-between text-green-800 p-4 relative">
        <div className="flex items-center">
          <Image
            src="/logox.png"
            alt="Logo Horizontal"
            width={200}
            height={100}
          />
        </div>
        <div className="flex-1 flex justify-end items-center">
          <div className="hidden md:flex items-center space-x-1.5 p-2">
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
            <button
              className="rounded-full bg-customYellow hover:bg-yellow1 px-2.5 py-1 text-sm font-semibold text-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={this.handleLoginClick}
            >
              Sign Up
            </button>
          </div>
          <div className="relative">
            <button
              aria-label="Toggle menu" // Added aria-label
              className="md:hidden bg-yellow1 hover:text-green-800 hover:shadow-md hover:border-green-800 p-2 px-8 text-lg cursor-pointer rounded-full shadow-lg border-green-800 border flex items-center"
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
              <div className="absolute top-full left-0 w-full mt-2 px-1 py-1 rounded-lg bg-yellow1 border-green-800 border shadow-md z-50">
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
                <button
                  className="rounded-full bg-customYellow hover:bg-yellow1 px-2.5 py-1 text-sm font-semibold text-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full text-left"
                  onClick={this.handleLoginClick}
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
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

export default Header;