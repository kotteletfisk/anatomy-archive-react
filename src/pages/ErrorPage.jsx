import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const status = error?.status || " ";
  const statusText =
    error?.statusText || error?.message || "An unknown error occurred";

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <h3>Something went wrong</h3>

      <img src="src/assets/awkward-kid.gif" alt="error" />

      <p>You must be smarter then us, this page has not been created yet.</p>

      <i style={{ color: "red" }}>
        {status} {statusText}
      </i>

      <div>
        <Link to="/">Go back to home page ?</Link>
      </div>
    </div>
  );
}

export default ErrorPage;
