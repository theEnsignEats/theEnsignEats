"use client";
import React, { useState, useEffect } from "react";

export default function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordconfirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can now send formData to a server or store it in localStorage
    // For example, store in localStorage:
    localStorage.setItem("registrationData", JSON.stringify(formData));

    // Or send to a server
    // fetch('your-server-endpoint', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // }).then(response => response.json())
    //   .then(data => console.log('Success:', data))
    //   .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="flex min-h-screen flex-col justify-center items-center bg-white px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="./Burger Logo ensign eats B&W.png"
          alt="Burger"
        />
        <h2 className="mt-6 text-center text-3xl font-bold leading-9 tracking-tight text-emerald-600">
          Register a new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-8 shadow-lg rounded-lg">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 shadow-sm focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 sm:text-sm"
              />
            </div>
          </div>

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
                className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 shadow-sm focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 shadow-sm focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password-confirm"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                id="password-confirm"
                name="password-confirm"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 shadow-sm focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-emerald-600 hover:text-emerald-500"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
