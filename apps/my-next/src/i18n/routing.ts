import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export enum Local {
  EN = "en",
  CN = "cn",
}

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: [Local.EN, Local.CN],

  // Used when no locale matches
  defaultLocale: Local.EN,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
