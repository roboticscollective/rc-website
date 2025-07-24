import { createClient } from 'next-sanity'

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

// Helper function for image URLs (handles both Sanity images and migration URLs)
export function buildImageUrl(source: any): string {
  // During migration, images are stored in imageUrl field
  if (source?.url) {
    return source.url
  }
  
  // Handle Sanity image assets
  if (source?.asset) {
    // If the image is from Cloudinary (which it should be with the plugin)
    if (source.asset.url) {
      return source.asset.url
    }
    
    // Fallback for Sanity CDN images
    return `https://cdn.sanity.io/images/${projectId}/${dataset}/${source.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}`
  }
  
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
  memberType: 'core' | 'community'
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
  deliverables: string[]
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
  organizer: TeamMember
  speakers?: TeamMember[]
  maxAttendees?: number
  registrationInfo?: {
    isRequired?: boolean
    registrationLink?: string
    registrationDeadline?: string
  }
  gallery?: any[]
  tags?: string[]
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