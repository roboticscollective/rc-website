"use client";

import { useState } from "react";
import { X, Shield, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useConsent } from "@/contexts/ConsentContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

export const CookieConsentBanner: React.FC = () => {
  const {
    showConsentBanner,
    consent,
    updateConsent,
    acceptAllConsent,
    rejectAllConsent,
    saveConsentPreferences,
  } = useConsent();

  const [showDetailedSettings, setShowDetailedSettings] = useState(false);

  if (!showConsentBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[70]">
      <AnimatePresence>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
            duration: 0.5,
          }}
          className="
            relative overflow-hidden border-t border-primary/20
            bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20
            backdrop-blur-md shadow-lg
          "
          role="dialog"
          aria-live="polite"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
        >
          {/* Background shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer-slow" />

          {/* Content */}
          <div className="relative z-10 p-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {/* Mobile Layout */}
              <div className="block sm:hidden">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        id="cookie-consent-title"
                        className="text-sm font-semibold text-white mb-1"
                      >
                        Cookie Preferences
                      </h3>
                      <p
                        id="cookie-consent-description"
                        className="text-xs text-gray-300 leading-relaxed"
                      >
                        We use cookies to enhance your experience and analyze
                        our website traffic.
                      </p>
                    </div>
                  </div>

                  {/* Close Button - Top Right */}
                  <button
                    onClick={rejectAllConsent}
                    className="
                      flex-shrink-0 p-1 rounded-full ml-2
                      text-gray-400 hover:text-white
                      hover:bg-white/10
                      transition-colors duration-200
                      group
                    "
                    aria-label="Reject all cookies"
                  >
                    <X className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </button>
                </div>

                {/* Mobile Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    variant="default"
                    onClick={acceptAllConsent}
                    className="text-xs rounded-3xl h-8 px-4 flex-1 min-h-[32px]"
                  >
                    Accept All
                  </Button>

                  <Button
                    variant="outline"
                    onClick={rejectAllConsent}
                    className="text-xs border-gray-300 text-gray-300 hover:bg-gray-300/10 rounded-3xl h-8 px-4 flex-1 min-h-[32px]"
                  >
                    Reject All
                  </Button>

                  <Dialog
                    open={showDetailedSettings}
                    onOpenChange={(open) => {
                      setShowDetailedSettings(open);
                      // Hide recruiting toast when customize menu opens
                      if (open) {
                        document.dispatchEvent(
                          new CustomEvent("hideRecruitingToast")
                        );
                      }
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-xs text-gray-300 hover:text-white hover:bg-white/10 rounded-3xl h-8 px-3 flex-shrink-0 min-h-[32px]"
                      >
                        <Settings className="w-3 h-3" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-card border-primary/20">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <Shield className="w-5 h-5 text-primary" />
                          Cookie Preferences
                        </DialogTitle>
                        <DialogDescription>
                          Choose which cookies you'd like to accept. You can
                          change these preferences at any time.
                        </DialogDescription>
                      </DialogHeader>

                      <div className="space-y-6">
                        {/* Necessary Cookies */}
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h4 className="text-sm font-medium">
                              Necessary Cookies
                            </h4>
                            <p className="text-xs text-gray-400">
                              Essential for the website to function properly.
                              Cannot be disabled.
                            </p>
                          </div>
                          <Switch
                            checked={true}
                            disabled={true}
                            aria-label="Necessary cookies (always enabled)"
                          />
                        </div>

                        {/* Analytics Cookies */}
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h4 className="text-sm font-medium">
                              Analytics Cookies
                            </h4>
                            <p className="text-xs text-gray-400">
                              Help us understand how visitors interact with our
                              website by collecting anonymous information.
                            </p>
                          </div>
                          <Switch
                            checked={consent.analytics === "granted"}
                            onCheckedChange={(checked) =>
                              updateConsent(
                                "analytics",
                                checked ? "granted" : "denied"
                              )
                            }
                            aria-label="Analytics cookies"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end gap-2 pt-4 border-t border-primary/20">
                        <Button
                          variant="outline"
                          onClick={() => setShowDetailedSettings(false)}
                          className="rounded-3xl"
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={() => {
                            saveConsentPreferences();
                            setShowDetailedSettings(false);
                          }}
                          className="rounded-3xl"
                        >
                          Save Preferences
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden sm:flex items-center justify-between gap-4">
                {/* Text Content */}
                <div className="flex items-center gap-3 flex-1">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      id="cookie-consent-title"
                      className="text-sm font-semibold text-white mb-1"
                    >
                      Cookie Preferences
                    </h3>
                    <p
                      id="cookie-consent-description"
                      className="text-xs text-gray-300 leading-relaxed"
                    >
                      We use cookies to enhance your experience and analyze our
                      website traffic. You can customize your preferences or
                      accept all cookies.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row gap-2 flex-shrink-0">
                  <Button
                    variant="default"
                    onClick={acceptAllConsent}
                    className="text-xs rounded-3xl h-8 px-4 min-w-[90px] flex items-center justify-center"
                  >
                    Accept All
                  </Button>

                  <Button
                    variant="outline"
                    onClick={rejectAllConsent}
                    className="text-xs border-gray-300 text-gray-300 hover:bg-gray-300/10 rounded-3xl h-8 px-4 min-w-[90px] flex items-center justify-center"
                  >
                    Reject All
                  </Button>

                  <Dialog
                    open={showDetailedSettings}
                    onOpenChange={(open) => {
                      setShowDetailedSettings(open);
                      // Hide recruiting toast when customize menu opens
                      if (open) {
                        document.dispatchEvent(
                          new CustomEvent("hideRecruitingToast")
                        );
                      }
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-xs text-gray-300 hover:text-white hover:bg-white/10 rounded-3xl h-8 px-4 min-w-[90px] flex items-center justify-center"
                      >
                        <Settings className="w-3 h-3 mr-1" />
                        Customize
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-card border-primary/20">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <Shield className="w-5 h-5 text-primary" />
                          Cookie Preferences
                        </DialogTitle>
                        <DialogDescription>
                          Choose which cookies you'd like to accept. You can
                          change these preferences at any time.
                        </DialogDescription>
                      </DialogHeader>

                      <div className="space-y-6">
                        {/* Necessary Cookies */}
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h4 className="text-sm font-medium">
                              Necessary Cookies
                            </h4>
                            <p className="text-xs text-gray-400">
                              Essential for the website to function properly.
                              Cannot be disabled.
                            </p>
                          </div>
                          <Switch
                            checked={true}
                            disabled={true}
                            aria-label="Necessary cookies (always enabled)"
                          />
                        </div>

                        {/* Analytics Cookies */}
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h4 className="text-sm font-medium">
                              Analytics Cookies
                            </h4>
                            <p className="text-xs text-gray-400">
                              Help us understand how visitors interact with our
                              website by collecting anonymous information.
                            </p>
                          </div>
                          <Switch
                            checked={consent.analytics === "granted"}
                            onCheckedChange={(checked) =>
                              updateConsent(
                                "analytics",
                                checked ? "granted" : "denied"
                              )
                            }
                            aria-label="Analytics cookies"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end gap-2 pt-4 border-t border-primary/20">
                        <Button
                          variant="outline"
                          onClick={() => setShowDetailedSettings(false)}
                          className="rounded-3xl"
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={() => {
                            saveConsentPreferences();
                            setShowDetailedSettings(false);
                          }}
                          className="rounded-3xl"
                        >
                          Save Preferences
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Close Button */}
                <button
                  onClick={rejectAllConsent}
                  className="
                    flex-shrink-0 p-1 rounded-full ml-2
                    text-gray-400 hover:text-white
                    hover:bg-white/10
                    transition-colors duration-200
                    group
                  "
                  aria-label="Reject all cookies"
                >
                  <X className="w-4 h-4 transition-transform group-hover:scale-110" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CookieConsentBanner;
