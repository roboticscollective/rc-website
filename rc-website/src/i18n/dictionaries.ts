import type { Locale } from "./config";

/**
 * All interface text, per language. German is the reference: the English
 * dictionary must have exactly the same keys, so a missing translation
 * fails the build instead of showing up as a blank on the site.
 *
 * Event content (titles, descriptions) lives with the events in
 * `lib/events.ts` / `lib/events.de.ts`; imprint and privacy text lives in
 * their pages.
 */
const de = {
  meta: {
    siteDescription:
      "Das Robotics Collective Aachen ist ein Robotik-Club für Studierende der RWTH Aachen und der FH Aachen.",
    homeTitle: "Robotics Collective Aachen | Robotik-Club für Studierende in Aachen",
    keywords: [
      "Robotik",
      "Robotik Aachen",
      "Robotik-Club",
      "studentischer Robotik-Club",
      "RWTH Aachen",
      "FH Aachen",
      "Community",
      "Meetups",
      "Hackathon",
      "ESRA",
    ],
    ogImageAlt: "Community-Meetup des Robotics Collective Aachen",
  },
  nav: {
    community: "Community",
    build: "Galerie",
    team: "Team",
    events: "Events",
    join: "Beitreten",
    homeAria: "Robotics Collective Aachen – Startseite",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    /** Label of the link to the other language. */
    switchLabel: "EN",
    switchAria: "Switch to English",
  },
  hero: {
    studentsFrom: "Studierende der",
    headline: "Robotics Collective Aachen",
    tagline:
      "Ein studentischer Robotik-Club, offen für alle, die an Robotern arbeiten wollen.",
    join: "Beitreten",
    partners: "Partner",
    fhAlt: "FH Aachen – University of Applied Sciences",
  },
  video: {
    playWithSound: "Video mit Ton abspielen",
    mute: "Ton ausschalten",
  },
  community: {
    eyebrow: "0.2/ Community",
    aachenAlt: "Community-Meetup des Robotics Collective Aachen in Aachen",
    berlinAlt: "Mitglieder des Robotics Collective Aachen in Berlin",
    juelichAlt:
      "Clubmitglieder arbeiten bei einer Praxis-Session in Jülich an Roboterarmen",
    reelLabel: "Instagram-Reel: Certified gentleman",
  },
  projects: {
    eyebrow: "0.3/ Galerie",
    photoAlt: "Mitglieder des Robotics Collective Aachen bauen und präsentieren Roboter",
  },
  team: {
    eyebrow: "0.4/ Gründungsteam & Leitung",
    manyMore: "Und viele mehr",
    joinTeam: "Beitreten →",
    roles: {
      "Initiator and Co-Founder": "Initiator und Mitgründer",
      "Co-Founder": "Mitgründer",
      "Technical Projects Lead": "Leitung technische Projekte",
    } as Record<string, string>,
  },
  nextEvent: {
    srHeading: "Nächstes Event",
    upcoming: "Demnächst",
    allEvents: "Alle Events",
  },
  eventsPage: {
    title: "Events | Robotics Collective Aachen",
    description:
      "Meetups, Show & Tells und Happy Hours des Robotics Collective in Aachen: Komm vorbei, zeig, woran du baust, und lerne die Robotik-Community kennen.",
    ogDescription:
      "Meetups, Show & Tells und Happy Hours des Robotics Collective in Aachen.",
    eyebrow: "Events",
    headline: "Komm vorbei und bau mit.",
    upcoming: "0.1/ Demnächst",
    /** Sentence around the Instagram and LinkedIn links. */
    nothingPlanned: [
      "Gerade ist nichts geplant. Neuigkeiten findest du auf ",
      " und ",
      ".",
    ],
    past: "0.2/ Vergangene Events",
  },
  event: {
    notFoundTitle: "Event nicht gefunden | Robotics Collective Aachen",
    allEvents: "Alle Events",
    pastEvent: "Vergangenes Event",
    when: "Wann",
    where: "Wo",
    hostedBy: "Veranstaltet von",
    about: "Über das Event",
    sponsoredBy: "Gesponsert von",
    supportedBy: "Unterstützt von",
    noticeTitle: "Hinweis zu Daten und Medien.",
    noticeText:
      "Mit deiner Anmeldung stimmst du zu, dass deine Daten für die Organisation des Events und die Kommunikation dazu genutzt werden. Während des Events können Fotos und Videos entstehen, die das Robotics Collective für seine Kommunikation verwendet. Mehr dazu in unserer",
    privacyLink: "Datenschutzerklärung",
    posterAlt: "Plakat zu",
    overTitle: "Dieses Event ist vorbei",
    overText: "Danke an alle, die da waren! Schau dir an, was als Nächstes ansteht.",
    registrationTitle: "Anmeldung",
    registrationText:
      "Die Teilnahme ist kostenlos. Melde dich an, damit wir wissen, wie viel Brunch wir besorgen müssen.",
    seeUpcoming: "Kommende Events ansehen",
    register: "Anmelden",
    addToCalendar: "Zum Kalender hinzufügen",
    timeZoneNote: "Alle Zeiten in deutscher Zeit (MEZ/MESZ).",
    dateLabel: "Datum",
    locationLabel: "Ort",
    moreInfo: "Mehr Infos",
    openEnd: "Open End",
    tags: {
      "Lab Tour": "Laborführung",
      AI: "KI",
    } as Record<string, string>,
  },
  notFound: {
    title: "Seite nicht gefunden | Robotics Collective Aachen",
    description: "Die gesuchte Seite gibt es nicht.",
    eyebrow: "Fehler 404",
    text: "Diese Seite ist zu einem anderen Collective übergelaufen.",
  },
  footer: {
    rights: "Alle Rechte vorbehalten.",
    privacy: "Datenschutz",
    imprint: "Impressum",
  },
};

