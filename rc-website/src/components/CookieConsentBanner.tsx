"use client";

import { useConsent } from "@/contexts/ConsentContext";

export const CookieConsentBanner: React.FC = () => {
  const { showConsentBanner, acceptAllConsent, rejectAllConsent } = useConsent();

  if (!showConsentBanner) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[70] bg-dark text-white border-t border-white-10"
      style={{ padding: "2vh 5vh" }}
      role="dialog"
      aria-live="polite"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 max-w-[150vh] mx-auto">
        <p className="text-small text-white/70 flex-1">
          We use cookies to analyze website traffic and improve your experience.
          See our{" "}
          <a href="/privacy" className="underline hover:no-underline">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <button onClick={rejectAllConsent} className="btn-outline-pill">
            Reject
          </button>
          <button
            onClick={acceptAllConsent}
            className="btn-outline-pill"
            style={{ backgroundColor: "#fff", color: "#212121" }}
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
