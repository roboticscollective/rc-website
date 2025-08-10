import { groq } from 'next-sanity'
import { client, type TeamMember, type Project, type Position, type BlogPost, type Event, type Partner, type WebsiteSettings } from './sanity'

// Team Member Queries
const teamMemberFields = groq`
  _id,
  _type,
  name,
  role,
  description,
  bio,
  image,
  imageUrl,
  isBoard,
  isActive,
  memberType,
  slug,
  tags,
  contact,
  legacyId
`

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  return client.fetch(groq`
    *[_type == "teamMember"] | order(memberType asc, name asc) {
      ${teamMemberFields}
    }
  `)
}

export async function getTeamMemberById(id: string): Promise<TeamMember | null> {
  return client.fetch(groq`
    *[_type == "teamMember" && _id == $id][0] {
      ${teamMemberFields}
    }
  `, { id })
}

export async function getCoreTeamMembers(): Promise<TeamMember[]> {
  return client.fetch(groq`
    *[_type == "teamMember" && memberType == "core"] | order(name asc) {
      ${teamMemberFields}
    }
  `)
}

export async function getCommunityMembers(): Promise<TeamMember[]> {
  return client.fetch(groq`
    *[_type == "teamMember" && memberType == "community" && isActive == true] | order(name asc) {
      ${teamMemberFields}
    }
  `)
}

export async function getLeadershipMembers(): Promise<TeamMember[]> {
  return client.fetch(groq`
    *[_type == "teamMember" && memberType == "leadership" && isActive == true] | order(name asc) {
      ${teamMemberFields}
    }
  `)
}

export async function getAlumniMembers(): Promise<TeamMember[]> {
  return client.fetch(groq`
    *[_type == "teamMember" && memberType == "alumni" && isActive == true] | order(name asc) {
      ${teamMemberFields}
    }
  `)
}

export async function getActiveTeamMembers(): Promise<TeamMember[]> {
  return client.fetch(groq`
    *[_type == "teamMember" && isActive == true] | order(memberType asc, name asc) {
      ${teamMemberFields}
    }
  `)
}

export async function getTeamMemberBySlug(slug: string): Promise<TeamMember | null> {
  return client.fetch(groq`
    *[_type == "teamMember" && slug.current == $slug][0] {
      ${teamMemberFields}
    }
  `, { slug })
}

export async function getAllTeamMemberSlugs(): Promise<string[]> {
  const members = await client.fetch(groq`
    *[_type == "teamMember" && isActive == true] { slug }
  `)
  return members.map((member: any) => member.slug.current)
}

// Project Queries
const projectFields = groq`
  _id,
  _type,
  title,
  slug,
  description,
  content,
  image,
  imageUrl,
  galleryImages,
  galleryImageUrls,
  galleryVideos,
  galleryVideoUrls,
  status,
  featured,
  tags,
  pointOfContact->{${teamMemberFields}},
  contributors[]->{${teamMemberFields}},
  links,
  legacyId
`

export async function getAllProjects(): Promise<Project[]> {
  return client.fetch(groq`
    *[_type == "project"] | order(featured desc, title asc) {
      ${projectFields}
    }
  `)
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return client.fetch(groq`
    *[_type == "project" && slug.current == $slug][0] {
      ${projectFields}
    }
  `, { slug })
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const projects = await client.fetch(groq`
    *[_type == "project"] { slug }
  `)
  return projects.map((project: any) => project.slug.current)
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return client.fetch(groq`
    *[_type == "project" && featured == true] | order(title asc) {
      ${projectFields}
    }
  `)
}

// Position Queries
const positionFields = groq`
  _id,
  _type,
  title,
  description,
  responsibilities,
  currentHolder->{${teamMemberFields}},
  isOpen,
  timeCommitment,
  legacyId
`

export async function getAllPositions(): Promise<Position[]> {
  return client.fetch(groq`
    *[_type == "position"] | order(title asc) {
      ${positionFields}
    }
  `)
}

export async function getOpenPositions(): Promise<Position[]> {
  return client.fetch(groq`
    *[_type == "position" && isOpen == true] | order(title asc) {
      ${positionFields}
    }
  `)
}

// Blog Post Queries
const blogPostFields = groq`
  _id,
  _type,
  title,
  slug,
  excerpt,
  content,
  featuredImage,
  author->{${teamMemberFields}},
  contributors[]->{${teamMemberFields}},
  publishedAt,
  tags,
  categories,
  seo
`

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return client.fetch(groq`
    *[_type == "blogPost"] | order(publishedAt desc) {
      ${blogPostFields}
    }
  `)
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return client.fetch(groq`
    *[_type == "blogPost" && slug.current == $slug][0] {
      ${blogPostFields}
    }
  `, { slug })
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const posts = await client.fetch(groq`
    *[_type == "blogPost"] { slug }
  `)
  return posts.map((post: any) => post.slug.current)
}

