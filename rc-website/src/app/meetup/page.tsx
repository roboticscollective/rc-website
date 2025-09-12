import { Calendar, MapPin, Users, Clock, CheckCircle2, Building } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import { AnalyticsWrapper } from "@/components/AnalyticsWrapper";
import { CONVERSION_EVENTS } from "@/lib/analytics";
import {
  getEventForConferencePage,
  getPastEventsWithGallery,
  getActivePartners,
} from "@/lib/sanity-queries";
import { buildImageUrl, renderRichTextWithAccents } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { LogoCarousel } from "@/components/LogoCarousel";
import { PortableText } from "@portabletext/react";

export const metadata: Metadata = {
  title: "Meetup | Robotics Collective",
  description:
    "Join our robotics meetups for community networking, knowledge sharing, and hands-on demonstrations",
  keywords: [
    "robotics meetup",
    "community",
    "networking",
    "knowledge sharing",
    "demonstrations",
    "collaboration",
    "local events",
  ],
};

/* "https://res.cloudinary.com/dilan3qfq/image/upload/v1727137785/openroboverse/Meetup/meetup_logo_xt2pev.jpg",
"https://res.cloudinary.com/dilan3qfq/image/upload/v1727137781/openroboverse/Meetup/meetup_back_cjvymg.jpg",
"https://res.cloudinary.com/dilan3qfq/image/upload/v1727137776/openroboverse/Meetup/meetup_pre_up1_fohztd.jpg",
"https://res.cloudinary.com/dilan3qfq/image/upload/v1727138102/openroboverse/Meetup/meetup_pre_up3_ojmush.jpg",
"https://res.cloudinary.com/dilan3qfq/image/upload/v1745223313/1730150684425_qqtque.jpg",
"https://res.cloudinary.com/dilan3qfq/image/upload/v1745223313/1730150684646-3_h250bh.jpg",
"https://res.cloudinary.com/dilan3qfq/image/upload/v1745223313/1730150684504-2_c3oalr.jpg ",
 */
const galleryImages = [
  {
    src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1727137785/openroboverse/Meetup/meetup_logo_xt2pev.jpg",
    span: "col-span-2 row-span-2",
    alt: "orom logo picture meetup #1",
  },

  {
    src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1745223313/1730150684646-3_h250bh.jpg",
    span: "col-span-2 row-span-2",
    alt: "orom logo picture meetup #2",
  },
  {
    src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1727137781/openroboverse/Meetup/meetup_back_cjvymg.jpg",
    span: "col-span-2 row-span-1",
    alt: "Orom stand",
  },
  {
    src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1727137776/openroboverse/Meetup/meetup_pre_up1_fohztd.jpg",
    span: "col-span-2 row-span-1",
    alt: "Adience Elysee",
  },
  {
    src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1745223313/1730150684504-2_c3oalr.jpg",
    span: "col-span-1 row-span-1",
    alt: "WZL Pitch",
  },
  {
    src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1727138102/openroboverse/Meetup/meetup_pre_up3_ojmush.jpg",
    span: "col-span-1 row-span-1",
    alt: "Vectioneer stand",
  },
  {
    src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1745223313/1730150684425_qqtque.jpg",
    span: "col-span-2 row-span-1",
    alt: "Siemens Pitch",
  },
];

