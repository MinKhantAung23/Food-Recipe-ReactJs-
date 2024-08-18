/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import SearchModal from "../modal/SearchModal";
import { Navbar } from "flowbite-react";

const Nav = () => {
  return (
    <Navbar fluid rounded className="shadow">
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
      <div className="flex md:order-2">
        <SearchModal />
        <Link
          to={"/favorite"}
          className="cursor-pointer w-fit inline-flex items-center border mx-3 bg-slate-100 px-2 py-1 rounded-md"
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

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
