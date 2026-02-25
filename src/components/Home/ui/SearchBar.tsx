import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-3 items-center">
      <div className="relative flex-1 w-full">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search by subject, tutor name, or specialty..."
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-slate-400 text-slate-600"
        />
      </div>
      <div className="w-full md:w-64">
        <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none cursor-pointer" 
                style={{ backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%2394a3b8%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%276 9 12 15 18 9%27%3E%3C/polyline%3E%3C/svg%3E")', 
                         backgroundRepeat: 'no-repeat', 
                         backgroundPosition: 'right 1rem center', 
                         backgroundSize: '1.2em' }}>
          <option>All Subjects</option>
          <option>Mathematics</option>
          <option>Physics</option>
          <option>Computer Science</option>
        </select>
      </div>
    </div>
  );
};