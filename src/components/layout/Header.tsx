import {
  BellIcon,
  SearchIcon,
  MenuIcon,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../core/Avatar";
import { Input } from "../core/Input";
import { Icon } from "../core/Icon";
import { chevronDownIcon, avatarEllipse18 } from "../../assets";

interface HeaderProps {
  userName?: string;
  userAvatar?: string;
  onMenuClick?: () => void;
  isMobile?: boolean;
}

export const Header = ({ 
  userName = "Mohamed", 
  userAvatar = avatarEllipse18,
  onMenuClick,
  isMobile,
}: HeaderProps) => {
  return (
    <header className="h-[60px] bg-white border-b border-[#e0e7ec] flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-3 md:gap-4">
        {isMobile && (
          <button 
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <MenuIcon className="w-5 h-5 text-primary-color" />
          </button>
        )}
        <div className="relative hidden sm:block">
          <Input
            placeholder="Search"
            className="w-[200px] md:w-[318px] pl-10"
          />
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-color" />
        </div>
        {/* Mobile search icon */}
        <button className="sm:hidden p-2 hover:bg-gray-100 rounded-lg">
          <SearchIcon className="w-5 h-5 text-primary-color" />
        </button>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button className="relative p-2">
          <BellIcon className="w-4 h-4 text-primary-color" />
          <span className="absolute top-1 right-1 w-[7px] h-[7px] bg-accent-red rounded-full" />
        </button>

        <button className="flex items-center gap-2 h-8 px-1 bg-[#f9fafa] rounded-[30px]">
          <Avatar className="w-6 h-6">
            <AvatarImage src={userAvatar} />
            <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="hidden sm:inline font-typography-label text-[#23252a] text-xs">
            {userName}
          </span>
          <Icon src={chevronDownIcon} size="xs" className="hidden sm:block" />
        </button>
      </div>
    </header>
  );
};
