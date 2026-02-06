import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Perspectives } from "./screens/Perspectives";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Perspectives />
  </StrictMode>,
);
