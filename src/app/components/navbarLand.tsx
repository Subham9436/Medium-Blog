"use client";
import { navlinks } from "../constants";

export function NavbarLand() {
  const handleclick = () => {
    window.location.href = "/signup";
  };

  return (
    <nav>
      <div className="flex justify-between items-center px-40 py-2">
        <a href="/">
          <h2 className="text-3xl font-extrabold px-4 py-2">Medium</h2>
        </a>
        <div className="flex items-center gap-4">
          <ul className="flex gap-4 px-4 py-2">
            {navlinks.map((link) => (
              <div key={link.name}>
                <a
                  href={link.link}
                  className="text-lg hover:underline underline-offset-4"
                >
                  <h2>{link.name}</h2>
                </a>
              </div>
            ))}
          </ul>
          <button
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
            style={{ cursor: "pointer" }}
            onClick={handleclick}
          >
            Get started
          </button>
        </div>
      </div>
      <div>
        <hr></hr>
      </div>
    </nav>
  );
}
