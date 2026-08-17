

function Navbar({onLogout }) {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-4">
        <h1 className="text-2xl font-bold">
          Self Study System
        </h1>

        <div className="flex gap-6 items-center">
          <a href="#" className="hover:text-yellow-300">
            Home
          </a>

          <a href="#study" className="hover:text-yellow-300">
            Study
          </a>

          <a href="#todo" className="hover:text-yellow-300">
            Todo
          </a>

          <a href="#contact" className="hover:text-yellow-300">
            Contact
          </a>
           <button
  onClick={onLogout}
  className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
>

         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
