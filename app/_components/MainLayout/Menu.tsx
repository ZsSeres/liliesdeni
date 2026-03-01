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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          px-6 py-3
          bg-black/30 backdrop-blur-md shadow-lg
          rounded-full
          border border-white/10
        "
      >
        <ul className="flex items-center justify-center space-x-6 sm:space-x-10">
          {elements.map((el, idx) => {
            const isActive = currentSection === el.href;

            return (
              <li key={idx}>
                <a
                  href={`#${el.href}`}
                  className={`
                    flex items-center justify-center
                    text-lg
                    transition-colors duration-200
                    ${
                      isActive
                        ? "text-yellow-400 font-semibold"
                        : "text-white hover:text-gray-300"
                    }
                  `}
                >
                  {/* 🔹 Mobile: Icon Only */}
                  {el.icon && (
                    <span className="sm:hidden">
                      {el.icon}
                    </span>
                  )}

                  {/* 🔹 Desktop: Text */}
                  <span className="hidden sm:inline">
                    {el.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};