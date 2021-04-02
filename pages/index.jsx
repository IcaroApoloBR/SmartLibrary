import React from "react";
import App from "../src/App";
import ls from "local-storage";

const Index = ({ user, isServer, query }) => {
  const isBrowser = typeof window !== "undefined";
  console.log(user, isServer, isBrowser)

  // this means running on first page load and inside the browser so should store in local storage
  if (isServer && isBrowser) ls.set("userInfo",user)
  return (<App pageName="Home" userInfo={user} query={query} />);
};

Index.getInitialProps = async ({ query, user, req }) => {
  const isServer = !!req;
  if (isServer) return { user: req.user, isServer, query };
  else {
    try {
      const user = ls.get("userInfo");
      return { user, isServer };
    } catch (e) {
      return { isServer };
    }
  }
};

export default Index;
