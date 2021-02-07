import { useContext } from "react";
import { DialogContext } from "../providers/dialogProviders";

export default function useDialog() {
  const context = useContext(DialogContext);
  if (context === undefined) {
    throw new Error("useDialog must be used within a dialogProvider");
  }
  return context;
}
