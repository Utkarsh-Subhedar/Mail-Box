import { Search, Bell, CircleUser } from "lucide-react";

function Header() {
  return (
    <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6">
      {/* Search Bar */}
      <div className="flex items-center bg-slate-100 px-3 py-1.5 rounded-md w-80">
        <Search size={18} className="text-slate-500" />
        <input
          type="text"
          placeholder="Search mail..."
          className="bg-transparent outline-none ml-2 text-sm w-full"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        <Bell size={20} className="text-slate-600 cursor-pointer" />
        <CircleUser size={28} className="text-slate-700 cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
