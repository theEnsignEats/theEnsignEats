"use client"; // This directive tells Next.js to treat this file as a client component

import React, { useState } from "react";

export default function Example() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = localStorage.getItem("registrationData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (email === parsedData.email && password === parsedData.password) {
        console.log("Sign-in successful!");
        setLoginSuccess(true);
      } else {
        setError("Invalid email or password.");
      }
    } else {
      setError("No registered account found.");
    }
  };

  return (
    <div className="min-h-full flex flex-col justify-center items-center bg-white px-6 py-12 lg:px-8">
      {loginSuccess ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-9 tracking-tight text-emerald-600">
            Login Successful!
          </h2>
          <p className="mt-4 text-gray-500">Welcome back!</p>
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
          Don&apos;t have an account?{" "}
            <a
              href="/signup"
              className="font-medium text-emerald-600 hover:text-emerald-500"
            >
              Register for free! & Earn rewards
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
