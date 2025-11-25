"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { initializeGA } from '@/lib/analytics';

// Consent types
export type ConsentType = 'necessary' | 'analytics' | 'marketing';
export type ConsentStatus = 'granted' | 'denied' | 'pending';

export interface ConsentState {
  necessary: ConsentStatus;
  analytics: ConsentStatus;
  marketing: ConsentStatus;
}

export interface ConsentContextType {
  consent: ConsentState;
  updateConsent: (type: ConsentType, status: ConsentStatus) => void;
  hasConsent: (type: ConsentType) => boolean;
  showConsentBanner: boolean;
  acceptAllConsent: () => void;
  rejectAllConsent: () => void;
  saveConsentPreferences: () => void;
  resetConsent: () => void;
}

const defaultConsentState: ConsentState = {
  necessary: 'granted', // Always granted for essential functionality
  analytics: 'pending',
  marketing: 'pending',
};

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

const CONSENT_COOKIE_NAME = 'consent_preferences';
const CONSENT_COOKIE_EXPIRES = 365; // 1 year

interface ConsentProviderProps {
  children: ReactNode;
}

export const ConsentProvider: React.FC<ConsentProviderProps> = ({ children }) => {
  const [consent, setConsent] = useState<ConsentState>(defaultConsentState);
  const [showConsentBanner, setShowConsentBanner] = useState(false);

  // Load consent from cookies on mount
  useEffect(() => {
    const savedConsent = Cookies.get(CONSENT_COOKIE_NAME);
    
    if (savedConsent) {
      try {
        const parsedConsent = JSON.parse(savedConsent);
        setConsent(parsedConsent);
        setShowConsentBanner(false);
        
        // Initialize analytics if consented
        if (parsedConsent.analytics === 'granted') {
          initializeGA();
        }
      } catch (error) {
        console.error('Error parsing consent cookie:', error);
        setShowConsentBanner(true);
      }
    } else {
      // No consent found, show banner
      setShowConsentBanner(true);
    }
  }, []);

  // Save consent to cookies
  const saveConsentToCookie = (newConsent: ConsentState) => {
    Cookies.set(CONSENT_COOKIE_NAME, JSON.stringify(newConsent), {
      expires: CONSENT_COOKIE_EXPIRES,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

    // Also set individual consent cookies for gtag
    Cookies.set('analytics_consent', newConsent.analytics, {
      expires: CONSENT_COOKIE_EXPIRES,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });
  };

  // Update specific consent type
  const updateConsent = (type: ConsentType, status: ConsentStatus) => {
    const newConsent = { ...consent, [type]: status };
    setConsent(newConsent);
    
    // Initialize analytics if newly granted
    if (type === 'analytics' && status === 'granted' && consent.analytics !== 'granted') {
      initializeGA();
    }
    
    return newConsent;
  };

  // Check if user has granted consent for specific type
  const hasConsent = (type: ConsentType): boolean => {
    return consent[type] === 'granted';
  };

  // Accept all consent types
  const acceptAllConsent = () => {
    const newConsent: ConsentState = {
      necessary: 'granted',
      analytics: 'granted',
      marketing: 'granted',
    };
    
    setConsent(newConsent);
    saveConsentToCookie(newConsent);
    setShowConsentBanner(false);
    
    // Initialize analytics
    initializeGA();
  };

  // Reject all non-necessary consent
  const rejectAllConsent = () => {
    const newConsent: ConsentState = {
      necessary: 'granted',
      analytics: 'denied',
      marketing: 'denied',
    };
    
    setConsent(newConsent);
    saveConsentToCookie(newConsent);
    setShowConsentBanner(false);
  };

  // Save current consent preferences
  const saveConsentPreferences = () => {
    saveConsentToCookie(consent);
    setShowConsentBanner(false);
    
    // Initialize analytics if consented
    if (consent.analytics === 'granted') {
      initializeGA();
    }
  };

  // Reset consent (useful for testing)
  const resetConsent = () => {
    Cookies.remove(CONSENT_COOKIE_NAME);
    Cookies.remove('analytics_consent');
    setConsent(defaultConsentState);
    setShowConsentBanner(true);
  };

  const contextValue: ConsentContextType = {
    consent,
    updateConsent,
    hasConsent,
    showConsentBanner,
    acceptAllConsent,
    rejectAllConsent,
    saveConsentPreferences,
    resetConsent,
  };

  return (
    <ConsentContext.Provider value={contextValue}>
      {children}
    </ConsentContext.Provider>
  );
};

// Custom hook to use consent context
export const useConsent = (): ConsentContextType => {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
};