import { useContext } from "react";
import { SnabarContext } from "../providers/snackbarProvider";

export default function useSnackbar() {
  const context = useContext(SnabarContext);
  if (context === undefined) {
    throw new Error("useSnackbar must be used within a snackProvider");
  }
  return context;
}
