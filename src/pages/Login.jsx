import React, { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const authContext = useAuth()

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    const isSuccess = await authContext.login(username, password)
    console.log(isSuccess)
    if(isSuccess){
      navigate('/')
    }
    setLoading(false)
  };

  if(authContext.isAuthenticated){
    navigate('/')
  }

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center w-100"
      style={{ height: "100vh" }}
    >
      <div className="row w-100">
        <div
          className="col col-md-4 offset-md-4 p-5 wrapper rounded shadow-lg"
          style={{ background: "#DAE5FF" }}
        >
          <form
            className="form-group d-flex flex-column gap-3"
            onSubmit={handleSubmit}
          >
            <h3 className="text-center">CurePilot Login</h3>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Username"
              onChange={handleUsernameChange}
            />
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              onChange={handlePasswordChange}
            />
            <button type='submit' className='btn btn-success' disabled={loading}>
            {loading ? (
              <div className='spinner-border text-primary align-self-center' role='status'>
                {/* <span className='sr-only'></span> */}
              </div>
            ) : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
