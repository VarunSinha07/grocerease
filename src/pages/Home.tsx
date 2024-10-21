import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Users, BarChart2 } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Grocerease</h1>
      <p className="text-xl mb-8">Compare vegetable prices and find the best deals from local vendors!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          icon={<ShoppingCart size={48} />}
          title="Wide Selection"
          description="Browse a variety of fresh vegetables and groceries from multiple vendors."
        />
        <FeatureCard
          icon={<Users size={48} />}
          title="Local Vendors"
          description="Connect with trusted local vendors in your area."
        />
        <FeatureCard
          icon={<BarChart2 size={48} />}
          title="Price Comparison"
          description="Easily compare prices to find the best deals on your favorite produce."
        />
      </div>
      
      <Link to="/compare" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
        Start Comparing Prices
      </Link>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-green-600 mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Home;