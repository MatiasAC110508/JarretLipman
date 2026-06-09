"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const ROUTES = [
  {
    name: "About",
    href: "/about",
    subItems: [
      { name: "About Jarrett", href: "/about" },
      { name: "Clients", href: "/clients" },
      {
        name: "Judging & Clinician History",
        href: "/judging-and-clinician-history",
      },
      { name: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    name: "Coaching Sessions",
    href: "/clinics-vs-coaching",
    subItems: [
      { name: "Coaching vs. Clinics", href: "/clinics-vs-coaching" },
      { name: "Book a Session", href: "/book-a-session" },
    ],
  },
  {
    name: "Resources",
    href: "/in-the-news",
    subItems: [
      { name: "News", href: "/in-the-news" },
      {
        name: "Travel With ETA",
        href: "https://pages.etadventures.com/band-trips",
        external: true,
      },
      {
        name: "The Chitta Sound",
        href: "https://thechittasound.com/",
        external: true,
      },
    ],
  },
  { name: "Academic Publications", href: "/academic-publications" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-brand-100 shadow-sm py-3"
          : "bg-white border-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/logo_primary.png"
            alt="Bandworx Logo"
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {ROUTES.map((route) => (
            <div key={route.name} className="relative group">
              <Link
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-500 flex items-center gap-1",
                  pathname.startsWith(route.href) && route.href !== "/"
                    ? "text-brand-600"
                    : "text-brand-900",
                )}
              >
                {route.name}
                {route.subItems && (
                  <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform duration-200" />
                )}
              </Link>

              {route.subItems && (
                <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-lg border border-brand-100 p-2 min-w-[240px] flex flex-col gap-1">
                    {route.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        target={sub.external ? "_blank" : "_self"}
                        className="px-4 py-2.5 text-sm rounded-lg hover:bg-brand-50 text-brand-800 hover:text-brand-600 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            href="/book-a-session"
            className="ml-4 px-5 py-2.5 bg-brand-900 hover:bg-brand-800 text-white rounded-full text-sm font-medium transition-colors shadow-sm shadow-brand-900/20"
          >
            Book a Session
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-brand-900 hover:bg-brand-50 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto transition-all duration-300 ease-in-out pt-24 pb-6",
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none",
        )}
      >
        <nav className="flex flex-col p-6 gap-6">
          {ROUTES.map((route) => (
            <div key={route.name} className="flex flex-col gap-3">
              <Link
                href={route.href}
                className={cn(
                  "text-lg font-display font-semibold",
                  pathname === route.href ? "text-brand-600" : "text-brand-900",
                )}
              >
                {route.name}
              </Link>
              {route.subItems && (
                <div className="flex flex-col gap-2 pl-4 border-l-2 border-brand-100">
                  {route.subItems.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      target={sub.external ? "_blank" : "_self"}
                      className="text-brand-700 py-1"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-6 border-t border-brand-100">
            <Link
              href="/book-a-session"
              className="flex justify-center w-full px-6 py-3 bg-brand-900 text-white rounded-xl text-center font-medium"
            >
              Book a Session
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
