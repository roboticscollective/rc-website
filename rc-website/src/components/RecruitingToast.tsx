"use client";

import { useState, useEffect } from "react";
import { X, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useConsent } from "@/contexts/ConsentContext";
import type { WebsiteSettings } from "@/lib/sanity";

interface RecruitingToastProps {
  settings: WebsiteSettings | null;
  autoShow?: boolean;
  delay?: number;
  onDismiss?: () => void;
}

export const RecruitingToast: React.FC<RecruitingToastProps> = ({
  settings,
  autoShow = true,
  delay = 3000,
  onDismiss,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [forceHidden, setForceHidden] = useState(false);
  const pathname = usePathname();
  const { showConsentBanner } = useConsent();

  // Check global settings first
  if (!settings?.recruitingControls?.showRecruitingToast) {
    return null;
  }

  // Don't show on positions page or when cookie banner is visible
  const shouldShow = pathname !== "/positions" && !showConsentBanner && !forceHidden;

  useEffect(() => {
    if (autoShow && shouldShow) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);

      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [autoShow, delay, shouldShow]);

  // Listen for hide recruiting toast event
  useEffect(() => {
    const handleHideEvent = () => {
      setForceHidden(true);
      setIsVisible(false);
    };

    document.addEventListener('hideRecruitingToast', handleHideEvent);
    return () => document.removeEventListener('hideRecruitingToast', handleHideEvent);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  return (
    <div 
      className="fixed left-4 right-4 sm:right-4 sm:left-auto z-[60] max-w-sm sm:w-auto bottom-4"
    >
      <AnimatePresence>
        {isVisible && shouldShow && (
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.95 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
              duration: 0.5
            }}
            whileHover={{ scale: 1.02 }}
            className="
              relative overflow-hidden rounded-lg border border-primary/20
              bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20
              backdrop-blur-md shadow-lg
              hover:from-primary/25 hover:via-accent/20 hover:to-primary/25
              hover:shadow-xl
              recruiting-toast-sweep
            "
            role="alert"
            aria-live="polite"
          >
        {/* Background shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer-slow" />

        {/* Content */}
        <div className="relative z-10 p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3 flex-1">
              {/* Icon */}
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-white">
                    We're Recruiting!
                  </h3>
                </div>
                <p className="text-xs text-gray-300 mb-3 leading-relaxed">
                  Join us and help shape the future of robotics!
                </p>

                {/* Action Button */}
                <Link href="/positions" onClick={handleDismiss}>
                  <Button variant="default">Join Us</Button>
                </Link>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="
                flex-shrink-0 p-1 rounded-full
                text-gray-400 hover:text-white
                hover:bg-white/10
                transition-colors duration-200
                group
              "
              aria-label="Dismiss recruitment notification"
            >
              <X className="w-4 h-4 transition-transform group-hover:scale-110" />
            </button>
          </div>
        </div>

        {/* Progress indicator (optional) */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/30">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 8, ease: "linear" }}
          />
        </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RecruitingToast;
