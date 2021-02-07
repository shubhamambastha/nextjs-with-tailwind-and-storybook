import { createContext, useState, useMemo, useEffect } from "react";
import Cookie from "js-cookie";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [userObj, setUserObj] = useState(null);

  /**
   * This useEffec to check the token is present in the local storage or not
   */
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    } else {
      setToken("");
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      Cookie.set("token", token);
      const tokenObj = jwt_decode(token)?.claims;
      setUserObj(tokenObj);
    } else {
      localStorage.removeItem("token");
      Cookie.remove("token");
      setUserObj(null);
    }
  }, [token]);

  const value = useMemo(() => {
    return {
      token,
      setToken,
      userObj,
      setUserObj,
    };
  }, [token, setToken, userObj, setUserObj]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