export default async function MeetupPage() {
  // Fetch all data at build time - zero runtime traffic
  const [event, pastEvents, allPartners] = await Promise.all([
    getEventForConferencePage(),
    getPastEventsWithGallery(),
    getActivePartners(),
  ]);

  // Use event partners if specified, otherwise use all active partners
  const displayPartners =
    event?.eventPartners && event.eventPartners.length > 0
      ? event.eventPartners
      : allPartners;

  // helper
  const isSvg = (url: string) => url?.toLowerCase().endsWith(".svg");

  // Fallback content when no event is found
  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Robotics <span className="text-primary">Meetup</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Stay tuned for our next exciting robotics meetup!
            </p>
            <p className="text-gray-400">
              No upcoming meetup events are currently scheduled.
            </p>
          </div>
        </div>
        <CTASection />
      </div>
    );
  }

  // Format event date and time
  const eventDate = new Date(event.eventDate);
  const endDate = event.endDate ? new Date(event.endDate) : null;
  const eventImage = event.featuredImage
    ? buildImageUrl(event.featuredImage)
    : galleryImages[0].src;

  return (
    <div className="min-h-screen bg-background">
      <div className="">
        {/* Hero Section - Redesigned for Maximum Impact */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Enhanced Background with Multiple Layers */}
          <div className="absolute inset-0 z-0">
            {/* Primary background image */}
            <Image
              src={eventImage}
              alt={`${event.title} banner`}
              fill
              className="object-cover opacity-40 z-0"
              priority
            />
            {/* Gradient overlays for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-secondary/10 via-transparent to-primary/10 z-15"></div>
            
            {/* Dynamic glow effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-secondary/20 rounded-full filter blur-3xl animate-pulse-slow z-20"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-primary/15 rounded-full filter blur-3xl animate-pulse-slow z-20"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              
              {/* Left Side - Compelling Copy */}
              <div className="text-center lg:text-left">
                {/* Eye-catching badge */}
                <div className="inline-flex items-center gap-2 bg-yellow-secondary/20 border border-yellow-secondary/30 rounded-full px-4 py-2 mb-6">
                  <div className="w-2 h-2 bg-yellow-secondary rounded-full animate-pulse"></div>
                  <span className="text-yellow-secondary font-semibold text-sm">AACHEN'S #1 ROBOTICS EVENT</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="block">Join the</span>
                  <span className="block text-yellow-secondary">Robotics</span>
                  <span className="block">Community</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                  Connect with researchers, professionals, students, and curious minds. Experience live robot demos and be part of the region's most welcoming robotics community.
                </p>

                {/* Social proof stats */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-secondary">300+</div>
                    <div className="text-sm text-gray-400">Total Attendees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">70%</div>
                    <div className="text-sm text-gray-400">Roboticists</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-secondary">20+</div>
                    <div className="text-sm text-gray-400">Projects & Demos</div>
                  </div>
                </div>

                {/* Prominent CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <AnalyticsWrapper
                    href={event.registrationInfo?.registrationLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                    trackEvent={{
                      type: "conversion",
                      eventName: CONVERSION_EVENTS.MEETUP_REGISTRATION_CLICK,
                      parameters: {
                        event_date: event.eventDate,
                        location: `${event.location?.venue || "TBA"}, ${
                          event.location?.city || "Aachen"
                        }`,
                        platform: "luma",
                      },
                    }}
                  >
                    <Button
                      variant="default"
                      className="w-full sm:w-auto px-8 py-4 text-lg rounded-full bg-gradient-to-r from-yellow-secondary to-yellow-secondary/90 text-black font-bold hover:from-yellow-secondary/90 hover:to-yellow-secondary border-2 border-yellow-secondary/30 shadow-lg hover:shadow-yellow-secondary/20 transition-all duration-300"
                      size="lg"
                    >
                      {event.customRegistrationText || "Reserve Your Spot - FREE"}
                    </Button>
                  </AnalyticsWrapper>
                  
                  <a 
                    href="https://luma.com/58e3ws9x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto px-8 py-4 text-lg rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300"
                      size="lg"
                    >
                      Exhibit Your Innovation
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right Side - Event Details Card */}
              <div className="relative">
                <div className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-lg border border-primary/20 rounded-2xl p-8 shadow-2xl">
                  {/* Event title */}
                  <h2 className="text-2xl font-bold mb-6 text-center text-primary">{event.title}</h2>
                  
                  {/* Event info grid */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-yellow-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar className="text-yellow-secondary h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Date</h3>
                        <p className="text-gray-300">
                          {eventDate.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="text-primary h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Time</h3>
                        <p className="text-gray-300">
                          {eventDate.toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                          })}
                          {endDate &&
                            ` - ${endDate.toLocaleTimeString("en-US", {
                              hour: "numeric",
                              minute: "2-digit",
                            })}`}
                        </p>
                      </div>
                    </div>

                    <a
                      href={
                        event.location?.venue
                          ? `https://maps.google.com/maps?q=${encodeURIComponent(
                              event.location.venue +
                                ", " +
                                (event.location.city || "Aachen")
                            )}`
                          : undefined
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 hover:bg-card/30 p-2 -m-2 rounded-lg transition-colors"
                    >
                      <div className="w-12 h-12 bg-yellow-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-yellow-secondary h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Location</h3>
                        <p className="text-gray-300">
                          {event.location?.venue || "TBA"}
                        </p>
                        <p className="text-gray-300 text-sm">
                          {event.location?.city || "Aachen"}, Germany
                        </p>
                      </div>
                    </a>
                  </div>

                  {/* Quick highlights */}
                  <div className="mt-8 pt-6 border-t border-primary/20">
                    <h3 className="font-semibold mb-4 text-center">What to Expect</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-yellow-secondary" />
                        <span>Diverse Robotics Projects</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Expert Talks and Discussions</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-yellow-secondary" />
                        <span>Welcoming Networking Atmosphere</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>High-Energy Robotics Community</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meetup Highlights - Dynamic */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-card/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  What Makes Our <span className="text-yellow-secondary">Meetup</span> Special
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Experience the perfect blend of innovation, networking, and hands-on robotics exploration
                </p>
              </div>

              {event.highlights && event.highlights.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-br from-card/50 to-card/30 border border-primary/20 hover:border-primary/40 p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ${
                        index === event.highlights!.length - 1 &&
                        event.highlights!.length % 2 === 1
                          ? "col-span-1 md:col-span-2"
                          : ""
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-6 h-6 text-primary" />
                        </div>
                        <div className="prose prose-invert prose-lg max-w-none">
                          {renderRichTextWithAccents(highlight)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Enhanced fallback highlights when none are defined in Sanity
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-br from-yellow-secondary/10 to-card/50 border border-yellow-secondary/20 hover:border-yellow-secondary/40 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-secondary/10 group">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Building className="w-8 h-8 text-yellow-secondary" />
                      </div>
                      <h3 className="text-lg font-bold text-yellow-secondary mb-2">Live Project Showcases</h3>
                      <p className="text-sm text-gray-300">See cutting-edge robots and innovations from local teams and industry leaders</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 to-card/50 border border-primary/20 hover:border-primary/40 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-2">Hands-on Experience</h3>
                      <p className="text-sm text-gray-300">Touch, test, and interact directly with robots and automation systems</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-red-accent/10 to-card/50 border border-red-accent/20 hover:border-red-accent/40 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-accent/10 group">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle2 className="w-8 h-8 text-red-accent" />
                      </div>
                      <h3 className="text-lg font-bold text-red-accent mb-2">Expert Knowledge</h3>
                      <p className="text-sm text-gray-300">Learn from industry professionals and researchers in intimate settings</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 to-card/50 border border-primary/20 hover:border-primary/40 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-2">Welcoming Networking Atmosphere</h3>
                      <p className="text-sm text-gray-300">Connect with researchers, professionals, students, and curious minds from our growing robotics community</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Join Our Meetup */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-8 text-center">
                  Join Our <span className="text-primary">Meetup</span>
                </h3>
                
                <div className="max-w-2xl mx-auto">
                  <p className="text-center text-gray-300 mb-8">
                    Don't miss this opportunity for professional exchange and unparalleled networking. 
                    Connect with industry professionals, researchers, and students to bridge research 
                    and practical applications in robotics.
                  </p>
                  
                  {/* Standard Participation */}
                  <div className="bg-card/50 border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all duration-300">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold text-primary mb-2">Join the Meetup</h4>
                      <p className="text-sm text-gray-400">Main event starts at 18:30</p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Access to all presentations and demos</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Networking with robotics community</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Knowledge sharing sessions</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Hands-on robot interactions</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-2">Free</div>
                      <p className="text-xs text-gray-400 mb-4">Open to all robotics enthusiasts</p>
                      <Link href={event?.registrationInfo?.registrationLink || "#"}>
                        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-black">
                          Register Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stats Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-card/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Leading <span className="text-yellow-secondary">Robotics Gathering</span> in the Region
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                The Aachen Robotics Community Meetup has become the leading robotics gathering in the region. 
                Our events consistently bring together <span className="text-yellow-secondary font-bold">150+ passionate participants</span> from 
                <span className="text-yellow-secondary font-bold"> diverse backgrounds</span> - from industry professionals to curious students and hobbyists.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-card/50 border border-yellow-secondary/20 rounded-lg p-6 hover:border-yellow-secondary/40 transition-all duration-300">
                  <div className="text-3xl font-bold text-yellow-secondary mb-2">150+</div>
                  <div className="text-sm text-gray-300">Participants per Event</div>
                </div>
                <div className="bg-card/50 border border-yellow-secondary/20 rounded-lg p-6 hover:border-yellow-secondary/40 transition-all duration-300">
                  <div className="text-3xl font-bold text-yellow-secondary mb-2">ALL</div>
                  <div className="text-sm text-gray-300">Levels Welcome</div>
                </div>
                <div className="bg-card/50 border border-yellow-secondary/20 rounded-lg p-6 hover:border-yellow-secondary/40 transition-all duration-300">
                  <div className="text-3xl font-bold text-yellow-secondary mb-2">#1</div>
                  <div className="text-sm text-gray-300">Regional Robotics Event</div>
                </div>
              </div>

              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                This is your chance to connect with <span className="text-primary font-semibold">researchers, professionals, students, hobbyists, and curious minds</span> who are exploring and shaping the future of robotics together.
              </p>
            </div>
          </div>
        </section>

        {/* Be in the center of our next Event */}
        <section className="py-16 md:py-24 bg-card/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Be in the center of our next <span className="text-primary">Event</span>
              </h2>
              
              <div className="max-w-5xl mx-auto">
                {/* Introduction */}
                <div className="text-center mb-12">
                  <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
                    We believe innovation thrives through open collaboration and knowledge sharing. Whether you're working on a weekend hobby project, launching a startup, or representing an established company, we genuinely welcome your participation. Our community values diverse perspectives and fresh ideas that drive robotics forward.
                  </p>
                  
                  <div className="bg-card/30 border border-primary/20 rounded-lg p-6 max-w-4xl mx-auto">
                    <h3 className="text-xl font-semibold text-primary mb-4">Exhibitor Contribution</h3>
                    <p className="text-gray-300 mb-4">
                      To make this event possible, we kindly ask exhibitors for a contribution of <span className="font-bold text-yellow-secondary">€450 or more</span>. But you are free to choose the amount that works for you.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-yellow-secondary/10 border border-yellow-secondary/20 rounded p-4">
                        <p><span className="font-bold text-yellow-secondary">Premium Exhibitors (from €200 upwards)</span> will be featured as official sponsors in all communication channels and can take part in the keynote session.</p>
                      </div>
                      <div className="bg-primary/10 border border-primary/20 rounded p-4">
                        <p><span className="font-bold text-primary">Community Exhibitors</span> are equally welcome. If the standard contribution is too high, simply suggest an amount that works for you. Please note that spaces are limited, and Premium Exhibitors will be given priority.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Exhibitor Types */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Premium Exhibitor */}
                  <div className="bg-gradient-to-b from-yellow-secondary/10 to-card/50 border border-yellow-secondary/30 rounded-lg p-8 hover:border-yellow-secondary/50 transition-all duration-300 relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-secondary to-yellow-secondary/70"></div>
                    
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-yellow-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Building className="w-8 h-8 text-yellow-secondary" />
                      </div>
                      <h4 className="text-xl font-bold text-yellow-secondary mb-2">Premium Exhibitor</h4>
                      <p className="text-sm text-gray-400">€200+ • Official Sponsor Status</p>
                    </div>
                    
                    <div className="space-y-3 flex-grow">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-yellow-secondary flex-shrink-0" />
                        <span className="text-sm">Official sponsor in all communications</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-yellow-secondary flex-shrink-0" />
                        <span className="text-sm font-medium">Exclusive keynote presentation spot</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-yellow-secondary flex-shrink-0" />
                        <span className="text-sm">Private pre-networking session at 15:00</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-yellow-secondary flex-shrink-0" />
                        <span className="text-sm">Dedicated exhibition space including a screen</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-yellow-secondary flex-shrink-0" />
                        <span className="text-sm">Priority booking and setup </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-yellow-secondary flex-shrink-0" />
                        <span className="text-sm">(Optional) Get CVs of robotics seeking jobs or internships</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-yellow-secondary flex-shrink-0" />
                        <span className="text-sm">Summary and contact of other exhibitors and community contributors</span>
                      </div>
                    </div>
                    
                    <div className="text-center mt-6">
                      <div className="text-2xl font-bold text-yellow-secondary mb-1">€450</div>
                      <p className="text-xs text-gray-400 mb-4">Standard rate • Flexible pricing available</p>
                      <a 
                        href="https://luma.com/58e3ws9x"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full bg-yellow-secondary text-black hover:bg-yellow-secondary/90">
                          Become a Premium Exhibitor
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* Community Exhibitor */}
                  <div className="bg-gradient-to-b from-primary/10 to-card/50 border border-primary/30 rounded-lg p-8 hover:border-primary/50 transition-all duration-300 relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/70"></div>
                    
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold text-primary mb-2">Community Exhibitor</h4>
                      <p className="text-sm text-gray-400">Flexible Contribution • Community Focus</p>
                    </div>
                    
                    <div className="space-y-3 flex-grow">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Exhibition space for your project</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Community spotlight opportunity</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Private pre-networking session at 15:00</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Support innovation ecosystem</span>
                      </div>
                    </div>
                    
                    <div className="text-center mt-6">
                      <div className="text-2xl font-bold text-primary mb-1">Your Choice</div>
                      <p className="text-xs text-gray-400 mb-4">Suggest an amount that works for you</p>
                      <a 
                        href="https://luma.com/58e3ws9x"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-black">
                          Join as Community Exhibitor
                        </Button>
                      </a>
                      <p className="text-xs text-gray-400 mt-3">
                        Limited spaces • Premium Exhibitors have priority
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Gallery - Dynamic */}
        {event.gallery && event.gallery.length > 0 && (
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Event <span className="text-primary">Gallery</span>
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                {event.gallery.map((image, idx) => {
                  const imageUrl = buildImageUrl(image);
                  const getWidthClass = (index: number) => {
                    const patterns = [
                      "w-[28rem]", // Extra wide
                      "w-96", // Wide
                      "w-[22rem]", // Medium-wide
                      "w-80", // Medium
                      "w-[26rem]", // Wide
                      "w-72", // Medium
                    ];
                    return patterns[index % patterns.length];
                  };

                  return (
                    <div
                      key={`gallery-${idx}`}
                      className={`h-80 md:h-96 ${getWidthClass(
                        idx
                      )} rounded-lg flex-shrink-0 bg-card/20 flex items-center justify-center relative overflow-hidden`}
                    >
                      <Image
                        src={imageUrl}
                        alt={
                          image.alt ||
                          image.caption ||
                          `${event.title} gallery image ${idx + 1}`
                        }
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105 rounded-lg"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <LogoCarousel partners={displayPartners} title="Our Partners" />
        {/* Past Events Gallery - Dynamic */}
        {pastEvents && pastEvents.length > 0 && (
          <section className="py-16 md:py-24 bg-card/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Past <span className="text-primary">Events</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((pastEvent, index) => {
                  const eventImage = pastEvent.featuredImage
                    ? buildImageUrl(pastEvent.featuredImage)
                    : pastEvent.gallery && pastEvent.gallery.length > 0
                    ? buildImageUrl(pastEvent.gallery[0])
                    : null;
                  const eventDate = new Date(pastEvent.eventDate);

                  return (
                    <div
                      key={pastEvent._id}
                      className="bg-card rounded-lg overflow-hidden hover:bg-card/80 transition-all duration-300 group"
                    >
                      {eventImage && (
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={eventImage}
                            alt={pastEvent.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs rounded-full mb-2">
                              {pastEvent.eventType}
                            </span>
                          </div>
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {pastEvent.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-400 mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          {eventDate.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        {pastEvent.location?.venue && (
                          <div className="flex items-center text-sm text-gray-400">
                            <MapPin className="w-4 h-4 mr-2" />
                            {pastEvent.location.venue},{" "}
                            {pastEvent.location.city || "Aachen"}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <CTASection />
      </div>
    </div>
  );
}
