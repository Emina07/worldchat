import React from 'react';
import { Globe } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Globe className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-blue-600">WorldChat</span>
        </div>
        <div className="flex space-x-6">
          <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
          <a href="#community" className="text-gray-600 hover:text-blue-600">Community</a>
          <a href="#blog" className="text-gray-600 hover:text-blue-600">Blog</a>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 rounded border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white">Log In</button>
          <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-500">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