export type Dictionary = typeof de;

const en: Dictionary = {
  meta: {
    siteDescription:
      "Robotics Collective Aachen is a robotics club for students from RWTH Aachen and FH Aachen.",
    homeTitle: "Robotics Collective Aachen | Home",
    keywords: ["robotics", "community", "tech", "projects", "meetups", "aachen", "esra"],
    ogImageAlt: "Robotics Collective Aachen community meetup",
  },
  nav: {
    community: "Community",
    build: "Build",
    team: "Team",
    events: "Events",
    join: "Join us",
    homeAria: "Robotics Collective Aachen home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLabel: "DE",
    switchAria: "Zur deutschen Version",
  },
  hero: {
    studentsFrom: "Students from",
    headline: "We are the Robotics Collective Aachen",
    tagline: "A student robotics club. Open to anyone who wants to work on robots.",
    join: "Join us",
    partners: "Partners",
    fhAlt: "FH Aachen University of Applied Sciences",
  },
  video: {
    playWithSound: "Play video with sound",
    mute: "Mute video",
  },
  community: {
    eyebrow: "0.2/ Community",
    aachenAlt: "Robotics Collective Aachen community meetup in Aachen",
    berlinAlt: "Robotics Collective Aachen members in Berlin",
    juelichAlt: "Club members working on robot arms at a hands-on session in Jülich",
    reelLabel: "Instagram reel: Certified gentleman",
  },
  projects: {
    eyebrow: "0.3/ Behind the Build",
    photoAlt: "Robotics Collective Aachen members building and presenting robots",
  },
  team: {
    eyebrow: "0.4/ Founders & leads",
    manyMore: "And many more",
    joinTeam: "Join the team →",
    roles: {},
  },
  nextEvent: {
    srHeading: "Upcoming event",
    upcoming: "Upcoming",
    allEvents: "All events",
  },
  eventsPage: {
    title: "Events | Robotics Collective Aachen",
    description:
      "Meetups, show & tells and Happy Hours from the Robotics Collective in Aachen. Come build, share and meet the community.",
    ogDescription:
      "Meetups, show & tells and Happy Hours from the Robotics Collective in Aachen.",
    eyebrow: "Events",
    headline: "Come build with us.",
    upcoming: "0.1/ Upcoming",
    nothingPlanned: ["Nothing planned right now. Follow us on ", " or ", "."],
    past: "0.2/ Past",
  },
  event: {
    notFoundTitle: "Event not found | Robotics Collective Aachen",
    allEvents: "All events",
    pastEvent: "Past event",
    when: "When",
    where: "Where",
    hostedBy: "Hosted by",
    about: "About the event",
    sponsoredBy: "Sponsored by",
    supportedBy: "Supported by",
    noticeTitle: "Data & media notice.",
    noticeText:
      "By registering, you agree that your data may be used for event organization and communication. Photos and videos may be taken during the event and used for Robotics Collective communication. See our",
    privacyLink: "privacy policy",
    posterAlt: "Poster for",
    overTitle: "This one is over",
    overText: "Thanks to everyone who came by. Check what is coming up next.",
    registrationTitle: "Registration",
    registrationText: "Free to attend. Sign up so we know how much brunch to get.",
    seeUpcoming: "See upcoming events",
    register: "Register",
    addToCalendar: "Add to calendar",
    timeZoneNote: "All times Europe/Berlin (CET/CEST).",
    dateLabel: "Date",
    locationLabel: "Location",
    moreInfo: "More information",
    openEnd: "open end",
    tags: {},
  },
  notFound: {
    title: "Page Not Found | Robotics Collective Aachen",
    description: "The page you're looking for couldn't be found.",
    eyebrow: "Error 404",
    text: "This page went off and joined another collective.",
  },
  footer: {
    rights: "All rights reserved.",
    privacy: "Privacy",
    imprint: "Imprint",
  },
};

const dictionaries: Record<Locale, Dictionary> = { de, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
