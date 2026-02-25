import { Bookmark, LogOut } from "lucide-react";

export const NavBar = () => {
  return (
    <nav className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-[#4f46e5] p-2 rounded-xl">
          <Bookmark className="text-white w-6 h-6" fill="white" />
        </div>
        <span className="text-2xl font-bold text-[#1e293b]">
          CramMaster
        </span>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-6">
        <a className="text-[#334155] font-medium hover:text-indigo-600 transition-colors">
          Find Tutors
        </a>
        <a className="text-[#334155] font-medium hover:text-indigo-600 transition-colors">
          My Courses
        </a>
        <a className="text-[#334155] font-medium hover:text-indigo-600 transition-colors">
          Messages
        </a>
      </div>

      {/* Logout */}
      <button className="flex items-center gap-2 text-[#334155] font-medium hover:text-red-500 transition-colors group">
        <LogOut className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        <span>Logout</span>
      </button>
    </nav>
  );
};
