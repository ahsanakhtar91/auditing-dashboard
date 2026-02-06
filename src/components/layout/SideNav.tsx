import {
  frameToggleIcon,
  homeIcon,
  medicalFileIcon,
  profileIcon,
  fileIcon,
  userMultipleIcon,
  chartBarLineIcon1
} from "../../assets";
import tahwulLogo from "../../assets/tahwul-01-3x-1.png";
import { Icon } from "../core/Icon";

export interface NavItem {
  icon: string;
  label: string;
  id: string;
}

interface SideNavProps {
  activeItem: string;
  collapsed?: boolean;
  onNavigate?: (page: string) => void;
  onToggleCollapse?: () => void;
  isMobile?: boolean;
}

const navigationItems: NavItem[] = [
  { icon: homeIcon, label: "Dashboard", id: "dashboard" },
  { icon: medicalFileIcon, label: "Perspectives", id: "perspectives" },
  { icon: profileIcon, label: "Tasks", id: "tasks" },
  { icon: fileIcon, label: "Documents", id: "documents" },
  { icon: chartBarLineIcon1, label: "Reports", id: "reports" },
  { icon: userMultipleIcon, label: "Users & Roles", id: "users" },
];

export const SideNav = ({ activeItem, collapsed = false, onNavigate, onToggleCollapse, isMobile }: SideNavProps) => {
  return (
    <aside
      className={`bg-[#1d3557] border-r border-[#f1f2f3] flex flex-col min-h-screen transition-all duration-300 ease-in-out relative ${collapsed ? "w-[72px]" : "w-64"
        }`}
    >
      {/* Toggle button - positioned half on sidebar, half on content (hidden on mobile) */}
      {!isMobile && (
        <button
          onClick={onToggleCollapse}
          className="absolute top-[14px] -right-4 z-50 w-8 h-8 flex flex-row items-center justify-center bg-white shadow-[0px_0px_2px_rgba(0,0,0,0.1)] rounded-2xl hover:shadow-[0px_0px_4px_rgba(0,0,0,0.15)] transition-shadow"
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
        <Icon
            className={`transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`}
            alt="Toggle sidebar"
            src={frameToggleIcon}
            size="lg"
          />
        </button>
      )}
      <div className={`p-6 ${collapsed ? "flex justify-center" : ""}`}>
        {collapsed ? (
          <Icon
            className="object-contain"
            alt="Tahwul"
            src={tahwulLogo}
            size="xl"
          />
        ) : (
          <Icon
            className="w-[100px] h-10 object-cover"
            alt="Tahwul"
            src={tahwulLogo}
          />
        )}
      </div>

      <nav className={`flex-1 py-4 space-y-2 ${collapsed ? "px-3" : "px-6"}`}>
        {navigationItems.map((item) => {
          const isActive = item.id === activeItem;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate?.(item.id)}
              title={collapsed ? item.label : undefined}
              className={`flex w-full items-center gap-2.5 p-2.5 rounded-lg transition-colors ${isActive
                ? "bg-[#98aec01a] text-white"
                : "text-[#7a9ec2] hover:bg-[#98aec01a] hover:text-white"
                } ${collapsed ? "justify-center" : ""}`}
            >
              <Icon src={item.icon} size="sm" className="flex-shrink-0" />
              {!collapsed && (
                <span className="font-medium text-sm whitespace-nowrap overflow-hidden">
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </nav>

    </aside>
  );
};
