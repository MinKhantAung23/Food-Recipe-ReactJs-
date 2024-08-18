import { useState } from "react";
import { useSearchMealsQuery } from "../../store/service/endpoints/recipe.endpoint";
import SearchCard from "../search-Card/SearchCard";
import { Button, Modal } from "flowbite-react";
import { HiSearch } from "react-icons/hi";

const SearchModal = () => {
  const [searchMeal, setSearchMeal] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const { data, error, isLoading } = useSearchMealsQuery(searchMeal, {
    skip: !searchMeal,
  });

  const handleSearchMeal = (e) => {
    setSearchMeal(e.target.value);
  };

  const handleCancel = () => {
    setSearchMeal("");
  };

  return (
    // <div
    //   id="hs-scale-animation-modal"
    //   className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
    //   role="dialog"
    //   tabIndex={-1}
    //   aria-labelledby="hs-scale-animation-modal-label"
    // >
    //   <div className="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] ">
    //     <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
    //       <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth={1.5}
    //           stroke="currentColor"
    //           className="size-5"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    //           />
    //         </svg>
    //         <input
    //           type="type"
    //           id="input-label"
    //           className="py-3 px-4 block w-full outline-none border-gray-200 rounded-lg text-sm focus:border-blue-500 bg-white focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:placeholder-neutral-500 dark:text-neutral-400"
    //           placeholder="Search for a meal"
    //           value={searchMeal}
    //           onChange={handleSearchMeal}
    //           autoFocus
    //         />
    //         <button
    //           type="button"
    //           className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
    //           aria-label="Close"
    //           data-hs-overlay="#hs-scale-animation-modal"
    //           onClick={handleCancel}
    //         >
    //           <span className="sr-only">Close</span>
    //           <svg
    //             className="shrink-0 size-4"
    //             xmlns="http://www.w3.org/2000/svg"
    //             width={24}
    //             height={24}
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth={2}
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           >
    //             <path d="M18 6 6 18" />
    //             <path d="m6 6 12 12" />
    //           </svg>
    //         </button>
    //       </div>
    //       <div className="p-4 overflow-y-auto">
    //         <div className="space-y-4">
    //           {isLoading && <p>Loading...</p>}
    //           {error && <p>Error: {error.status}</p>}
    //           {searchMeal && data && data.meals && (
    //             <div>
    //               {data.meals.map((meal) => (
    //                 <SearchCard key={meal.idMeal} meal={meal} />
    //               ))}
    //             </div>
    //           )}
    //           {searchMeal && data && !data.meals && <p>No meals found.</p>}
    //           {!searchMeal && <p>No search meals</p>}
    //         </div>
    //       </div>
    //       <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
    //         <button
    //           className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
    //           data-hs-overlay="#hs-scale-animation-modal"
    //           onClick={handleCancel}
    //         >
    //           Close
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
      <Button
        color="white"
        className="bg-white text-black hover:bg-gray-100 dark:bg-neutral-900 dark:text-white hover:dark:bg-neutral-800"
        onClick={() => setOpenModal(true)}
      >
        <HiSearch className="size-6" />
      </Button>
      <Modal
        dismissible
        show={openModal}
        position={"top-center"}
        onClose={() => setOpenModal(false)}
      >
        <div className="shadow-sm">
          <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
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
            <input
              type="type"
              id="input-label"
              className="py-3 px-4 block w-full outline-none border-gray-200 rounded-lg text-sm "
              placeholder="Search for a meal"
              value={searchMeal}
              onChange={handleSearchMeal}
              autoFocus
            />
            <button
              type="button"
              className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
              aria-label="Close"
              onClick={handleCancel}
            >
              <span className="sr-only">Close</span>
              <svg
                className="shrink-0 size-4"
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
          <h5 className="px-8 py-2 font-semibold text-lg">Results</h5>
        </div>

        <Modal.Body>
          <div className="space-y-6">
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.status}</p>}

            {searchMeal && data && data.meals && (
              <div>
                {data.meals.map((meal) => (
                  <SearchCard key={meal.idMeal} meal={meal} />
                ))}
              </div>
            )}
            {searchMeal && data && !data.meals && <p>No meals found.</p>}
            {!searchMeal && <p>No search meals</p>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="gray"
            className="ms-auto"
            onClick={() => setOpenModal(false)}
          >
            Cancle
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SearchModal;
