import React from "react-native";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
const cliente = new QueryClient();
ReactDOM.render(
  <QueryClientProvider client={cliente}>
    <App />
  </QueryClientProvider>,
  document.getElementById("root")
);