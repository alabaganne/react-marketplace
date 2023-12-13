import React from 'react';
import shops from '../data/shops';
import Shop from '../interfaces/shop';
import PageHeader from '../components/PageHeader';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Card from '../components/Card';

import categories from '../data/categories';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';

const shop: Shop = shops[2];

// interface FilterProps {
//   handleFilter: () => void;
// }

const Filter = () => {
  return (
    <Card title="Filter" subtitle="Filter products by category, name, or price">
      <div className="p-6 border-b border-gray-200">
        <p className="text-xs mb-2 font-medium">Find products by name</p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search products..."
            className="form-control"
          />
          <button className="btn btn-primary">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="p-6 border-b border-gray-200">
        <h4 className="font-medium text-indigo-600">Categories</h4>
        <p className="text-xs mb-2 font-medium">What are you looking for?</p>
        <div className="flex flex-col gap-1">
          {categories.map((c) => {
            return (
              <div key={c.id} className="flex items-center gap-2">
                <input type="radio" id={'' + c.id} name="category" />
                <label htmlFor={'' + c.id} className="font-medium">
                  {c.name}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-6">
        <h4 className="font-medium text-indigo-600 mb-2">
          Price{' '}
          <span className="text-indigo-400 text-xs">(Tunisians Dinar)</span>
        </h4>
        <div className="flex items-center gap-4">
          <div className="form-group mb-0">
            <label htmlFor="min">Minimum:</label>
            <input
              id="min"
              type="number"
              className="form-control text-sm"
              placeholder="MIN (e.g 120 TND)"
            />
          </div>
          <div className="form-group mb-0">
            <label htmlFor="max" className="">
              Maximum:
            </label>
            <input
              id="max"
              type="number"
              className="form-control text-sm"
              placeholder="MAX (e.g 999 TND)"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

const ShopProducts = () => {
  // function handleFilter() {
  //   console.log('searching...');
  // }

  return (
    <div className="container">
      <PageHeader title={shop.name} subtitle={shop.description} />
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-2">
          <Filter />
        </div>
        <div className="col-span-5">
          <div className="grid grid-cols-3 gap-4">
            {products.map((p) => {
              return (
                <div key={p.id}>
                  <ProductCard {...p} />
                </div>
              );
            })}
          </div>
          <Pagination justifyEnd={true} />
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
