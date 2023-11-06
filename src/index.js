import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import GlobalStyles from "./styles/GlobalStyles";
import Loading from "./components/Loading/Loading";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RecoilRoot>
    <Suspense fallback={<Loading />}>
      <GlobalStyles />
      <App />
    </Suspense>
  </RecoilRoot>
  // </React.StrictMode>
);
