import Image from "next/image";
import Navbar from "./Navbar"; // This will be client

export default function Header() {
  return (
    <header className="px-5 py-6 w-full mx-auto 2xl:max-w-[1636px] flex items-center justify-between">
        <Image src="/Web_icon.svg" alt="Logo" width={138} height={28} priority />
        <Navbar />
    </header>
  );
}
