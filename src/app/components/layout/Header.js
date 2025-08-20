import Image from "next/image";
import Navbar from "./Navbar"; // This will be client

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-sm">
        <Image src="/Web_icon.svg" alt="Logo" width={138} height={28} priority />
        <Navbar />
    </header>
  );
}
