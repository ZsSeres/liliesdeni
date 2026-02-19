"use client";

import { useEffect, useState } from "react";

export default function useSectionTracker() {
  const [section, setSection] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      setSection(window.location.hash.slice(1) || "");
    };

    // Run once on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return {section};
}
