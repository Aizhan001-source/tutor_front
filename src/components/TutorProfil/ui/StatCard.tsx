import type { ReactNode } from "react";

export const StatCard = ({
  title,
  value,
  icon,
  color,
}: {
  title: string;
  value: number | string;
  icon: ReactNode;
  color: string;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center gap-4">
        <div className={`${color} p-3 rounded-lg`}>
          {icon}
        </div>

        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
};