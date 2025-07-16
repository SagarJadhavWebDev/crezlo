import { ReactNode } from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  color?: "violet" | "sky" | "green" | "yellow" | "red" | "blue" | "gray" | "dark";
  className?: string;
  icon?: ReactNode;
}

export const Badge = ({ children, size = "md", color = "gray", className = "", icon, ...props }: BadgeProps) => {
  // Size classes
  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-2.5 py-1",
    lg: "text-base px-3 py-1",
  };

  // Color classes
  const colorClasses = {
    violet: "bg-violet-500/20 text-violet-600 dark:text-violet-400",
    sky: "bg-sky-500/20 text-sky-700 dark:text-sky-500",
    green: "bg-green-500/20 text-green-700 dark:text-green-500",
    yellow: "bg-yellow-500/20 text-yellow-700 dark:text-yellow-500",
    red: "bg-red-500/20 text-red-700 dark:text-red-500",
    blue: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
    gray: "bg-gray-400/20 text-gray-500 dark:text-gray-400",
    dark: "bg-gray-700 text-gray-100 dark:bg-gray-200 dark:text-gray-600",
  };

  return (
    <div {...props} className={`inline-flex items-center font-medium rounded-full ${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </div>
  );
};
