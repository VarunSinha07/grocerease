import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Grocerease. All rights reserved.</p>
        <p className="mt-2">Connecting customers with the freshest produce at the best prices.</p>
      </div>
    </footer>
  );
};

export default Footer;