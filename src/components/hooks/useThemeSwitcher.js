import React, { useState, useEffect } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      const check = userPref
        ? userPref === "dark"
          ? "dark"
          : "light"
        : mediaQuery.matches
        ? "dark"
        : "light";
      setMode(check);
      document.documentElement.classList.toggle("dark", check === "dark");
    };

    handleChange();
    setMounted(true); // Mark that the component has mounted

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mounted) {
      window.localStorage.setItem("theme", mode);
      document.documentElement.classList.toggle("dark", mode === "dark");
    }
  }, [mode, mounted]);

  return [mode, setMode];
};

export default useThemeSwitcher;
