import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

export const NavBar: React.FC = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Issues", href: "/issues" },
    { label: "Projects", href: "/projects" },
  ];
  return (
    <nav className="flex border-b space-x-6 mb-5 px-3 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
