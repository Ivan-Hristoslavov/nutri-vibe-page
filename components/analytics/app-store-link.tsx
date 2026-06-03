"use client";

import { track } from "@vercel/analytics";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { APP_STORE_URL } from "@/lib/constants";

export type AppStoreClickLocation =
  | "header"
  | "header_mobile"
  | "hero"
  | "pricing_free"
  | "pricing_pro"
  | "pricing_ai"
  | "final_cta";

type AppStoreLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  location: AppStoreClickLocation;
  children: ReactNode;
};

export function AppStoreLink({ location, onClick, children, ...rest }: AppStoreLinkProps) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noreferrer"
      onClick={(event) => {
        track("app_store_click", { location });
        onClick?.(event);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
