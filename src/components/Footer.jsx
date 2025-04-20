import { Link } from "react-router-dom";
import { CiSquareChevUp } from "react-icons/ci";
import logo from "../assets/book-loop.svg"

export const Footer = () => {
  return (
    <footer className="max-w-[1200px] py-[40px] mx-auto">
      <div className="flex flex-col items-start sm:flex-row sm:items-center gap-[30px]">
        <Link to="/">
          <img src={logo} alt="book loop" />
        </Link>

        <a
          href="https://github.com/shchipina/book-loop"
          className="font-semibold text-[18px] hover:underline"
          target="_blank"
        >
          GitHub
        </a>

        <a
          href="#top"
          className="flex items-center gap-2 text-[18px] font-semibold hover:underline"
        >
          Back to top
          <CiSquareChevUp color="#EFCA08" />
        </a>
      </div>
    </footer>
  );
}