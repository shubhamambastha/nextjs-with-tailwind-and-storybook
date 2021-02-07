import cookie from "cookie";

const parseCookies = (req, options = {}) =>
  cookie.parse(req ? req.headers.cookie || "" : document.cookie, options);

export { parseCookies };
