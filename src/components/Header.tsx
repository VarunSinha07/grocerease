import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-green-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
          <Leaf size={32} />
          <span>Grocerease</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-green-200">Home</Link></li>
            <li><Link to="/vendors" className="hover:text-green-200">Vendors</Link></li>
            <li><Link to="/compare" className="hover:text-green-200">Compare Prices</Link></li>
            <li><Link to="/contact" className="hover:text-green-200">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;