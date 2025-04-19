import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export const Breadcrumbs = () => {
  const location = useLocation();
  const { pathname } = location;

  const pathnames = pathname.split('/').filter(Boolean);
  const [details, ...rest] = pathnames;

  console.log(rest)

  return (
    <nav className="mx-[20px]">
      <Link to="/">
        <FaHome />
      </Link>

      <Link to={details}>
        {details}
      </Link>
    </nav>
  );
}