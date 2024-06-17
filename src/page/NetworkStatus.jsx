import { useEffect, useState } from "react";

const NetworkStatus = () => {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
    };
    const handleOffline = () => {
      setIsOffline(true);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);
  return (
    <div>
      {isOffline && (
        <div
          className="mt-2 bg-red-100 border-s-4 border-s-red-600 border-red-200 text-sm text-red-800 rounded-lg p-4 dark:bg-red-800/10 dark:border-red-900 dark:text-red-500"
          role="alert"
        >
          <span className="font-semibold">
            You are offline. Please check your internet connection.
          </span>
        </div>
      )}
    </div>
  );
};

export default NetworkStatus;
