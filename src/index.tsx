// src/index.tsx
import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";

ReactDOM.render(
  <ApolloProvider client={client}></ApolloProvider>,
  document.getElementById("root")
);
