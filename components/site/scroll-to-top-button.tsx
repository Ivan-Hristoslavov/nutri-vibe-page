"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { MASCOT } from "@/lib/mascot";
import { scrollToTop } from "@/lib/scroll-to-top";

const showAfterPx = 480;

function MessageTrail() {
  return (
    <div className="vibe-trail vibe-trail-vertical py-0.5" aria-hidden>
      <span className="vibe-trail-dot vibe-trail-dot-1" />
      <span className="vibe-trail-dot vibe-trail-dot-2" />
      <span className="vibe-trail-dot vibe-trail-dot-3" />
    </div>
  );
}

export function ScrollToTopButton() {
  const t = useTranslations("nav");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > showAfterPx);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label={t("scrollToTop")}
      title={t("scrollToTop")}
      onClick={scrollToTop}
      className={`scroll-to-top-btn group fixed bottom-6 right-4 z-40 sm:right-6 ${
        visible ? "scroll-to-top-btn-visible" : ""
      }`}
    >
      <span className="scroll-to-top-coach">
        <span className="scroll-to-top-bubble text-white" aria-hidden>
          <svg
            className="scroll-to-top-arrow"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M12 6l-5 5M12 6l5 5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <MessageTrail />
        <Image
          src={MASCOT.encouraging}
          alt=""
          width={68}
          height={68}
          className="scroll-to-top-mascot h-[4.25rem] w-[4.25rem] object-contain drop-shadow-xl"
        />
      </span>
    </button>
  );
}
