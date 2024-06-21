// app/_components/Header.tsx

import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 z-10">
      <nav className="container mx-auto flex justify-between">
        <div className="space-x-4">
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/event">Event</Link>
          <Link href="/press">Press</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/booknow">Book Now</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
