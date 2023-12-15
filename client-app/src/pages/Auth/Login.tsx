import React from 'react';
import Card from '../../components/Card';
import { Link } from 'react-router-dom';

const Login = () => {
  const [userData, setUserData] = React.useState({
    email: '',
    password: '',
  });

  function handleSubmit() {
    if (!userData.email || !userData.password) {
      return alert('Please fill all the fields.');
    }
    // TODO: send request to login user
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
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              className="form-control"
              placeholder="johndoe@example.com"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Password:</label>
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
