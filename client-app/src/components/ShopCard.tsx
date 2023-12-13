import React from 'react';
import Shop from '../interfaces/shop';
import { Link } from 'react-router-dom';
import {
  EnvelopeIcon,
  BuildingStorefrontIcon,
  PhoneIcon,
  CheckIcon,
} from '@heroicons/react/24/solid';

const ShopCard = (shop: Shop) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col shadow-sm">
      <div className="bg-gray-700 p-8 flex items-center justify-center border-b border-gray-200">
        <div className="font-special flex items-center justify-center flex-col text-4xl">
          <BuildingStorefrontIcon className="h-20 w-20 mr-2 text-gray-200" />
          <span className="text-indigo-50">{shop.name}</span>
        </div>
      </div>
      <div className="p-6 text-center flex flex-col items-center flex-1">
        <span className="text-sm text-gray-600">{shop.description}</span>
        {shop.verified && (
          <div className="mt-4 text-xs font-medium bg-green-100 text-green-700 border border-green-600 rounded-full px-2 py-0.5 flex items-center">
            <CheckIcon className="h-4 w-4 mr-1 inline-flex-shrink-0" />
            <span>Verified</span>
          </div>
        )}
      </div>
      <div className="border-t border-gray-200 flex text-sm text-center">
        <div className="w-1/2 p-4 border-r border-gray-200 flex justify-center items-center gap-1">
          <EnvelopeIcon className="h-4 w-4 flex-shrink-0 text-indigo-600" />
          <span className="text-black">{shop.email}</span>
        </div>
        <div className="w-1/2 p-4 flex justify-center items-center gap-1">
          <PhoneIcon className="h-4 w-4 flex-shrink-0 text-indigo-600" />
          <span className="text-black">{shop.phone}</span>
        </div>
      </div>
      <div className="px-4 pb-3">
        <Link
          to={'/shops/' + shop.id + '/products'}
          className="block rounded-lg p-4 text-sm text-center font-medium text-black bg-transparent border border-gray-300 bg-gray-50 hover:bg-gray-100"
        >
          <span>Visit shop -&gt;</span>
        </Link>
      </div>
    </div>
  );
};

export default ShopCard;
