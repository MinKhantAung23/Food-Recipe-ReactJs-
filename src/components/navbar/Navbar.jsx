import { Link, NavLink } from "react-router-dom";
import SearchModal from "../modal/SearchModal";

const Navbar = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm pt-2 pb-4 dark:bg-neutral-800 dark:border-neutral-700">
      <nav
        className="max-w-[85rem] w-full mx-auto rounded-md shadow bg-gray-50 py-3 px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex justify-between items-center flex-1">
          <div className="">
            <Link
              className="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white"
              to={"/"}
            >
              <svg
                width="40px"
                height="40px"
                viewBox="-0.48 -0.48 48.96 48.96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#222020"
                transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.384"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <rect
                    x={12}
                    y={34}
                    width={24}
                    height={8}
                    fill="#070fed"
                    stroke="#0d0c0c"
                    strokeWidth="1.488"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                  <path
                    d="M29 34V20"
                    stroke="#0d0c0c"
                    strokeWidth="1.488"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                  <path
                    d="M22 34V26"
                    stroke="#0d0c0c"
                    strokeWidth="1.488"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                  <path
                    d="M12 25V34H36V25C36 25 41 22 41 17C41 12 37 10 32 10C32 8 29 4 24 4C19 4 16 8 16 10C12 10 7 12 7 17C7 22 12 25 12 25Z"
                    stroke="#0d0c0c"
                    strokeWidth="1.488"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                </g>
              </svg>
              <span className="text-2xl font-bold text-primary">Foodie</span>
            </Link>
          </div>

          <div className="flex items-center ">
            <div className="me-4 sm:me-0">
              <button
                className="cursor-pointer border bg-slate-100 px-2 py-1 rounded-md"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="hs-scale-animation-modal"
                data-hs-overlay="#hs-scale-animation-modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
              <SearchModal />
            </div>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10"
                data-hs-collapse="#navbar-image-and-text-1"
                aria-controls="navbar-image-and-text-1"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={3} x2={21} y1={6} y2={6} />
                  <line x1={3} x2={21} y1={12} y2={12} />
                  <line x1={3} x2={21} y1={18} y2={18} />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          id="navbar-image-and-text-1"
          className="hs-collapse hidden overflow-hidden transition-all duration-300  sm:block"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <Link
              to={"/favorite"}
              className="cursor-pointer w-fit border ms-3 bg-slate-100 px-2 py-1 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 text-red-500"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </Link>
            <NavLink
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
              to={"/"}
              aria-current="page"
            >
              Home
            </NavLink>
            <NavLink
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
              to={"/category"}
            >
              Recipe
            </NavLink>
            <NavLink
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
              to={"/about"}
            >
              About
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
