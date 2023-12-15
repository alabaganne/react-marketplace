import React from 'react';
import Card from '../../components/Card';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [userData, setUserData] = React.useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  function handleSubmit() {
    if (!userData.username || !userData.password) {
      return alert('Please fill all the fields.');
    }
    // TODO: send request to login user

    navigate('/admin/shops/');
  }

  return (
    <div className="flex-center">
      <Card
        title="Log in"
        subtitle="Log in to access your store."
        className="w-96"
      >
        <form action="" className="p-6">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="username"
              className="form-control"
              placeholder="johndoe"
              value={userData.username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Password:</label>
            <input
              type="password"
              className="form-control"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </div>
          <button
            className="btn btn-primary w-full mt-6"
            onClick={handleSubmit}
          >
            Login
          </button>
          <p className="text-sm text-gray-600 mt-2">
            You already have an account?{' '}
            <Link className="link" to="/auth/login">
              Login here
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Login;
