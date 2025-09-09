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
        {/* Hero Section - Dynamic */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background backdrop-blur-[1px] z-10"></div>
            <Image
              src={eventImage}
              alt={`${event.title} banner`}
              fill
              className="object-cover opacity-80 z-0"
              priority
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {event.title}
              </h1>
              {event.description && event.description.length > 0 ? (
                <div className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto prose prose-invert prose-xl">
                  <PortableText
                    value={event.description}
                    components={{
                      block: {
                        normal: ({ children }) => (
                          <p className="text-xl text-gray-300">{children}</p>
                        ),
                      },
                      marks: {
                        strong: ({ children }) => (
                          <strong className="text-primary">{children}</strong>
                        ),
                      },
                    }}
                  />
                </div>
              ) : (
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                  A community meetup for robotics enthusiasts, researchers, and 
                  professionals to share knowledge, showcase projects, and build 
                  connections. Perfect for learning, networking, and exploring 
                  the latest trends in robotics.
                </p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-card p-6 rounded-lg flex items-center justify-center flex-col">
                  <Calendar className="text-primary h-8 w-8 mb-3" />
                  <h3 className="text-lg font-semibold mb-1">Date</h3>
                  <p className="text-gray-300">
                    {eventDate.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg flex items-center justify-center flex-col">
                  <Clock className="text-primary h-8 w-8 mb-3" />
                  <h3 className="text-lg font-semibold mb-1">Time</h3>
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
                  className="bg-card p-6 rounded-lg flex items-center justify-center flex-col hover:bg-card/80 transition-colors"
                >
                  <MapPin className="text-primary h-8 w-8 mb-3" />
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p className="text-gray-300">
                    {event.location?.venue || "TBA"}
                  </p>
                  <p className="text-gray-300">
                    {event.location?.city || "Aachen"}, Germany
                  </p>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
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
                    className="px-8 py-6 text-lg rounded-3xl"
                    size="lg"
                  >
                    {event.customRegistrationText || "Register Now"}
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
                    className="px-8 py-6 text-lg rounded-3xl border-yellow-secondary text-yellow-secondary hover:bg-yellow-secondary hover:text-black"
                    size="lg"
                  >
                    Become an Exhibitor
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Meetup Highlights - Dynamic */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Meetup <span className="text-primary">Highlights</span>
              </h2>

              {event.highlights && event.highlights.length > 0 ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className={`bg-card p-6 rounded-md ${
                        index === event.highlights!.length - 1 &&
                        event.highlights!.length % 2 === 1
                          ? "col-span-1 md:col-span-2"
                          : ""
                      }`}
                    >
                      {renderRichTextWithAccents(highlight)}
                    </li>
                  ))}
                </ul>
              ) : (
                // Fallback highlights when none are defined in Sanity
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="bg-card p-6 rounded-md">
                    <span className="text-primary font-medium">
                      Project Showcases
                    </span>{" "}
                    from community members and local teams
                  </li>
                  <li className="bg-card p-6 rounded-md">
                    <span className="text-primary font-medium">
                      Hands-on Demos
                    </span>{" "}
                    try out robots and interact with creators
                  </li>
                  <li className="bg-card p-6 rounded-md">
                    <span className="text-primary font-medium">
                      Knowledge Sharing
                    </span>{" "}
                    learn from experts in informal settings
                  </li>
                  <li className="bg-card p-6 rounded-md">
                    <span className="text-primary font-medium">
                      Community Networking
                    </span>{" "}
                    connect with local robotics enthusiasts
                  </li>
                </ul>
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

        {/* Be in the center of our next Event */}
        <section className="py-16 md:py-24 bg-card/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Be in the center of our next <span className="text-primary">Event</span>
              </h2>
              
              <div className="max-w-2xl mx-auto">
                <p className="text-center text-gray-300 mb-8">
                  We facilitate knowledge transfer between research and industry. Whether you're looking to 
                  showcase innovation, recruit top talent, or simply connect with the robotics community, 
                  become part of the center of our next event.
                </p>
                
                {/* Premium Exhibitor */}
                <div className="bg-gradient-to-b from-yellow-secondary/10 to-card/50 border border-yellow-secondary/30 rounded-lg p-8 hover:border-yellow-secondary/50 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-secondary to-yellow-secondary/70"></div>
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-yellow-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-yellow-secondary" />
                    </div>
                    <h4 className="text-xl font-bold text-yellow-secondary mb-2">Premium Exhibitor</h4>
                    <p className="text-sm text-gray-400">Exclusive access + exhibition space</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-secondary flex-shrink-0" />
                      <span className="text-sm font-medium">Private pre-networking session at 15:00</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-secondary flex-shrink-0" />
                      <span className="text-sm">Dedicated exhibition space</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-secondary flex-shrink-0" />
                      <span className="text-sm">Access to high-density robotics and automation engineers talent pool</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-secondary flex-shrink-0" />
                      <span className="text-sm">Exclusive keynote presentation spot</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-secondary flex-shrink-0" />
                      <span className="text-sm">Direct access to partnerships, collaborations & new customers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-secondary flex-shrink-0" />
                      <span className="text-sm">Showcase yourself as regional automation leader</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-secondary flex-shrink-0" />
                      <span className="text-sm">Be a proud contributor to the Robotics Community</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-secondary flex-shrink-0" />
                      <span className="text-sm">All standard participation benefits</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-secondary mb-1">€450</div>
                    <p className="text-xs text-gray-400 mb-4">Negotiable based on company size</p>
                    <Link href="/contact">
                      <Button className="w-full mb-3 bg-yellow-secondary text-black hover:bg-yellow-secondary/90">
                        Become an Exhibitor
                      </Button>
                    </Link>
                    <div className="border-t border-gray-700/50 pt-4">
                      <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                        We believe innovation thrives through open collaboration and knowledge sharing. 
                        Whether you're working on a weekend hobby project, launching a startup, or 
                        representing an established company, we genuinely welcome your participation. 
                        Our community values diverse perspectives and fresh ideas that drive robotics forward.
                      </p>
                      <p className="text-xs text-yellow-secondary font-medium mb-2">
                        Supporting Innovation & Knowledge Transfer
                      </p>
                      <Link href="/contact">
                        <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-yellow-secondary">
                          Apply for Free Spot (Limited Capacity)
                        </Button>
                      </Link>
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
