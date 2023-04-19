function login() {}

function Login() {
  function handleClickLogin() {
    console.log("Logging in");
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
