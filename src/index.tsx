import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Dashboard } from "./screens/Dashboard";
import { Perspectives } from "./screens/Perspectives";
import { SideNav } from "./components/layout/SideNav";
import { Header } from "./components/layout/Header";

const App = () => {
  const [currentPage, setCurrentPage] = useState<string>("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarCollapsed(true);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    if (isMobile) setSidebarCollapsed(true);
  };

  return (
    <div className="flex min-h-screen bg-background-color">
      {/* Mobile overlay */}
      {isMobile && !sidebarCollapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarCollapsed(true)}
        />
      )}

      <div className={`${isMobile ? "fixed z-50 h-full" : ""} ${isMobile && sidebarCollapsed ? "-translate-x-full" : "translate-x-0"} transition-transform duration-300`}>
        <SideNav
          activeItem={currentPage}
          collapsed={isMobile ? false : sidebarCollapsed}
          onNavigate={handleNavigate}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          isMobile={isMobile}
        />
      </div>

      <main className="flex-1 flex flex-col min-w-0">
        <Header 
          onMenuClick={() => setSidebarCollapsed(!sidebarCollapsed)} 
          isMobile={isMobile} 
        />

        <div className="flex-1 overflow-auto">
          {currentPage === "dashboard" && <Dashboard onNavigate={handleNavigate} />}
          {currentPage === "perspectives" && <Perspectives onNavigate={handleNavigate} />}
        </div>
      </main>
    </div>
  );
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
