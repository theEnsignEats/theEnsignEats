import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Authentication from "../login/page.jsx";

describe("Authentication Component", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("renders sign-in form", () => {
    render(<Authentication />);
    //CHECK IG ==F THE THINGD ARE RENDERRED? 
    expect(screen.getByText("Sign in to your account")).toBeInTheDocument();
    expect(screen.getByLabelText("Email address")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });

  test("handles input changes", () => {
    render(<Authentication />);

    const emailInput = screen.getByLabelText("Email address");
    const passwordInput = screen.getByLabelText("Password");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");
  });

  test("shows error for invalid credentials", () => {
    const storedData = { email: "test@example.com", password: "password123" };
    localStorage.setItem("registrationData", JSON.stringify(storedData));

    render(<Authentication />);
    // RENDERED AFTER CLICKING AND REGISTERINF
    fireEvent.change(screen.getByLabelText("Email address"), {
      target: { value: "wrong@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "wrongpassword" },
    });

    fireEvent.submit(screen.getByRole("button", { name: /sign in/i }));

    expect(screen.getByText("Invalid email or password.")).toBeInTheDocument();
  });
  // CHECKING IF THE ACCOUNT EXISTS
  test("shows success message for valid credentials", () => {
    const storedData = { email: "test@example.com", password: "password123" };
    localStorage.setItem("registrationData", JSON.stringify(storedData));

    render(<Authentication />);

    fireEvent.change(screen.getByLabelText("Email address"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });

    fireEvent.submit(screen.getByRole("button", { name: /sign in/i }));

    expect(screen.getByText("Login Successful!")).toBeInTheDocument();
  });
    // IF THE ACCOUNT DOES NT EXISTS
  test("shows error if no account is found", () => {
    render(<Authentication />);

    fireEvent.change(screen.getByLabelText("Email address"), {
      target: { value: "nonexistent@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });

    fireEvent.submit(screen.getByRole("button", { name: /sign in/i }));

    expect(screen.getByText("No registered account found.")).toBeInTheDocument();
  });
});
