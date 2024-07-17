"use client";
import React, { useState } from "react";

export default function Authentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [userName, setUserName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("../api/login-info/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      setUserName(data.name);

      console.log("Login successful:", data);
      setLoginSuccess(true);

      // Store the username in localStorage
      localStorage.setItem("userName", data.name);
    } catch (error) {
      console.error("Login error:", error.message);
      setError("Invalid email or password.");
    }
  };

  const handleRedirect = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-full flex flex-col justify-center items-center bg-white px-6 py-12 lg:px-8">
      {loginSuccess ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-9 tracking-tight text-emerald-600">
            Login Successful!
          </h2>
          <p className="mt-4 text-gray-500">Welcome back!, {userName}!</p>
          <button
            onClick={handleRedirect}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Home
          </button>
        </div>
      ) : (
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="./Burger Logo ensign eats B&W.png"
            alt="Burger"
          />
          <h2 className="mt-6 text-center text-3xl font-bold leading-9 tracking-tight text-emerald-600">
            Sign in to your account
          </h2>
        </div>
      )}

      {!loginSuccess && (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-8 shadow-lg rounded-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 shadow-sm focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-emerald-600 hover:text-emerald-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 shadow-sm focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 sm:text-sm"
                />
              </div>
            </div>

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="font-medium text-emerald-600 hover:text-emerald-500"
            >
              Register for free!
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
