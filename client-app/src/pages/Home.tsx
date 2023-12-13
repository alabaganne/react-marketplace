import Logo from '../components/Logo';
import AppLayout from '../components/AppLayout';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto py-32 sm:py-48">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Connect. Discover. Shop. Your Marketplace for Endless Finds!
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          <Logo className="text-9xl text-indigo-600" />
        </h1>
        <p className="mt-8 text-lg leading-8 text-gray-600">
          Welcome to our website, your destination for unique treasures. Explore
          handcrafted wonders and modern marvels in a seamless, secure platform.
          Join us and discover endless finds!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-8">
          <Link to="/shops" className="btn btn-primary">
            Our Shops
          </Link>
          <Link to="/about" className="text-black text-sm font-medium">
            About Us -&gt;
          </Link>
        </div>
      </div>
    </div>
  );
}
