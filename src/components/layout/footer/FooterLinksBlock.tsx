import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type FooterLink = {
  label: string;
  href: string;
  isExternal?: boolean;
  isButton?: boolean;
};

export function FooterLinksBlock({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h3 className="font-display font-semibold text-lg text-white mb-6 flex items-center gap-2">
        {title} <div className="h-px bg-brand-800 flex-1 ml-4" />
      </h3>
      <ul className="flex flex-col gap-4">
        {links.map((link, idx) => (
          <li key={idx}>
            {link.isButton ? (
              <Link
                href={link.href}
                className="group inline-block px-4 py-2 mt-2 bg-brand-800 hover:bg-white text-white hover:text-brand-950 text-sm font-semibold rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ) : link.isExternal ? (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center text-brand-200 hover:text-white text-sm transition-all"
              >
                <span className="group-hover:translate-x-1 transition-transform">
                  {link.label}
                </span>
                <ArrowUpRight className="w-3 h-3 ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            ) : (
              <Link
                href={link.href}
                className="group inline-flex items-center text-brand-200 hover:text-white text-sm font-medium transition-all"
              >
                <span className="group-hover:translate-x-1 transition-transform">
                  {link.label}
                </span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
