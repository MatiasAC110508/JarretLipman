import Link from "next/link";
import { Mail } from "lucide-react";

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function FooterBrand() {
  return (
    <div className="flex flex-col items-start gap-6 sm:col-span-2 lg:col-span-1">
      <Link
        href="/"
        className="inline-block hover:opacity-90 transition-opacity"
      >
        <img
          src="/logo_white.png"
          alt="Bandworx Logo"
          className="h-16 w-auto object-contain"
        />
      </Link>
      <p className="text-brand-100/70 text-sm md:text-base leading-relaxed font-light">
        Jarrett Lipman is the Director of Bands at Vandegrift High School and
        Brass Caption Manager for the Boston Crusaders. Bandworx specializes in
        instructional coaching for band directors.
      </p>
      <div className="flex items-center gap-4 mt-2">
        <a
          href="https://www.facebook.com/bandworxllc"
          target="_blank"
          rel="noreferrer"
          className="group w-11 h-11 rounded-full bg-brand-900 border border-brand-800 flex items-center justify-center hover:bg-brand-600 hover:border-brand-500 hover:-translate-y-1 transition-all duration-300 shadow-lg"
          aria-label="Facebook"
        >
          <FacebookIcon className="w-5 h-5 text-brand-200 group-hover:text-white transition-colors" />
        </a>
        <a
          href="mailto:jarrettlipman@texasbandworx.com"
          className="group w-11 h-11 rounded-full bg-brand-900 border border-brand-800 flex items-center justify-center hover:bg-brand-600 hover:border-brand-500 hover:-translate-y-1 transition-all duration-300 shadow-lg"
          aria-label="Email"
        >
          <Mail className="w-5 h-5 text-brand-200 group-hover:text-white transition-colors" />
        </a>
      </div>
    </div>
  );
}
