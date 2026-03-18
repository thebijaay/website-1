import { useEffect, useState } from "react";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "About Me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "My Work", href: "#work" },
    { name: "Contact Me", href: "#contact" },
  ];

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(
      savedTheme
        ? savedTheme === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }, []);

  // Apply theme whenever it changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Update Nepal time every second
  useEffect(() => {
    const updateTime = () => {
      const nepalTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kathmandu",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(nepalTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300
        ${isDarkMode ? "bg-darkBg" : "bg-lightBg"} shadow-sm`}
    >
      {/* Left Section: Logo */}
      <div className="flex items-center gap-4">
        <a href="#top">
          <img
            src={isDarkMode ? "/assets/logo_dark.png" : "/assets/logo.png"}
            alt="Logo"
            className="w-28 cursor-pointer"
          />
        </a>
      </div>

      {/* Center Section: Nepal Time */}
      <div className="hidden md:flex text-lg md:text-xl font-semibold font-Ovo text-lightText dark:text-darkText">
        🇳🇵 {time}
      </div>

      {/* Right Section: Desktop Menu + Dark Mode + Contact + Mobile */}
      <div className="flex items-center gap-4">
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-lightBg dark:bg-darkBg shadow-sm border border-lightBorder dark:border-darkBorder">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-Ovo text-lightText dark:text-darkText hover:text-lightAccent dark:hover:text-darkAccent duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => {
            // Only toggle dark if currently light
            if (!isDarkMode) setIsDarkMode(true);
          }}
          className="p-1 rounded-full hover:bg-lightBorder dark:hover:bg-darkBorder transition"
        >
          <img
            src={isDarkMode ? "/assets/sun_icon.png" : "/assets/moon_icon.png"}
            alt="Theme Toggle"
            className="w-6"
          />
        </button>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-lightBorder rounded-full ml-4 font-Ovo text-lightText dark:text-darkText dark:border-darkBorder hover:bg-lightAccent hover:text-white dark:hover:bg-darkAccent dark:hover:text-white transition"
        >
          Contact
          <img
            src={isDarkMode ? "/assets/arrow-icon-dark.png" : "/assets/arrow-icon.png"}
            alt=""
            className="w-3"
          />
        </a>

        {/* Mobile Menu Button */}
        <button className="block md:hidden ml-3" onClick={toggleMenu}>
          <img
            src={isDarkMode ? "/assets/menu-white.png" : "/assets/menu-black.png"}
            alt="Menu"
            className="w-6"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 right-0 w-64 z-50 h-screen transition-transform duration-500
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          ${isDarkMode ? "bg-darkBg text-darkText" : "bg-lightBg text-lightText"}`}
      >
        <div className="absolute right-6 top-6" onClick={toggleMenu}>
          <img
            src={isDarkMode ? "/assets/close-white.png" : "/assets/close-black.png"}
            alt="Close"
            className="w-5 cursor-pointer"
          />
        </div>

        {navLinks.map((link) => (
          <li key={link.name} onClick={toggleMenu}>
            <a
              href={link.href}
              className="font-Ovo text-lightText dark:text-darkText hover:text-lightAccent dark:hover:text-darkAccent"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
