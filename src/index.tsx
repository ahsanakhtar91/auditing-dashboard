import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { Dashboard } from "./screens/Dashboard";
import { Perspectives } from "./screens/Perspectives";

const App = () => {
  const [currentPage, setCurrentPage] = useState<string>("dashboard");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <>
      {currentPage === "dashboard" && <Dashboard onNavigate={handleNavigate} />}
      {currentPage === "perspectives" && <Perspectives onNavigate={handleNavigate} />}
    </>
  );
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
