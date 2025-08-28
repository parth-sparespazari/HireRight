"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/plans", label: "Explore Plans" },
  ];

  // Scroll lock for sidenav
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Sticky header after scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className={`${isFixed ? "fixed top-0 left-0 right-0 shadow-xl z-30" : "relative"} transition ${(pathname === '/') ? "bg-white" : "bg-[#F5EFE3]"}`}
      >
        <div className="px-4 sm:px-5 py-4 sm:py-5 w-full mx-auto 2xl:max-w-[1636px] flex items-center justify-between transition-all duration-300 z-50">
          {/* Logo */}
          <div>
            <Image
              src="/Web_icon.svg"
              alt="Logo"
              width={138}
              height={28}
              priority
              className="hidden sm:inline-flex"
            />
            <Image
              src="/Web_icon2.svg"
              alt="Logo"
              width={85}
              height={20}
              priority
              className="inline-flex sm:hidden"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex items-center gap-3">
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative overflow-hidden font-hanken rounded-[0.7em] md:rounded-[1em] px-4 py-2 md:px-6 md:py-4 text-md font-medium transition-all duration-300 ease-in-out hover:bg-[#7173e4] hover:text-white active:rounded-[0.7em]
                    ${isActive ? "bg-[#6567e2] text-white" : "text-gray-600"}
                  `}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Nav */}
          <nav className="flex sm:hidden items-center gap-5">
            <Link
              href="/plans"
              className="rounded-[0.7em] md:rounded-[1em] px-4 py-2 md:px-6 md:py-4 text-md font-medium transition-all duration-300 ease-in-out bg-[#6567e2] text-white hover:bg-[#7173e4] active:rounded-[0.7em]"
            >
              Explore Plans
            </Link>
            <button className="md:hidden" onClick={() => setIsOpen(true)}>
              <Image
                src="/icons/Hamberger.svg"
                alt="Hamburger"
                width={20}
                height={20}
                priority
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Nav */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[300px] flex flex-col gap-5 p-5 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between mb-4">
          <Image
            src="/Web_icon2.svg"
            alt="Logo"
            width={85}
            height={20}
            priority
            className="inline-flex sm:hidden"
          />
          <button className="md:hidden" onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`relative overflow-hidden font-hanken rounded-[0.7em] md:rounded-[1em] px-4 py-2 md:px-6 md:py-4 text-md font-medium transition-all duration-300 ease-in-out hover:bg-[#7173e4] hover:text-white active:rounded-[0.7em]
                ${isActive ? "bg-[#6567e2] text-white" : "text-gray-600"}
              `}
            >
              {label}
            </Link>
          );
        })}
      </aside>
    </>
  );
}
