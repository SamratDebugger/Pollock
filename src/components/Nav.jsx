import { useContext } from "react";
import NavMenus from "./NavMenus";
import { Link } from "react-router";
import { MyContext } from "../../context/MyProvider";

export default function Nav() {
  const { currentUser } = useContext(MyContext);

  return (
    <header className="bg-base-100">
      <div className="navbar max-w-360 mx-auto p-5  ">
        <div className="navbar-start">
          <div className="md:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link to="/" className="">
            <img
              className="h-11"
              src="/assets/images/logo.webp"
              alt="website-logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <NavMenus />
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={currentUser ? "/dashboard" : "/sign-up"} className="">
            <button className="btn btn-info">
              {currentUser ? "Dashboard" : "Sign Up"}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
