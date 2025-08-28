"use client";

import { FooterHero } from "../components/footerhero";

export default function Aboutpage() {
  return (
    <div className="bg-black/90 min-h-screen">
      <nav>
        <div className="flex justify-between items-center px-40 py-2">
          <a href="/">
            <h2 className="text-3xl text-white font-extrabold px-4 py-2">
              Medium
            </h2>
          </a>
          <div className="flex items-center gap-4">
            <ul className="flex gap-4 px-4 py-2"></ul>
            <button
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-black hover:text-white"
              style={{ cursor: "pointer" }}
            >
              Sign in
            </button>
            <button
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-black hover:text-white"
              style={{ cursor: "pointer" }}
            >
              Sign up
            </button>
          </div>
        </div>
      </nav>
      <div>
        <hr className="text-white"></hr>
      </div>
      <h1 className="text-7xl font-bold text-left text-white mt-10 px-20 ">
        Everyone has a <br></br> story to tell
      </h1>
      <p className="text-left text-white mt-4 px-20 text-2xl">
        Medium is a home for human stories and ideas. Here, anyone can share
        knowledge and wisdom with the world—without having to build a mailing
        list or a following first. The internet is noisy and chaotic; Medium is
        quiet yet full of insight. It’s simple, beautiful, collaborative, and
        helps you find the right readers for whatever you have to say.
      </p>
      <p className="text-left text-white mt-4 px-20 mb-10 bg-gray-500  w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-4 text-2xl ">
        Ultimately, our goal is to deepen our collective understanding of the
        world through the power of writing.
      </p>
      <p className="text-left text-white mt-4 px-20 mb-10 text-2xl ">
        We believe that what you read and write matters. Words can divide or
        empower us, inspire or discourage us. In a world where the most
        sensational and surface-level stories often win, we’re building a system
        that rewards depth, nuance, and time well spent. A space for thoughtful
        conversation more than drive-by takes, and substance over packaging.
        They’re software developers, amateur novelists, product designers, CEOs,
        and anyone burning with a story they need to get out into the world.
        They write about what they’re working on, what’s keeping them up at
        night, what they’ve lived through, and what they’ve learned that the
        rest of us might want to know too.
      </p>
      <div className=" hover:bg-white group" style={{ cursor: "pointer" }}>
        <hr className="text-white" />

        <div className="flex flex-row justify-between mt-10 mb-10 gap-4">
          <h2 className="text-left text-white mt-8 px-20 text-6xl group-hover:text-black">
            Start Reading
          </h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-12 text-white justify-center items-center mt-10 mr-20 group-hover:text-black"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <hr className="text-white" />
      </div>

      <div className=" hover:bg-white group" style={{ cursor: "pointer" }}>
        <hr className="text-white" />

        <div className="flex flex-row justify-between mt-10 mb-10 gap-4">
          <h2 className="text-left text-white mt-8 px-20 text-6xl group-hover:text-black">
            Start Writing
          </h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-12 text-white justify-center items-center mt-10 mr-20 group-hover:text-black"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <hr className="text-white" />
      </div>
      <FooterHero />
    </div>
  );
}
