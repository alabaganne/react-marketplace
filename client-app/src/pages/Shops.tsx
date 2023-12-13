import React from 'react';
import ShopCard from '../components/ShopCard';
import shops from '../data/shops';
import Pagination from '../components/Pagination';
import PageHeader from '../components/PageHeader';

const Shops = () => {
  return (
    <div className="container">
      <PageHeader title="Shops" subtitle="Explore our list of shops" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {shops.map((shop) => (
          <ShopCard {...shop} />
        ))}
      </div>

      <Pagination />
    </div>
  );
};

export default Shops;
