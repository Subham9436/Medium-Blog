"use client";
import axios from "axios";
import { Baymax } from "./BaymaxThree";
import { useState } from "react";

export function Signup() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const handleformchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user",
        formData
      );
      setFormData({ fname: "", lname: "", email: "", password: "" });
      if (response.status === 200) {
        // Redirect to login page on successful signup
        window.location.href = "/login";
      } else {
        console.error("Signup failed:", response.data);
      }
    } catch (err) {
      console.error("Error during signup:", err);
    }
  };

  return (
    <div>
      <div>
        <nav className="">
          <div className="flex justify-between items-center px-40 py-2">
            <a href="/">
              <h2 className="text-3xl text-black font-extrabold px-4 py-2">
                Medium
              </h2>
            </a>
            <div>Welcome to Medium !!</div>
          </div>
        </nav>
        <hr></hr>
      </div>
      <div>
        <h1 className="text-5xl font-bold text-left text-black mt-4 px-20 ">
          Join Medium.
        </h1>
        <p className="text-left text-black mt-4 px-20 text-2xl">
          Create an account to receive great stories in your inbox, personalize
          your homepage, and follow authors and topics that you love.
        </p>
        <div className="flex flex-col md:flex-row justify-left items-center mt-10 gap-10">
          {/* Left Signup */}
          <div>
            <img
              src="/hero inverted.webp"
              alt="Signup Image"
              className="w-full h-128 object-cover"
            />
          </div>
          {/* right Signup */}
          <form className="px-20 py-10" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              className="border p-2 m-2"
              value={formData.fname}
              name="fname"
              onChange={handleformchange}
            />
            <br />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 m-2"
              value={formData.lname}
              name="lname"
              onChange={handleformchange}
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              className="border p-2 m-2"
              value={formData.email}
              name="email"
              onChange={handleformchange}
            />
            <br />

            <input
              type="password"
              placeholder="Password"
              className="border p-2 m-2"
              value={formData.password}
              name="password"
              onChange={handleformchange}
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

          <div>
            <figure className=" h-100" style={{ cursor: "pointer" }}>
              <Baymax></Baymax>
            </figure>
            Hi there! If you already have an account, just click
            <a href="/login" className="text-blue-500 hover:underline">
              {" "}
              here
            </a>{" "}
            to log in.
          </div>
        </div>
      </div>
    </div>
  );
}
