import React from 'react';
import Product from '../interfaces/product';
import Card from './Card';
import { ShoppingCartIcon, StarIcon } from '@heroicons/react/24/solid';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const ProductCard = (p: Product) => {
  function addToCart() {
    console.log('add to cart');
  }
  return (
    <Card>
      {/* display the following 3 lines or product's image */}
      <div className="p-6 bg-indigo-600 text-white flex-center h-32">
        <PhotoIcon className="h-12 w-12" />
      </div>
      {/* TODO: product image */}

      {/* Details */}
      <div className="p-4">
        <h4 className="font-bold text-black text-sm">{p.name}</h4>
        <div className="mt-1 flex justify-between items-center text-xs font-medium">
          <div className="flex items-center">
            <StarIcon className="h-4 w-4 mr-0.5 text-indigo-600" />
            <span>4.2/5</span>
          </div>
          <span className="flex-shrink-0">
            <span className="text-red-600">{p.price}</span>{' '}
            <span className="text-gray-600">Tunisians Dinar</span> (TND)
          </span>
        </div>
        <div className="mt-2">
          <p className="text-sm">{p.description}</p>
        </div>
      </div>
      <div className="flex items-center border-t border-gray-200">
        <Link
          to="1/"
          className="block p-3 text-center text-xs font-medium border-r border-gray-200 bg-gray-50 hover:bg-gray-100 w-1/2"
        >
          View -&gt;
        </Link>
        <button
          className="flex items-center justify-center p-3 text-xs font-medium border-r border-gray-200 bg-gray-50 hover:bg-gray-100 w-1/2"
          onClick={addToCart}
        >
          <ShoppingCartIcon className="h-4 w-4 mr-0.5 text-indigo-600" />
          <span>Add to Cart</span>
        </button>
      </div>
    </Card>
  );
};

export default ProductCard;
