import Router from "next/router";

const redirect = (res, pathName) => {
  if (res) {
    res.writeHead(302, { Location: pathName });
    res.end();
    res.finished = true;
  } else {
    Router.push(pathName);
  }
};

export { redirect };
