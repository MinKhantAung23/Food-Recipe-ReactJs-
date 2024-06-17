import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl">404 | Page Not Found</h1>
      <Link to={"/"} className="border border-white my-4 rounded px-2 py-1">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
