"use client";
export function Hero() {
  const handleclick = () => {
    window.location.href = "/signup";
  };
  
  return (
    <div className="flex flex-row justify-between items-center">
      {/* Right of hero */}
      <div className="flex flex-col justify-center items-center h-148 bg-white">
        <h1 className="text-8xl font-bold mb-4 text-left px-40">
          Human <br></br>Stories and Ideas.
        </h1>
        <h1 className="text-3xl">A place to read,write and connect</h1>
        <button
          className="bg-black text-white px-4 py-2 rounded-full mt-6 hover:bg-gray-800"
          style={{ cursor: "pointer" }}  onClick={handleclick}
        >
          Start Reading{" "}
        </button>
      </div>
      {/* Left Hero */}
      <div>
        <img
          src="/4_SdjkdS98aKH76I8eD0_qjw.webp"
          alt="Hero Image"
          className="w-full h-148 object-cover"
        />
      </div>
    </div>
  );
}
