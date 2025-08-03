"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface BannerContextType {
  bannerDismissed: boolean;
  setBannerDismissed: (dismissed: boolean) => void;
}

const BannerContext = createContext<BannerContextType | undefined>(undefined);

export const BannerProvider = ({ children }: { children: ReactNode }) => {
  const [bannerDismissed, setBannerDismissed] = useState(false);

  return (
    <BannerContext.Provider value={{ bannerDismissed, setBannerDismissed }}>
      {children}
    </BannerContext.Provider>
  );
};

export const useBanner = () => {
  const context = useContext(BannerContext);
  if (context === undefined) {
    throw new Error("useBanner must be used within a BannerProvider");
  }
  return context;
};