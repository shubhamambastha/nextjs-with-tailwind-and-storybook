import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useSnackbar from "../src/hooks/useSnackbar";

const Toast = ({ message, variant, autoDelete, onExit, dismissTime }) => {
  const [displayMsg, setDisplayMsg] = useState(message);
  const { setToast } = useSnackbar();
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && message && displayMsg) {
        setDisplayMsg("");
        setToast({});
        onExit();
      }
    }, dismissTime);

    return () => {
      clearInterval(interval);
    };
  }, [displayMsg, autoDelete, dismissTime, message]);

  const setBgColor = (variant) => {
    switch (variant) {
      case "success": {
        return "bg-green-600";
      }
      case "error": {
        return "bg-red-600";
      }
      case "yellow": {
        return "bg-yellow-600";
      }
    }
  };

  return (
    <>
      {displayMsg && (
        <div
          className={`${setBgColor(
            variant
          )} flex items-center animate-toast-top sm:animate-toast-left toastContainer fixed mt-5 right-0 top-0 text-white ml-10 mr-5 sm:mr-10 px-4 py-3 rounded z-50`}
          style={{
            minWidth: 200,
            maxWidth: 400,
          }}
          role="alert"
        >
          <div className="flex flex-1">{displayMsg}</div>
          <div
            className="pl-4"
            onClick={() => {
              setDisplayMsg("");
              setToast({});
              onExit();
            }}
          >
            <svg
              className="fill-current h-6 w-6 text-white"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

Toast.defaultProps = {
  message: "",
  variant: "success",
  autoDelete: true,
  dismissTime: 3000,
  onExit: () => {},
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  autoDelete: PropTypes.bool,
  variant: PropTypes.string,
  dismissTime: PropTypes.number,
  onExit: PropTypes.func,
};

export default Toast;
