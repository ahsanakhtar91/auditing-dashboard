import {
  BellIcon,
  ChevronDownIcon,
  SearchIcon,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar";
import { Input } from "../ui/input";

interface HeaderProps {
  userName?: string;
  userAvatar?: string;
}

export const Header = ({ 
  userName = "Mohamed", 
  userAvatar = "/ellipse-18.svg" 
}: HeaderProps) => {
  return (
    <header className="h-[60px] bg-white border-b border-[#e0e7ec] flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <img className="w-9 h-9" alt="Menu" src="/frame-1171274846.svg" />
        <div className="relative">
          <Input
            placeholder="Search"
            className="w-[318px] h-[34px] bg-background-color border-[#e0e7ec] pl-10 [font-family:'Cairo',Helvetica]"
          />
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-color" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative">
          <BellIcon className="w-4 h-4 text-primary-color" />
          <span className="absolute -top-1 -right-1 w-[7px] h-[7px] bg-accent-red rounded-full" />
        </button>

        <button className="flex items-center gap-2 h-8 px-3 bg-[#f9fafa] rounded-[30px]">
          <Avatar className="w-6 h-6">
            <AvatarImage src={userAvatar} />
            <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="font-typography-label text-[#23252a] text-xs">
            {userName}
          </span>
          <ChevronDownIcon className="w-3 h-3 text-[#23252a]" />
        </button>
      </div>
    </header>
  );
};
