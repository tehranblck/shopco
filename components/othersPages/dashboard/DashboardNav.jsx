"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContextElement } from "../../../context/Context";
const accountLinks = [
  { href: "/my-account", label: "Mənim Hesabım" },
  { href: "/my-account-orders", label: "Sifarişlərim" },
  { href: "/my-account-address", label: "Ünvanlarım" },
  { href: "/my-account-edit", label: "Hesab Məlumatları" },
  { href: "/my-account-wishlist", label: "Bəyəndiklərim" },
];

export default function DashboardNav() {
  const pathname = usePathname();
  const { setIsLoggedIn } = useContextElement();
  return (
    <ul className="my-account-nav">
      {accountLinks.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className={`my-account-nav-item ${pathname == link.href ? "active" : ""
              }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
      <li>
        <Link href={`/login`} className="my-account-nav-item">
          Çıxış
        </Link>
      </li>
    </ul>
  );
}
