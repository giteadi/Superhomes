import { FaUserCircle, FaBars } from 'react-icons/fa';
export default function Header() {
  return (
    <div>
      <header className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-cyan-500 p-6">
        {/* Left Icons (FaBars) */}
        <div className="flex items-center space-x-6">
          <FaBars className="text-white text-2xl cursor-pointer" />
        </div>

        {/* Middle Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-semibold text-white italic">
          SuperHomes
        </div>

        {/* Right Icons (FaUserCircle) */}
        <div className="flex items-center space-x-6">
          <FaUserCircle className="text-white text-2xl cursor-pointer" />
        </div>
      </header>
    </div>
  );
}
