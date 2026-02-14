
import { ReactNode, useState } from "react";

interface InfoElementProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function InfoElement({
  title,
  icon,
  children,
  defaultOpen = false,
}: InfoElementProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-400 w-full">
      {/* Header */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 cursor-pointer select-none "
      >
        {/* Left side */}
        <div className="flex items-center gap-3">
          {icon && <div className="text-indigo-600">{icon}</div>}
          <h3 className="text-xl font-medium text-gray-900">
            {title}
          </h3>
        </div>

        {/* Arrow */}
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Body */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-5 text-gray-600 text-left">{children}</div>
        </div>
      </div>
    </div>
  );
}