/* eslint-disable react/prop-types */

const Container = ({ children }) => {
  return (
    <main className="w-[90%] sm:w-[80%] min-h-screen mx-auto flex flex-col">
      {children}
    </main>
  );
};

export default Container;
