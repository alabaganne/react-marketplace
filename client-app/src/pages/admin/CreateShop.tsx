import React from 'react';
import Card from '../../components/Card';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [shopData, setShopData] = React.useState({
    name: '',
    description: '',
  });

  const navigate = useNavigate();

  function handleSubmit() {
    console.log('handle submit');
    // TODO: send request to login user

    navigate('/admin/shops/');
  }

  return (
    <div className="flex-center">
      <Card
        title="Create a shop"
        subtitle="Fill out the form below to create a new shop."
        className="w-[500px]"
      >
        <form action="" className="p-6">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g Jumia"
              value={shopData.name}
              onChange={(e) =>
                setShopData({ ...shopData, name: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              className="form-control"
              value={shopData.description}
              onChange={(e) =>
                setShopData({ ...shopData, description: e.target.value })
              }
              rows={5}
            />
          </div>
          <button
            className="btn btn-primary w-full mt-6"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <p className="text-sm text-gray-600 mt-2">
            &lt;- Go back to{' '}
            <Link className="link" to="/admin/shops">
              Shops list
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Login;
