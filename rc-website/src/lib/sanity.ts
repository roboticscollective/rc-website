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