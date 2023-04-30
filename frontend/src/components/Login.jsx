import { useEffect } from "react";
import { getAuthedUser } from "../App";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../constants";

async function login() {
  const URL = `${API_BASE_URL}/users/auth/google`;
  window.open(URL, "_self");

  // getAuthedUser().then((res) => {
  //   if (res.success) {
  //     return res;
  //   }
  // });
}

function Login({ setAuthedUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    getAuthedUser().then((res) => {
      console.log(res);
      if (res.success) {
        console.log("Successfully logged in");
        setAuthedUser(res.user);
        navigate("/today");
      } else {
        console.log("Error logging in");
        // setAuthedUser(null);
      }
    });
  }, []);

  async function handleClickLogin() {
    await login();
  }

  return (
    <main className="login">
      <h1>
        <span className="main-head">Welcome. </span>
        <span className="sub-head">First, you need to login :)</span>
      </h1>
      <div className="login-methods">
        <button
          className="primary-button login-button"
          onClick={handleClickLogin}
        >
          Continue with Google
        </button>
      </div>
    </main>
  );
}

export default Login;