export async function getBlogPostsByAuthor(authorId: string): Promise<BlogPost[]> {
  return client.fetch(groq`
    *[_type == "blogPost" && author._ref == $authorId] | order(publishedAt desc) {
      ${blogPostFields}
    }
  `, { authorId })
}

// Partner Queries (defined early because used in eventFields)
const partnerFields = groq`
  _id,
  _type,
  name,
  logo,
  logoUrl,
  website,
  description,
  partnershipType,
  isActive,
  partnershipStartDate,
  contactPerson,
  legacyId
`

// Event Queries
const eventFields = groq`
  _id,
  _type,
  title,
  slug,
  description,
  featuredImage,
  eventDate,
  endDate,
  location,
  eventType,
  status,
  registrationInfo,
  gallery,
  tags,
  highlights,
  eventPartners[]->{${partnerFields}},
  customRegistrationText,
  showInBanner,
  bannerPriority
`

export async function getAllEvents(): Promise<Event[]> {
  return client.fetch(groq`
    *[_type == "event"] | order(eventDate desc) {
      ${eventFields}
    }
  `)
}

export async function getUpcomingEvents(): Promise<Event[]> {
  return client.fetch(groq`
    *[_type == "event" && status == "upcoming"] | order(eventDate asc) {
      ${eventFields}
    }
  `)
}

export async function getPastEvents(): Promise<Event[]> {
  return client.fetch(groq`
    *[_type == "event" && status == "past"] | order(eventDate desc) {
      ${eventFields}
    }
  `)
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  return client.fetch(groq`
    *[_type == "event" && slug.current == $slug][0] {
      ${eventFields}
    }
  `, { slug })
}

export async function getAllEventSlugs(): Promise<string[]> {
  const events = await client.fetch(groq`
    *[_type == "event"] { slug }
  `)
  return events.map((event: any) => event.slug.current)
}

// Partner Queries
export async function getAllPartners(): Promise<Partner[]> {
  return client.fetch(groq`
    *[_type == "partner"] | order(name asc) {
      ${partnerFields}
    }
  `)
}

export async function getActivePartners(): Promise<Partner[]> {
  return client.fetch(groq`
    *[_type == "partner" && isActive == true] | order(name asc) {
      ${partnerFields}
    }
  `)
}

export async function getPartnersByType(type: string): Promise<Partner[]> {
  return client.fetch(groq`
    *[_type == "partner" && partnershipType == $type && isActive == true] | order(name asc) {
      ${partnerFields}
    }
  `, { type })
}

// Cross-reference queries
export async function getProjectsByContributor(contributorId: string): Promise<Project[]> {
  return client.fetch(groq`
    *[_type == "project" && (pointOfContact._ref == $contributorId || $contributorId in contributors[]._ref)] | order(title asc) {
      ${projectFields}
    }
  `, { contributorId })
}


// Website Settings Queries
const websiteSettingsFields = groq`
  _id,
  _type,
  eventControls,
  recruitingControls,
  globalAnnouncement,
  socialLinks,
  contactInfo
`

export async function getWebsiteSettings(): Promise<WebsiteSettings | null> {
  return client.fetch(groq`
    *[_type == "websiteSettings"][0] {
      ${websiteSettingsFields}
    }
  `)
}

// Enhanced Event Queries for Banner/Conference
export async function getNextUpcomingEvent(): Promise<Event | null> {
  return client.fetch(groq`
    *[_type == "event" && status == "upcoming" && showInBanner == true && eventDate > now()] 
    | order(bannerPriority desc, eventDate asc)[0] {
      ${eventFields}
    }
  `)
}

export async function getEventForConferencePage(): Promise<Event | null> {
  return client.fetch(groq`
    *[_type == "event" && eventType == "conference" && status == "upcoming" && eventDate > now()] 
    | order(eventDate asc)[0] {
      ${eventFields}
    }
  `)
}

export async function getPastEventsWithGallery(): Promise<Event[]> {
  return client.fetch(groq`
    *[_type == "event" && status == "past" && defined(gallery) && length(gallery) > 0] 
    | order(eventDate desc)[0...6] {
      ${eventFields}
    }
  `)
}

export async function getUpcomingEventsForBanner(): Promise<Event[]> {
  return client.fetch(groq`
    *[_type == "event" && status == "upcoming" && showInBanner == true && eventDate > now()] 
    | order(bannerPriority desc, eventDate asc) {
      ${eventFields}
    }
  `)
}