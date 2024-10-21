import React from 'react';
import { useParams } from 'react-router-dom';
import { Phone, MapPin, Mail } from 'lucide-react';

const vendors = [
  {
    id: 1,
    name: "Fresh Farms",
    description: "We offer the freshest produce straight from our local farms.",
    location: "124, Kothari Nagar, Ramapuram 600089",
    phone: "9781274981",
    email: "info@freshfarms.com",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    products: [
      { name: "Tomatoes", price: 100 },
      { name: "Lettuce", price: 50},
      { name: "Carrots", price: 30 },
      { name: "Apples", price: 200},
    ]
  },
  // Add more vendor data here...
];

const VendorDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const vendor = vendors.find(v => v.id === parseInt(id || ""));

  if (!vendor) {
    return <div>Vendor not found</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={vendor.image} alt={vendor.name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{vendor.name}</h1>
        <p className="text-gray-600 mb-4">{vendor.description}</p>
        
        <div className="mb-6">
          <p className="flex items-center text-gray-600 mb-2">
            <MapPin size={18} className="mr-2" /> {vendor.location}
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <Phone size={18} className="mr-2" /> {vendor.phone}
          </p>
          <p className="flex items-center text-gray-600">
            <Mail size={18} className="mr-2" /> {vendor.email}
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4">Current Prices</h2>
        <div className="grid grid-cols-2 gap-4">
          {vendor.products.map((product, index) => (
            <div key={index} className="bg-gray-100 p-3 rounded">
              <p className="font-semibold">{product.name}</p>
              <p className="text-green-600">${product.price.toFixed(2)}/lb</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorDetail;