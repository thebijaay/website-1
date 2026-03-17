import { useEffect, useRef } from "react";

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={headerRef}
      className="header-slide w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      <img
        src="/assets/user-image.png"
        alt="Profile"
        className="rounded-full w-32"
      />

      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I&apos;m Kiran Pokhrel
        <img src="/assets/hand-icon.png" alt="Wave" className="w-6 mb-1" />
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        IT & Web Development Enthusiast.
      </h1>

      <p className="max-w-2xl mx-auto font-Ovo">
        I am currently a Bachelor&apos;s student pursuing a degree in Business Studies,
        with a strong interest in the IT field.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        
        {/* Contact Button */}
        <a
          href="#contact"
          className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          Contact Me
          <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
        </a>

        {/* Resume Download Button */}
        <a
          href="/assets/Kiran_Resume.pdf"
          download
          className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white"
        >
          My Resume
          <img
            src="/assets/download-icon.png"
            alt="Download"
            className="w-4 dark:invert"
          />
        </a>

      </div>
    </div>
  );
}
