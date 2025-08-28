export function NavbarLand() {
  return (
    <nav>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold p-4">Medium</h2>
        <div>
          <ul className="flex gap-4 p-4">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Contact</li>
            <li className="hover:underline cursor-pointer">Login</li>
            <li className="hover:underline cursor-pointer">Sign Up</li>
          </ul>
        </div>
      </div>
      <div>
        <hr></hr>
      </div>
    </nav>
  );
}
