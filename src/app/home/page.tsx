"use client";
import axios from "axios";

export default function Home() {
  const handleclick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/logout"
      );
      if (response.status === 200) {
        window.location.href = "/login";
      } else {
        console.error("Logout failed:", response.data);
      }
    } catch (err) {
      console.error("Error during logout:", err);
    }
  };

  return (
    <main>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleclick}>Logout</button>
    </main>
  );
}
