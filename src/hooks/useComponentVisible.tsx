import { useState, useEffect, useRef } from "react";

export default function useComponentVisible(
  isActive: boolean,
  initialIsVisible: boolean,
  onVisibilityChange?: any
) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef<HTMLDivElement>(null);

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (isActive && event.key === "Escape") {
      setIsComponentVisible(false);
      onVisibilityChange(false);
    }
  };

  const handleClickOutside = (event: Event) => {
    if (isActive && ref.current && !ref.current.contains(event.target as Node)) {
      setIsComponentVisible(false);
      onVisibilityChange(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}
