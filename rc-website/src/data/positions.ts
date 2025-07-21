export interface Position {
  id: string;
  title: string;
  description: string;
  responsibilities: string[];
  deliverables: string[];
}

export const positions: Position[] = [
  {
    id: 'finance',
    title: 'Finance & Accounting Lead',
    description: 'Monthly bookkeeping, Finanzamt compliance, budget planning, payment processing, financial reporting',
    responsibilities: [
      'Monthly bookkeeping: Income/expense tracking, receipt management',
      'Finanzamt compliance: Annual reports, tax exemption maintenance (Gemeinnützigkeit)',
      'Budget planning: Quarterly forecasts, project cost estimation',
      'Payment processing: Membership fees, sponsor payments, expense reimbursements',
      'Financial reporting: Monthly treasurer reports to board, transparency for members'
    ],
    deliverables: [
      'Monthly financial dashboard',
      'Annual financial statement for Finanzamt',
      'Quarterly budget vs actual reports',
      'Grant application financial sections'
    ]
  },
  {
    id: 'hr',
    title: 'HR & Member Operations Lead',
    description: 'Onboarding pipeline, member lifecycle management, internal communications, capacity management',
    responsibilities: [
      'Onboarding pipeline: Welcome process, access provisioning, role assignment',
      'Member lifecycle: Activity tracking, engagement scoring, offboarding process',
      'Internal communications: Team updates, conflict resolution, feedback collection',
      'Capacity management: Workload distribution, burnout prevention, skill matching',
      'Recognition programs: Achievement tracking, certificate generation, appreciation events'
    ],
    deliverables: [
      'Member engagement dashboard',
      'Monthly team health reports',
      'Standardized onboarding checklist',
      'Quarterly member satisfaction surveys'
    ]
  },
  {
    id: 'it',
    title: 'IT Infrastructure Lead',
    description: 'Google Workspace management, Slack administration, GitHub organization, automation workflows',
    responsibilities: [
      'Workspace management: Google Workspace admin, user access control',
      'Communication platforms: Slack administration, channel organization',
      'Development tools: GitHub organization management, access permissions',
      'Automation: Onboarding workflows, reporting automation, integration setup',
      'Website maintenance: Content updates, performance monitoring, security patches'
    ],
    deliverables: [
      'System uptime reports',
      'Automation implementation roadmap',
      'Security audit quarterly',
      'Tool integration documentation'
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing & Communications Lead',
    description: 'Content creation, brand management, event promotion, community building, content strategy',
    responsibilities: [
      'Content creation: Instagram posts (3x/week), LinkedIn articles (2x/month), blog posts (1x/month)',
      'Brand management: Visual identity consistency, messaging guidelines',
      'Event promotion: Workshop announcements, registration campaigns',
      'Community building: Engagement with followers, hashtag strategy, cross-promotion',
      'Content strategy: Editorial calendar, success metrics tracking'
    ],
    deliverables: [
      'Monthly social media analytics',
      'Quarterly brand awareness reports',
      'Event promotion campaigns',
      'Content calendar (3 months ahead)'
    ]
  },
  {
    id: 'partnerships',
    title: 'Partnerships & Development Lead',
    description: 'Relationship management, business development, grant hunting, university relations, corporate outreach',
    responsibilities: [
      'Relationship management: Existing sponsor/partner communication, contract renewals',
      'Business development: New partnership prospecting, proposal creation',
      'Grant hunting: Funding opportunity research, application preparation',
      'University relations: Academic partnership development, student program coordination',
      'Corporate outreach: Industry connections, speaking opportunities, collaboration projects'
    ],
    deliverables: [
      'Partnership pipeline dashboard',
      'Quarterly partnership review meetings',
      'Annual funding applications submitted',
      'Corporate relationship status reports'
    ]
  },
  {
    id: 'events',
    title: 'Events & Operations Lead',
    description: 'Workshop planning, event execution, equipment management, space coordination, vendor relations',
    responsibilities: [
      'Workshop planning: Venue booking, speaker coordination, materials preparation',
      'Event execution: Registration management, day-of coordination, feedback collection',
      'Equipment management: Inventory tracking, maintenance schedules, procurement',
      'Space coordination: Lab access, storage organization, safety compliance',
      'Vendor relations: Catering, venue, supplier negotiations'
    ],
    deliverables: [
      'Event success metrics (attendance, satisfaction)',
      'Equipment inventory reports',
      'Quarterly event calendar',
      'Cost per event analysis'
    ]
  },
  {
    id: 'legal',
    title: 'Legal & Compliance Lead',
    description: 'Contract management, e.V. compliance, risk management, data protection, documentation',
    responsibilities: [
      'Contract management: Partnership agreements, speaker contracts, venue agreements',
      'e.V. compliance: Board meeting protocols, member assembly preparation',
      'Risk management: Insurance claims, liability assessments, safety protocols',
      'Data protection: GDPR compliance, privacy policy updates, data handling procedures',
      'Documentation: Legal archive maintenance, template creation'
    ],
    deliverables: [
      'Quarterly compliance checklist',
      'Contract template library',
      'Annual legal health assessment',
      'GDPR audit reports'
    ]
  }
];