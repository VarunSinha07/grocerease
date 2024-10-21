import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';

const vendors = [
  { id: 1, name: "Fresh Farms", location: "123 Main St", phone: "555-1234", image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
  { id: 2, name: "Green Grocer", location: "456 Elm St", phone: "555-5678", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
  { id: 3, name: "Veggie Paradise", location: "789 Oak St", phone: "555-9012", image: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
];

const VendorList: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Vendors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vendors.map((vendor) => (
          <div key={vendor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={vendor.image} alt={vendor.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{vendor.name}</h2>
              <p className="flex items-center text-gray-600 mb-2">
                <MapPin size={18} className="mr-2" /> {vendor.location}
              </p>
              <p className="flex items-center text-gray-600 mb-4">
                <Phone size={18} className="mr-2" /> {vendor.phone}
              </p>
              <Link to={`/vendor/${vendor.id}`} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorList;