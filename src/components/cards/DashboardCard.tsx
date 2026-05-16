import type { LucideIcon } from "lucide-react";

type DashboardCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  progress: number;
};

export default function DashboardCard({
  title,
  description,
  icon: Icon,
  progress,
}: DashboardCardProps) {
  return (
    <article className="group border border-green-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl">
      <div className="flex h-14 w-14 items-center justify-center bg-green-50 text-green-700 transition group-hover:bg-green-700 group-hover:text-white">
        <Icon size={28} />
      </div>

      <h3 className="mt-6 text-lg font-bold text-green-950">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {description}
      </p>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-xs text-gray-500">
          <span>प्रगति</span>
          <span>{progress}%</span>
        </div>

        <div className="h-2 w-full overflow-hidden bg-green-50">
          <div
            className="h-full bg-green-700 transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </article>
  );
}