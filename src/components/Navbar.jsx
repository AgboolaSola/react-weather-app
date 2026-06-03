import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-slate-900 flex gap-4 justify-between items-center text-white py-4 px-8 border-b border-slate-700">
      <div>
        <Link to="/">Weather App</Link>
      </div>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-indigo-400 transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-indigo-400 transition">
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
