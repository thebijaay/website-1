import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

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
      <nav
        ref={navRef}
        className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300"
      >
        <a href="#top">
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

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="font-Ovo hover:text-gray-500 duration-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

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

        {/* -- mobile menu -- */}
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
