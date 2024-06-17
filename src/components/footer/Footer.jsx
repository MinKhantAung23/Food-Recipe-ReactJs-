import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
  return (
    <footer className="mt-auto py-3 bg-gray-100 dark:bg-neutral-800">
      <div className="text-center">
        <div>
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
        {/* End Col */}
        <div className="mt-3">
          <p className="text-gray-500 dark:text-neutral-500">
            We're part of the{" "}
            <Link
              className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
              to={"/"}
            >
              Foodie
            </Link>
          </p>
          <p className="text-gray-500 dark:text-neutral-500">
            © MK. 2024. All rights reserved.
          </p>
        </div>
        {/* Social Brands */}
        <div className="mt-3 space-x-2">
          <a
            className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          <a
            className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700"
            href="#"
          >
            <svg
              className="flex-shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
        {/* End Social Brands */}
      </div>
    </footer>
  );
};

export default Footer;
