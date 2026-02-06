import {
  BarChart3Icon,
  CheckSquareIcon,
  FileIcon,
  FileTextIcon,
  HomeIcon,
  UsersIcon,
  LucideIcon,
} from "lucide-react";

export interface NavItem {
  icon: LucideIcon;
  label: string;
  id: string;
}

interface SideNavProps {
  activeItem: string;
  collapsed?: boolean;
  onNavigate?: (page: string) => void;
  onToggleCollapse?: () => void;
}

const navigationItems: NavItem[] = [
  { icon: HomeIcon, label: "Dashboard", id: "dashboard" },
  { icon: FileTextIcon, label: "Perspectives", id: "perspectives" },
  { icon: CheckSquareIcon, label: "Tasks", id: "tasks" },
  { icon: FileIcon, label: "Documents", id: "documents" },
  { icon: BarChart3Icon, label: "Reports", id: "reports" },
  { icon: UsersIcon, label: "Users & Roles", id: "users" },
];

export const SideNav = ({ activeItem, collapsed = false, onNavigate, onToggleCollapse }: SideNavProps) => {
  return (
    <aside 
      className={`bg-[#1d3557] border-r border-[#f1f2f3] flex flex-col min-h-screen transition-all duration-300 ease-in-out relative ${
        collapsed ? "w-[72px]" : "w-64"
      }`}
    >
      {/* Toggle button - positioned half on sidebar, half on content */}
      <button 
        onClick={onToggleCollapse}
        className="absolute top-5 -right-[18px] z-50 w-9 h-9 flex items-center justify-center hover:opacity-80 transition-opacity"
        title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <img 
          className={`w-9 h-9 transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`} 
          alt="Toggle sidebar" 
          src="/frame-1171274846.svg" 
        />
      </button>
      <div className={`p-6 ${collapsed ? "flex justify-center" : ""}`}>
        {collapsed ? (
          <img
            className="w-10 h-10 object-contain"
            alt="Tahwul"
            src="/tahwul-01-3x-1.png"
          />
        ) : (
          <img
            className="w-[100px] h-10 object-cover"
            alt="Tahwul"
            src="/tahwul-01-3x-1.png"
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
              className={`flex w-full items-center gap-2.5 p-2.5 rounded-lg transition-colors ${
                isActive
                  ? "bg-[#98aec01a] text-white"
                  : "text-[#7a9ec2] hover:bg-[#98aec01a] hover:text-white"
              } ${collapsed ? "justify-center" : ""}`}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              {!collapsed && (
                <span className="[font-family:'Cairo',Helvetica] font-medium text-sm whitespace-nowrap overflow-hidden">
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
