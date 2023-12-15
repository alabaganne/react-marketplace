import React from 'react';
import Card from '../../components/Card';
import { Link } from 'react-router-dom';

const Register = () => {
  const [userData, setUserData] = React.useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  function handleSubmit() {
    if (
      !userData.username ||
      !userData.email ||
      !userData.password ||
      !userData.confirmPassword
    ) {
      return alert('Please fill all the fields.');
    }
    if (userData.password !== userData.confirmPassword) {
      return alert('Passwords do not match.');
    }
    const newUser = {
      username: userData.username,
      email: userData.email,
      password: userData.password,
    };
    console.log(newUser);
    // TODO: send request to save user in the database
  }

  return (
    <div className="flex-center">
      <Card
        title="Register"
        subtitle="Create an account and manage your stores."
        className="w-96"
      >
        <form action="" className="p-6">
          <div className="form-group">
            <label htmlFor="email">Username:</label>
            <input
              type="email"
              className="form-control"
              placeholder="johndoe@example.com"
              value={userData.username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
          </div>
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
          <div className="form-group">
            <label htmlFor="email">Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              value={userData.confirmPassword}
              onChange={(e) =>
                setUserData({ ...userData, confirmPassword: e.target.value })
              }
            />
          </div>
          <button
            className="btn btn-primary w-full mt-6"
            onClick={handleSubmit}
          >
            Register
          </button>
          <p className="text-sm text-gray-600 mt-2">
            You already have an account?{' '}
            <Link className="link" to="/auth/register">
              Register here
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Register;
