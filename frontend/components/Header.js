import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              <span className="bg-blue-600 text-white px-2 py-1 rounded mr-1">p</span>
              racto
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-blue-600 border-b-2 border-blue-600 pb-4 font-medium">
              Find Doctors
            </Link>
            <Link href="/video-consult" className="text-gray-600 hover:text-blue-600 pb-4">
              Video Consult
            </Link>
            <Link href="/surgeries" className="text-gray-600 hover:text-blue-600 pb-4">
              Surgeries
            </Link>
          </nav>

          {/* Desktop Right Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">NEW</span>
              <span className="text-gray-600">For Corporates</span>
            </div>
            <span className="text-gray-600">For Providers</span>
            <span className="text-gray-600">Security & help</span>
            <Link href="/login" className="text-blue-600 hover:text-blue-800">
              Login / Signup
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-blue-600 font-medium">
                Find Doctors
              </Link>
              <Link href="/video-consult" className="text-gray-600">
                Video Consult
              </Link>
              <Link href="/surgeries" className="text-gray-600">
                Surgeries
              </Link>
              <Link href="/login" className="text-blue-600">
                Login / Signup
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;