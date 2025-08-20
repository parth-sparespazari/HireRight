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
    <nav className="flex items-center gap-4">
      {links.map(({ href, label }) => {
        const isActive = pathname === href;

        return (
            <Link
                key={href}
                href={href}
                className={`relative overflow-hidden font-hanken rounded-xl px-5 py-3 text-md font-medium transition hover:bg-[#6567E2] hover:text-white
                    ${isActive ? "bg-indigo-500 text-white" : "text-gray-600"}
                `}
                >
                    <span
          className="
            absolute -left-6 bottom-0 w-40 h-20
            bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.5),transparent_70%)]
            opacity-0 active:opacity-100
            transition-opacity duration-200
            rounded-full
          "
        />
                    {label}
            </Link>
        );
      })}
    </nav>
  );
}
