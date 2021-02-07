import React, { useState } from "react";

export const DialogContext = React.createContext();

function DialogProvider({ children }) {
  const [state, setState] = useState({
    type: "",
    callBack: () => {},
  });
  const [dialogData, setDialogData] = useState("");

  const value = React.useMemo(() => {
    return {
      state,
      setState,
      dialogData,
      setDialogData,
    };
  }, [state, setState, dialogData, setDialogData]);

  return (
    <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
  );
}

export default DialogProvider;
