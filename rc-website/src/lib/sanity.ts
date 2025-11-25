import { createClient } from 'next-sanity'
import React from 'react'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'cg2zend1'
export const useCdn = false // Set to false for SSG to ensure fresh data during builds

// Create the Sanity client
export const client = createClient({
  projectId,
  dataset,
  useCdn,
  apiVersion: '2024-01-01', // Use current date
})

// Helper function to render rich text with accent highlighting
export function renderRichTextWithAccents(block: {
  _type: 'block'
  style?: 'normal'
  children: Array<{
    _type: 'span'
    text: string
    marks?: string[]
  }>
}): React.ReactNode {
  return block.children.map((child, index) => {
    const hasAccent = child.marks?.includes('accent')
    return React.createElement(
      'span',
      {
        key: index,
        className: hasAccent ? 'text-primary font-medium' : ''
      },
      child.text
    )
  })
}

// Helper function for image URLs (handles both Sanity images and migration URLs)
export function buildImageUrl(source: any): string {
  // Handle direct URL strings (migration URLs or direct links)
  if (typeof source === 'string') {
    return source
  }
  
  // Handle imageUrl field during migration
  if (source?.url) {
    return source.url
  }
  
  // Handle Sanity image assets
  if (source?.asset) {
    // Prefer using the asset URL if available (Cloudinary plugin)
    if (source.asset.url) {
      return source.asset.url
    }
    
    // Extract image reference for Sanity CDN
    if (source.asset._ref) {
      const ref = source.asset._ref
      // Parse the reference format: image-{id}-{dimensions}-{format}
      const parts = ref.split('-')
      if (parts.length >= 3) {
        const id = parts.slice(1, -2).join('-')
        const dimensions = parts[parts.length - 2]
        const format = parts[parts.length - 1]
        return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}`
      }
    }
    
    // Fallback: try to construct URL from _ref
    const ref = source.asset._ref.replace('image-', '')
    const parts = ref.split('-')
    if (parts.length >= 2) {
      const format = parts.pop()
      const assetId = parts.join('-')
      return `https://cdn.sanity.io/images/${projectId}/${dataset}/${assetId}.${format}`
    }
  }
  
  // Handle legacy asset structure
  if (source?._ref) {
    const ref = source._ref.replace('image-', '')
    const parts = ref.split('-')
    if (parts.length >= 2) {
      const format = parts.pop()
      const assetId = parts.join('-')
      return `https://cdn.sanity.io/images/${projectId}/${dataset}/${assetId}.${format}`
    }
  }
  
  // Return empty string if no valid image source found
  return ''
}

