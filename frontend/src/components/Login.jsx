const API_PORT = 3001;
const API_BASE_URL = `http://localhost:${API_PORT}`;

async function login() {
  const URL = `${API_BASE_URL}/login/federated/google`;
  const result = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(message),
  });
  const responseData = await result.json();
  return responseData;
}

function Login() {
  async function handleClickLogin() {
    console.log("Logging in");
    const result = await login();
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
