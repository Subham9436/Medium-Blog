"use client";

import axios from "axios";
import { useState } from "react";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/signin",
        {
          email,
          password,
        }
      );
      setEmail("");
      setPassword("");
      if (response.status === 200) {
        // Redirect to home page on successful login
        window.location.href = "/home";
      } else {
        console.error("Login failed:", response.data);
      }
      return response.data;
    } catch (err) {
      console.error("Error during login:", err);
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-left items-center  gap-10">
        <div>
          <img
            src="/Adobe Express - file (1).png"
            alt="Login Image"
            className="w-full h-screen border object-cover "
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold text-left text-black mt-4 px-20 ">
            Sign In to <a href="/" className="underline underline-offset-4">Medium.</a>
          </h1>
          <p className="text-left text-black mt-4 px-20 text-2xl">
            Welcome back! Please enter your details.
          </p>

          {/* Left Login */}

          <div className="flex flex-col md:flex-row justify-left items-center gap-10">
            {/* Right Login Form */}
            <form className="px-20 py-10" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                className="border p-2 m-2"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />

              <input
                type="password"
                placeholder="Password"
                className="border p-2 m-2"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button
                className="bg-black text-white px-4 py-2 rounded-full hover:bg-white hover:text-black m-2"
                type="submit"
                style={{ cursor: "pointer" }}
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
