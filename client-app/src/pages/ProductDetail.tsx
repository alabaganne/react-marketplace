import React from 'react';
import PageHeader from '../components/PageHeader';

import products from '../data/products';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { ShoppingCartIcon, StarIcon, TagIcon } from '@heroicons/react/24/solid';
const p = products[1];

const Divider = () => <span className="text-black">-&gt;</span>;

const ProductDetail = () => {
  return (
    <div className="container">
      <div className="text-sm text-gray-500 font-medium mb-2">
        Shops <Divider /> Store name <Divider /> Product name
      </div>
      <PageHeader title={p.name} subtitle="Details" />
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-4">
          <div className="h-[480px] bg-indigo-600 text-indigo-50 flex-center p-8 rounded-lg">
            <PhotoIcon className="h-32 w-32" />
          </div>
        </div>
        <div className="col-span-2 flex flex-col">
          <p>{p.description}</p>
          <div className="mt-4 flex items-center gap-1">
            <StarIcon className="h-5 w-5 text-indigo-600" />
            <span className="text-indigo-600 text-2xl font-bold">4.2/5</span>
            <span className="text-gray-600 text-sm">(120 ratings)</span>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm text-gray-500">
              Category <Divider />
            </span>{' '}
            <span className="text-sm bg-indigo-600 text-white flex items-center rounded-lg py-0.5 px-2">
              <TagIcon className="h-4 w-4 mr-1" /> Electronics
            </span>
          </div>
          <div className="mt-4 text-sm text-red-600">
            Only 4 items left in the stock.
          </div>
          <div className="flex items-center justify-between mt-auto">
            <div className="font-special flex items-center">
              <span className="text-black text-6xl">{p.price}</span>
              <span className="text-indigo-200 text-2xl inline-block ml-2">
                TND
              </span>
            </div>
            <button className="btn btn-secondary">
              <ShoppingCartIcon className="h-5 w-5" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
