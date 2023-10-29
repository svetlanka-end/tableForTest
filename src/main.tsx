import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import { App } from "@/App";

import "./index.css";

if (import.meta.env.MODE === "production") {
  disableReactDevTools();
}

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
