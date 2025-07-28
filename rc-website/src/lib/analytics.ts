import Cookies from 'js-cookie';

// GA4 Measurement ID from environment
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Analytics event types for type safety
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

// Primary conversion events
export const CONVERSION_EVENTS = {
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  MEETUP_REGISTRATION_CLICK: 'meetup_registration_click',
  POSITION_INTEREST: 'position_interest',
  DONATION_CLICK: 'donation_click',
  EMAIL_CLICK: 'email_click',
} as const;

// Engagement events
export const ENGAGEMENT_EVENTS = {
  PROJECT_VIEW: 'project_view',
  PROJECT_DETAIL_VIEW: 'project_detail_view',
  VIDEO_PLAY: 'video_play',
  VIDEO_COMPLETE: 'video_complete',
  TEAM_MEMBER_VIEW: 'team_member_view',
  PARTNER_CLICK: 'partner_click',
  FAQ_EXPAND: 'faq_expand',
  CTA_BUTTON_CLICK: 'cta_button_click',
  EXTERNAL_LINK_CLICK: 'external_link_click',
  NAVIGATION_CLICK: 'navigation_click',
  SCROLL_MILESTONE: 'scroll_milestone',
} as const;

// Check if user has consented to analytics
export const hasAnalyticsConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const consent = Cookies.get('analytics_consent');
  return consent === 'granted';
};

// Initialize Google Analytics
export const initializeGA = (): void => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;

  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer?.push(arguments);
  }
  
  window.gtag = gtag;
  
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
};

// Track page views
export const trackPageView = (url: string, title?: string): void => {
  if (!hasAnalyticsConsent() || !GA_MEASUREMENT_ID || typeof window === 'undefined') return;

  window.gtag?.('config', GA_MEASUREMENT_ID, {
    page_title: title || document.title,
    page_location: url,
  });
};

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>): void => {
  if (!hasAnalyticsConsent() || !GA_MEASUREMENT_ID || typeof window === 'undefined') return;

  window.gtag?.('event', eventName, {
    event_category: parameters?.category || 'engagement',
    event_label: parameters?.label,
    value: parameters?.value,
    ...parameters,
  });
};

// Convenience functions for common events
export const trackConversion = (conversionType: string, parameters?: Record<string, any>): void => {
  trackEvent(conversionType, {
    ...parameters,
    category: 'conversion',
    event_category: 'conversion',
  });
};

export const trackEngagement = (engagementType: string, parameters?: Record<string, any>): void => {
  trackEvent(engagementType, {
    ...parameters,
    category: 'engagement',
    event_category: 'engagement',
  });
};

// Track external link clicks
export const trackExternalLink = (url: string, linkText?: string): void => {
  trackEvent(ENGAGEMENT_EVENTS.EXTERNAL_LINK_CLICK, {
    link_url: url,
    link_text: linkText || url,
    category: 'outbound_link',
  });
};

// Track scroll milestones
export const trackScrollMilestone = (percentage: number, page: string): void => {
  trackEvent(ENGAGEMENT_EVENTS.SCROLL_MILESTONE, {
    scroll_percentage: percentage,
    page_path: page,
    category: 'engagement',
  });
};

// Enhanced ecommerce tracking for donations
export const trackDonationClick = (amount?: number, method?: string): void => {
  trackConversion(CONVERSION_EVENTS.DONATION_CLICK, {
    currency: 'EUR',
    value: amount || 0,
    method: method || 'stripe',
    items: [{
      item_id: 'donation',
      item_name: 'Robotics Collective Donation',
      item_category: 'donation',
      quantity: 1,
      price: amount || 0,
    }],
  });
};

// Track form submissions with validation
export const trackFormSubmission = (formName: string, success: boolean, errorMessage?: string): void => {
  trackConversion(CONVERSION_EVENTS.CONTACT_FORM_SUBMIT, {
    form_name: formName,
    success: success,
    error_message: errorMessage,
    method: success ? 'success' : 'error',
  });
};

// User journey tracking
export const trackUserJourney = (step: string, funnel: string): void => {
  trackEvent('user_journey_step', {
    journey_step: step,
    funnel_name: funnel,
    category: 'user_journey',
  });
};

// Debug mode for development
export const isAnalyticsDebugMode = (): boolean => {
  return process.env.NODE_ENV === 'development';
};

// Simple event tracking without complex parameters
export const trackSimpleEvent = (eventName: string): void => {
  if (!hasAnalyticsConsent() || !GA_MEASUREMENT_ID || typeof window === 'undefined') return;
  
  window.gtag?.('event', eventName, {
    event_category: 'user_interaction',
  });
  
  if (isAnalyticsDebugMode()) {
    console.log('🔍 Analytics Event:', eventName);
  }
};