// Helper function for video URLs (handles both Sanity videos and migration URLs)
export function buildVideoUrl(source: any): string {
  // Handle direct URL strings (migration URLs or direct links)
  if (typeof source === 'string') {
    return source
  }
  
  // Handle videoUrl field during migration
  if (source?.url) {
    return source.url
  }
  
  // Handle Sanity file assets (videos)
  if (source?.asset) {
    // Prefer using the asset URL if available
    if (source.asset.url) {
      return source.asset.url
    }
    
    // Extract file reference for Sanity CDN
    if (source.asset._ref) {
      const ref = source.asset._ref
      // Parse the reference format: file-{id}-{format}
      const parts = ref.split('-')
      if (parts.length >= 2) {
        const id = parts.slice(1, -1).join('-')
        const format = parts[parts.length - 1]
        return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${format}`
      }
    }
  }
  
  // Handle legacy asset structure
  if (source?._ref) {
    const ref = source._ref.replace('file-', '')
    const parts = ref.split('-')
    if (parts.length >= 2) {
      const format = parts.pop()
      const assetId = parts.join('-')
      return `https://cdn.sanity.io/files/${projectId}/${dataset}/${assetId}.${format}`
    }
  }
  
  // Return empty string if no valid video source found
  return ''
}

// TypeScript interfaces matching our schemas
export interface TeamMember {
  _id: string
  _type: 'teamMember'
  name: string
  role: string
  description?: string
  bio?: string
  image?: any
  imageUrl?: {
    url: string
    alt?: string
  }
  isBoard?: boolean
  isActive?: boolean
  memberType: 'leadership' | 'core' | 'community' | 'alumni'
  slug: { current: string }
  tags?: string[]
  contact?: {
    email?: string
    linkedin?: string
    github?: string
    twitter?: string
  }
  legacyId?: number
}

export interface Project {
  _id: string
  _type: 'project'
  title: string
  slug: { current: string }
  description: string
  content?: any[] // Portable text
  image?: any
  imageUrl?: {
    url: string
    alt?: string
  }
  galleryImages?: any[]
  galleryImageUrls?: Array<{
    url: string
    alt?: string
  }>
  galleryVideos?: any[]
  galleryVideoUrls?: Array<{
    url: string
    caption?: string
    posterUrl?: string
    duration?: number
    mimeType?: string
  }>
  status: 'ongoing' | 'finished' | 'planned'
  featured?: boolean
  tags?: string[]
  pointOfContact: TeamMember
  contributors?: TeamMember[]
  links?: {
    github?: string
    website?: string
    documentation?: string
  }
  legacyId?: string
}

export interface Position {
  _id: string
  _type: 'position'
  title: string
  description: string
  responsibilities: string[]
  currentHolder?: TeamMember
  isOpen?: boolean
  timeCommitment?: string
  legacyId?: string
}

export interface BlogPost {
  _id: string
  _type: 'blogPost'
  title: string
  slug: { current: string }
  excerpt: string
  content: any[] // Portable text
  featuredImage?: any
  author: TeamMember
  contributors?: TeamMember[]
  publishedAt: string
  tags?: string[]
  categories?: string[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

export interface Event {
  _id: string
  _type: 'event'
  title: string
  slug: { current: string }
  description: any[] // Portable text
  featuredImage?: any
  eventDate: string
  endDate?: string
  location?: {
    venue?: string
    address?: string
    city?: string
    isOnline?: boolean
    onlineLink?: string
  }
  eventType: 'workshop' | 'meetup' | 'conference' | 'hackathon' | 'social' | 'training' | 'demo'
  status: 'upcoming' | 'ongoing' | 'past' | 'cancelled'
  registrationInfo?: {
    isRequired?: boolean
    registrationLink?: string
    registrationDeadline?: string
  }
  gallery?: any[]
  tags?: string[]
  highlights?: Array<{
    _type: 'block'
    style?: 'normal'
    children: Array<{
      _type: 'span'
      text: string
      marks?: string[]
    }>
  }>
  eventPartners?: Partner[]
  customRegistrationText?: string
  showInBanner?: boolean
  bannerPriority?: number
}

export interface Partner {
  _id: string
  _type: 'partner'
  name: string
  logo: any
  logoUrl?: {
    url: string
    alt?: string
  }
  website: string
  description?: string
  partnershipType: 'academic' | 'industry' | 'research' | 'sponsor' | 'community'
  isActive?: boolean
  partnershipStartDate?: string
  contactPerson?: {
    name?: string
    email?: string
    role?: string
  }
  legacyId?: number
}

export interface WebsiteSettings {
  _id: string
  _type: 'websiteSettings'
  eventControls?: {
    showEventBanner?: boolean
    showEventNotificationBadge?: boolean
    bannerShowDaysThreshold?: number
  }
  recruitingControls?: {
    showRecruitingToast?: boolean
    recruitingToastDelay?: number
  }
  globalAnnouncement?: {
    isActive?: boolean
    message?: string
    link?: string
    type?: 'info' | 'warning' | 'success' | 'error'
  }
  socialLinks?: {
    github?: string
    linkedin?: string
    twitter?: string
    discord?: string
    youtube?: string
  }
  contactInfo?: {
    email?: string
    phone?: string
    address?: string
  }
}