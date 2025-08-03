import { Calendar, MapPin, Users, Clock } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import { AnalyticsWrapper } from "@/components/AnalyticsWrapper";
import { CONVERSION_EVENTS } from "@/lib/analytics";
import { getEventForConferencePage, getPastEventsWithGallery, getActivePartners } from "@/lib/sanity-queries";
import { buildImageUrl } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Conference | Robotics Collective",
  description: "Join our robotics conference featuring keynotes, pitches, and networking",
  keywords: [
    "robotics conference",
    "keynotes",
    "pitches",
    "networking",
    "professional exchange",
    "collaboration",
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

export default async function ConferencePage() {
  // Fetch all data at build time - zero runtime traffic
  const [event, pastEvents, allPartners] = await Promise.all([
    getEventForConferencePage(),
    getPastEventsWithGallery(),
    getActivePartners()
  ]);

  // Use event partners if specified, otherwise use all active partners
  const displayPartners = event?.eventPartners && event.eventPartners.length > 0 
    ? event.eventPartners 
    : allPartners;

  // Fallback content when no event is found
  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Robotics <span className="text-primary">Conference</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Stay tuned for our next exciting robotics conference!
            </p>
            <p className="text-gray-400">
              No upcoming conference events are currently scheduled.
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
  const eventImage = event.featuredImage ? buildImageUrl(event.featuredImage) : galleryImages[0].src;

  return (
    <div className="min-h-screen bg-background">
      <div className="">
        {/* Hero Section - Dynamic */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background backdrop-blur-[1px] z-10"></div>
            <img
              src={eventImage}
              alt={`${event.title} banner`}
              className="w-full h-full object-cover opacity-80 z-0"
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {event.title}
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                A conference dedicated to professional exchange, advanced
                collaboration, and unparalleled networking in robotics. Connect
                with industry professionals, researchers, and students to bridge
                research and practical applications.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-card p-6 rounded-lg flex items-center justify-center flex-col">
                  <Calendar className="text-primary h-8 w-8 mb-3" />
                  <h3 className="text-lg font-semibold mb-1">Date</h3>
                  <p className="text-gray-300">
                    {eventDate.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg flex items-center justify-center flex-col">
                  <Clock className="text-primary h-8 w-8 mb-3" />
                  <h3 className="text-lg font-semibold mb-1">Time</h3>
                  <p className="text-gray-300">
                    {eventDate.toLocaleTimeString('en-US', {
                      hour: 'numeric',
                      minute: '2-digit'
                    })}
                    {endDate && ` - ${endDate.toLocaleTimeString('en-US', {
                      hour: 'numeric',
                      minute: '2-digit'
                    })}`}
                  </p>
                </div>
                <a
                  href={event.location?.venue ? 
                    `https://maps.google.com/maps?q=${encodeURIComponent(event.location.venue + ', ' + (event.location.city || 'Aachen'))}` : 
                    undefined
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card p-6 rounded-lg flex items-center justify-center flex-col hover:bg-card/80 transition-colors"
                >
                  <MapPin className="text-primary h-8 w-8 mb-3" />
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p className="text-gray-300">{event.location?.venue || "TBA"}</p>
                  <p className="text-gray-300">{event.location?.city || "Aachen"}, Germany</p>
                </a>
              </div>

              <AnalyticsWrapper
                href={event.registrationInfo?.registrationLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                trackEvent={{
                  type: 'conversion',
                  eventName: CONVERSION_EVENTS.MEETUP_REGISTRATION_CLICK,
                  parameters: {
                    event_date: event.eventDate,
                    location: `${event.location?.venue || 'TBA'}, ${event.location?.city || 'Aachen'}`,
                    platform: 'luma'
                  }
                }}
              >
                <Button
                  variant="default"
                  className="px-8 py-6 text-lg rounded-3xl mt-3"
                  size="lg"
                >
                  {event.customRegistrationText || "Register Now"}
                </Button>
              </AnalyticsWrapper>
            </div>
          </div>
        </section>

        {/* Conference Highlights - Dynamic */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Conference <span className="text-primary">Highlights</span>
              </h2>
              
              {event.highlights && event.highlights.length > 0 ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.highlights.map((highlight, index) => (
                    <li 
                      key={index} 
                      className={`bg-card p-6 rounded-md ${
                        index === event.highlights!.length - 1 && event.highlights!.length % 2 === 1 
                          ? 'col-span-1 md:col-span-2' 
                          : ''
                      }`}
                    >
                      <span className="text-primary font-medium">{highlight.title}</span>{" "}
                      {highlight.description}
                    </li>
                  ))}
                </ul>
              ) : (
                // Fallback highlights when none are defined in Sanity
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="bg-card p-6 rounded-md">
                    <span className="text-primary font-medium">Keynote Presentations</span>{" "}
                    from industry leaders and researchers
                  </li>
                  <li className="bg-card p-6 rounded-md">
                    <span className="text-primary font-medium">Project Pitches</span>{" "}
                    showcasing innovative robotics solutions
                  </li>
                  <li className="bg-card p-6 rounded-md">
                    <span className="text-primary font-medium">Interactive Booths</span>{" "}
                    demonstrating cutting-edge technologies
                  </li>
                  <li className="bg-card p-6 rounded-md">
                    <span className="text-primary font-medium">Professional Networking</span>{" "}
                    connecting industry, academia, and students
                  </li>
                </ul>
              )}

              <div className="mt-12 bg-card/50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-center">
                  Join Our <span className="text-primary">Conference</span>
                </h3>
                <p className="text-lg text-gray-300">
                  Don't miss this opportunity for professional exchange and
                  unparalleled networking. Connect with industry professionals,
                  researchers, and students to bridge research and practical
                  applications in robotics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section - Dynamic */}
        {displayPartners && displayPartners.length > 0 && (
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Our <span className="text-primary">Partners</span>
              </h2>
              <div className="overflow-hidden">
                <div className="flex animate-infinite-scroll">
                  {/* First set of logos */}
                  <div className="flex min-w-full space-x-12 items-center justify-around">
                    {displayPartners.map((partner, index) => {
                      const logoUrl = partner.logo ? buildImageUrl(partner.logo) : partner.logoUrl?.url;
                      if (!logoUrl) return null;
                      
                      return (
                        <a
                          key={`first-${partner._id}`}
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0"
                        >
                          <img
                            src={logoUrl}
                            alt={partner.logoUrl?.alt || partner.name}
                            className="h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                          />
                        </a>
                      );
                    })}
                  </div>
                  {/* Duplicate set for seamless loop */}
                  <div className="flex min-w-full space-x-12 items-center justify-around">
                    {displayPartners.map((partner, index) => {
                      const logoUrl = partner.logo ? buildImageUrl(partner.logo) : partner.logoUrl?.url;
                      if (!logoUrl) return null;
                      
                      return (
                        <a
                          key={`second-${partner._id}`}
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0"
                        >
                          <img
                            src={logoUrl}
                            alt={partner.logoUrl?.alt || partner.name}
                            className="h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                          />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Past Events Gallery - Dynamic */}
        {pastEvents && pastEvents.length > 0 && (
          <section className="py-16 md:py-24 bg-card/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Past <span className="text-primary">Events</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((pastEvent, index) => {
                  const eventImage = pastEvent.featuredImage ? buildImageUrl(pastEvent.featuredImage) : 
                    (pastEvent.gallery && pastEvent.gallery.length > 0 ? buildImageUrl(pastEvent.gallery[0]) : null);
                  const eventDate = new Date(pastEvent.eventDate);
                  
                  return (
                    <div
                      key={pastEvent._id}
                      className="bg-card rounded-lg overflow-hidden hover:bg-card/80 transition-all duration-300 group"
                    >
                      {eventImage && (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={eventImage}
                            alt={pastEvent.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
                          {eventDate.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        {pastEvent.location?.venue && (
                          <div className="flex items-center text-sm text-gray-400">
                            <MapPin className="w-4 h-4 mr-2" />
                            {pastEvent.location.venue}, {pastEvent.location.city || 'Aachen'}
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
