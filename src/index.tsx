import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { Dashboard } from "./screens/Dashboard";
import { Perspectives } from "./screens/Perspectives";
import { SideNav } from "./components/layout/SideNav";
import { Header } from "./components/layout/Header";

const App = () => {
  const [currentPage, setCurrentPage] = useState<string>("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex min-h-screen bg-background-color">
      <SideNav
        activeItem={currentPage}
        collapsed={sidebarCollapsed}
        onNavigate={handleNavigate}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <main className="flex-1 flex flex-col">
        <Header />

        {currentPage === "dashboard" && <Dashboard onNavigate={handleNavigate} />}
        {currentPage === "perspectives" && <Perspectives onNavigate={handleNavigate} />}
      </main>
    </div>
  );
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
