import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>Page is not found</h1>

      <Link to="/">
        <button>Back to Homepage</button>
      </Link>
    </div>
  );
}

export default NotFound;
