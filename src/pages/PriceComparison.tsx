import React, { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';

const priceData = [
  { id: 1, vendor: "Fresh Farms", product: "Tomatoes", price: 100 },
  { id: 2, vendor: "Green Grocer", product: "Tomatoes", price: 80 },
  { id: 3, vendor: "Veggie Paradise", product: "Tomatoes", price: 85 },
  { id: 4, vendor: "Fresh Farms", product: "Lettuce", price: 30 },
  { id: 5, vendor: "Green Grocer", product: "Lettuce", price: 40 },
  { id: 6, vendor: "Veggie Paradise", product: "Lettuce", price: 70 },
  // Add more price data...
];

const PriceComparison: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState("All");
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const products = ["All", ...new Set(priceData.map(item => item.product))];

  const filteredData = selectedProduct === "All" 
    ? priceData 
    : priceData.filter(item => item.product === selectedProduct);

  const sortedData = [...filteredData].sort((a, b) => 
    sortOrder === 'asc' ? a.price - b.price : b.price - a.price
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Price Comparison</h1>
      
      <div className="mb-6">
        <label htmlFor="product-select" className="block text-sm font-medium text-gray-700 mb-2">
          Select Product:
        </label>
        <select
          id="product-select"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
        >
          {products.map((product) => (
            <option key={product} value={product}>{product}</option>
          ))}
        </select>
      </div>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <button 
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                  className="flex items-center focus:outline-none"
                >
                  Price ($/lb)
                  <ArrowUpDown size={14} className="ml-1" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedData.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">{item.vendor}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.product}</td>
                <td className="px-6 py-4 whitespace-nowrap">₹{item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceComparison;