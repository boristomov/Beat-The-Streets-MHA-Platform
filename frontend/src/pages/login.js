import React, { useState } from "react";

function Login({ userService }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async (e) => {
    // e.preventDefault();
    userService.loginUser(credentials);
  };
  
  return (
    <div>
      <form onSubmit={handleLogin} >
        <p>Login</p>
        <div>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) =>
              setCredentials({
                username: e.target.value,
                password: credentials.password,
              })
            }
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            onChange={(e) =>
              setCredentials({
                username: credentials.username,
                password: e.target.value,
              })
            }
          />
        </div>
        <div>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
