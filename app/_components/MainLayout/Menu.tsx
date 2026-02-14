"use client";

export type MenuElement = {
  href: string;
  label: string;
  icon?: React.ReactNode;
};

export const Menu = ({
  elements,
  currentSection = null,
}: {
  elements: MenuElement[];
  currentSection: string | null;
}) => {
  return (
    <nav
      className="
        fixed top-0 inset-x-0 z-50
        transition-all duration-300 bg-transparent
      "
    >
      <ul className="flex justify-center space-x-6 sm:space-x-10 py-4">
        {elements.map((el, idx) => {
          const isActive = currentSection === el.href;

          return (
            <li key={idx}>
              <a
                href={`#${el.href}`}
                className={`
                  flex items-center justify-center
                  text-lg
                  ${isActive
                    ? "text-yellow-400 font-semibold"
                    : "text-white hover:text-gray-600"}
                  transition-colors duration-200
                `}
              >
                {/* 🔹 Mobile: Icon Only */}
                {el.icon && (
                  <span className="sm:hidden">
                    {el.icon}
                  </span>
                )}

                {/* 🔹 Desktop: Text (optionally icon + text) */}
                <span className="hidden sm:inline">
                  {el.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};