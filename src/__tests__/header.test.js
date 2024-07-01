import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "../components/header";


jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {

    return <img {...props} />;
  },
}));

describe("Header component", () => {
  it("renders the header with logo and navigation links", () => {
    render(<Header />);

    expect(screen.getByAltText("Logo Horizontal")).toBeInTheDocument();
    expect(screen.getAllByText("Home")[0]).toBeInTheDocument();
    expect(screen.getAllByText("About")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Menu")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Order")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Sign Up")[0]).toBeInTheDocument();
  });

  it("toggles the mobile menu when the button is clicked", () => {
    render(<Header />);

    const mobileMenuButton = screen.getByRole("button", { name: /toggle menu/i });
    fireEvent.click(mobileMenuButton);

    expect(screen.getAllByText("Home")[1]).toBeInTheDocument();
    expect(screen.getAllByText("About")[1]).toBeInTheDocument();
    expect(screen.getAllByText("Menu")[1]).toBeInTheDocument();
    expect(screen.getAllByText("Order")[1]).toBeInTheDocument();
    expect(screen.getAllByText("Sign Up")[1]).toBeInTheDocument();

    fireEvent.click(mobileMenuButton);

    expect(screen.queryAllByText("Home").length).toBe(1);
    expect(screen.queryAllByText("About").length).toBe(1);
    expect(screen.queryAllByText("Menu").length).toBe(1);
    expect(screen.queryAllByText("Order").length).toBe(1);
    expect(screen.queryAllByText("Sign Up").length).toBe(1);
  });

  it("redirects to login page when Sign Up button is clicked", () => {
    const originalLocation = window.location;
    delete window.location;
    window.location = { assign: jest.fn() };

    render(<Header />);

    const signUpButton = screen.getAllByText("Sign Up")[0];
    fireEvent.click(signUpButton);

    expect(window.location.assign).toHaveBeenCalledWith("/login");

    window.location = originalLocation; // Restore original window.location
  });
});