import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  };
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [time, setTime] = useState("");
  const navRef = useRef(null);

  // Dark mode
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // -------- light mode and dark mode -----------
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current.classList.add(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20"
        );
      } else {
        navRef.current.classList.remove(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20"
        );
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Nepal Time with seconds
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

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "About Me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "My Work", href: "#work" },
    { name: "Contact Me", href: "#contact" },
  ];

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <img src="/assets/header-bg-color.png" alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScrolled
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#!">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="w-28 cursor-pointer mr-14 dark:hidden"
          />
          <img
            src="/assets/logo_dark.png"
            alt="Logo"
            className="w-28 cursor-pointer mr-14 hidden dark:block"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 font-Ovo ${
            isScrolled
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/30 dark:bg-transparent"
          }`}
        >
          <li>
            <a
              className="hover:text-gray-500 dark:hover:text-gray-300 transition"
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-500 dark:hover:text-gray-300 transition"
              href="#about"
            >
              About me
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-500 dark:hover:text-gray-300 transition"
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-500 dark:hover:text-gray-300 transition"
              href="#work"
            >
              Work
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-500 dark:hover:text-gray-300 transition"
              href="#contact"
            >
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={toggleTheme}>
            <img src="/assets/moon_icon.png" alt="" className="w-5 dark:hidden" />
            <img
              src="/assets/sun_icon.png"
              alt=""
              className="w-5 hidden dark:block"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-8 py-1.5 border border-gray-300 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full ml-4 font-Ovo dark:border-white/30"
          >
            Contact
            <img
              src="/assets/arrow-icon.png"
              alt=""
              className="w-3 dark:hidden"
            />
            <img
              src="/assets/arrow-icon-dark.png"
              alt=""
              className="w-3 hidden dark:block"
            />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <img
              src="/assets/menu-black.png"
              alt=""
              className="w-6 dark:hidden"
            />
            <img
              src="/assets/menu-white.png"
              alt=""
              className="w-6 hidden dark:block"
            />
          </button>
        </div>
        {/* -- ----- mobile menu ------  -- */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white ${
            isMenuOpen ? "right-0" : "-right-64"
          }`}
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <img
              src="/assets/close-black.png"
              alt=""
              className="w-5 cursor-pointer dark:hidden"
            />
            <img
              src="/assets/close-white.png"
              alt=""
              className="w-5 cursor-pointer hidden dark:block"
            />
          </div>

          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>
              Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact me
            </a>
          </li>
      <nav
        ref={navRef}
        className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300"
      >
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <a href="#top" className="flex items-center">
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="w-28 cursor-pointer mr-2 dark:hidden"
            />
            <img
              src="/assets/logo_dark.png"
              alt="Logo"
              className="w-28 cursor-pointer mr-2 hidden dark:block"
            />
          </a>

          {/* Time */}
          <div className="text-sm md:text-base font-medium font-Ovo text-gray-700 dark:text-white">
            🇳🇵 {time}
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="font-Ovo hover:text-gray-500 duration-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            <img src="/assets/moon_icon.png" alt="" className="w-6 dark:hidden" />
            <img src="/assets/sun_icon.png" alt="" className="w-6 hidden dark:block" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact
            <img src="/assets/arrow-icon.png" alt="" className="w-3 dark:hidden" />
            <img src="/assets/arrow-icon-dark.png" alt="" className="w-3 hidden dark:block" />
          </a>

          <button className="block md:hidden ml-3" onClick={toggleMenu}>
            <img src="/assets/menu-black.png" alt="" className="w-6 dark:hidden" />
            <img src="/assets/menu-white.png" alt="" className="w-6 hidden dark:block" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white ${
            isMenuOpen ? "transform -translate-x-64" : ""
          }`}
        >
          <div className="absolute right-6 top-6" onClick={toggleMenu}>
            <img
              src="/assets/close-black.png"
              alt=""
              className="w-5 cursor-pointer dark:hidden"
            />
            <img
              src="/assets/close-white.png"
              alt=""
              className="w-5 cursor-pointer hidden dark:block"
            />
          </div>

          {navLinks.map((link) => (
            <li key={link.name} onClick={toggleMenu}>
              <a href={link.href} className="font-Ovo">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
