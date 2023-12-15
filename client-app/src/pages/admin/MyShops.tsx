import React from 'react';
import PageHeader from '../../components/PageHeader';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate } from 'react-router-dom';

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
  return (
    <div>
      <PageHeader
        title="My Shops"
        subtitle="Effortlessly oversee and optimize your product portfolio for success."
        right={Right()}
      />

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    john.doe@example.com
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyShops;
