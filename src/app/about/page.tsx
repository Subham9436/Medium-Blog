"use client";
export default function Aboutpage() {
  return (
    <div className="bg-black">
      <nav>
        <div className="flex justify-between items-center px-40 py-2">
          <a href="/">
            <h2 className="text-3xl text-white font-extrabold px-4 py-2">Medium</h2>
          </a>
          <div className="flex items-center gap-4">
            <ul className="flex gap-4 px-4 py-2"></ul>
            <button
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-800"
              style={{ cursor: "pointer" }}
            >
              Sign in
            </button>
            <button
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-800"
              style={{ cursor: "pointer" }}
            >
              Sign up
            </button>
          </div>
        </div>
      </nav>
      <div><hr className="text-white"></hr></div>
      <h1 className="text-4xl font-bold text-center text-white mt-10">About Us</h1>
      <p className="text-center text-white mt-4 px-20">
        Welcome to our blog platform! We are dedicated to providing a space
        where writers can share their thoughts, stories, and expertise with a
        wide audience. Our mission is to foster a community of creativity,
        learning, and connection through the power of words. Whether you're a
        seasoned blogger or just starting out, we invite you to join us on this
        journey of expression and discovery.
      </p>
    </div>
  );
}
