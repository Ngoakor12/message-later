import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <main className="main">
      <h1>
        <span className="main-head">
          Schedule important messages while you still remember them.{" "}
        </span>
        <span className="sub-head">
          Never forget to send mom a birthday wish again, you're welcome :)
        </span>
      </h1>
      <Link to={"/login"} className="primary-button">
        Schedule message
      </Link>
    </main>
  );
}

export default LandingPage;
