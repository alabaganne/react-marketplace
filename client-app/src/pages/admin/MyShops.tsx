import React from 'react';
import PageHeader from '../../components/PageHeader';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

import shops from '../../data/shops';

const Right = () => {
  return (
    <div className="flex items-center gap-4">
      <Link className="btn btn-primary btn-lg" to="create">
        <ShoppingBagIcon className="h-5 w-5" />
        <span>Add new shop</span>
      </Link>
    </div>
  );
};

const MyShops = () => {
  function handleDelete(id: number) {
    const c = confirm('Are you sure you want to delete this shop?');
    if (c) {
      alert('Delete shop: ' + id);
    }
  }

  return (
    <div>
      <PageHeader
        title="My Shops"
        subtitle="Effortlessly oversee and optimize your product portfolio for success."
        right={Right()}
      />

      <div className="bg-white border-gray-200 rounded-lg overflow-hidden border shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Shop name
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {shops.map((shop) => (
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-bold">
                  {shop.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shop.description.slice(0, 60)}...
                </td>
                <td className="flex items-center justify-end gap-2 px-6 py-4">
                  <Link to="/shops" className="btn btn-sm btn-primary">
                    View -&gt;
                  </Link>
                  <Link to="1/edit" className="btn btn-sm btn-black">
                    Edit -&gt;
                  </Link>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(1)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyShops;
