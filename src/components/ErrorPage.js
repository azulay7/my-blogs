import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      {error && (
        <div>
          <p>Sorry, an unexpected error has occurred.</p>
          <i>{error.statusText || error.message}</i>
        </div>
      )}
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
}
