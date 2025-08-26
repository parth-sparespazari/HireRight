"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/plans", label: "Explore Plans" },
  ];

  return (
    <nav className="flex items-center gap-3">
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
  );
}
