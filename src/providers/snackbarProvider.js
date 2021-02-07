import React, { useState } from "react";
import Toast from "../../components/Toast";
import _ from "lodash";

export const SnabarContext = React.createContext();

function DialogProvider({ children }) {
  const [toast, setToast] = useState({});
  const snackbar = (toast) => {
    setToast("");
    setTimeout(() => {
      setToast(toast);
    }, 200);
  };

  return (
    <SnabarContext.Provider value={{ snackbar, setToast }}>
      {children}
      <div>{!_.isEmpty(toast) && <Toast {...{ ...toast }} />}</div>
    </SnabarContext.Provider>
  );
}

export default DialogProvider;
