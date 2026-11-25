import type { EventTranslation } from "./events";

/**
 * German texts for the events in `events.ts`, keyed by slug. Event names that
 * work as names (e.g. "Robotics Happy Hour") stay as they are; everything
 * else is German. A missing entry falls back to the English text.
 */
export const eventsDe: Record<string, EventTranslation> = {
  "robotics-community-meetup-june-2024": {
    title: "Robotics Community Meetup",
    tagline: "Das erste Robotics Community Meetup: Networking, Projektstände und Getränke.",
    intro: [
      "Das allererste Robotics Community Meetup in Aachen: ein Abend zum Networking mit Studierenden und Berufstätigen, die sich für Robotik begeistern, mit Ständen zu aktuellen Robotikprojekten und kostenlosen Getränken.",
      "Mit dieser Veranstaltungsreihe wollen wir in Aachen eine lokale Robotik-Community aufbauen, die Fachleute, Begeisterte und Studierende zusammenbringt.",
    ],
  },
  "robotics-community-meetup-october-2024": {
    title: "Robotics Community Meetup #2",
    tagline: "Wieder in der Digital Church: kurze Pitches, Projektstände, Getränke und Pizza.",
    intro: [
      "Nach der großen Beteiligung und dem positiven Feedback beim ersten Meetup fand das Robotics Community Meetup erneut am selben Ort statt.",
      "Ein Abend zum Networking mit Studierenden und Berufstätigen: Auf kurze Pitches folgte eine offene Runde an Ständen, an denen aktuelle Robotikprojekte vorgestellt wurden. Dazu gab es kostenlose Getränke und Pizza.",
    ],
  },
  "lerobot-hackathon-aachen-june-2025": {
    title: "AI+Robotics Hackathon: LeRobot Aachen Edition",
    tagline:
      "Die Aachener Ausgabe des LeRobot Hackathons von Hugging Face: zwei Tage KI auf echten Robotern.",
    intro: [
      "Eine lokale Ausgabe des LeRobot Hackathons von Hugging Face, direkt hier in Aachen.",
      "Zwei Tage lang arbeiteten Teams praktisch mit Roboterplattformen wie Franka Emika, Hanwha, UFactory, PiPER und SO-101. Sie integrierten aktuelle KI-Modelle, um Automatisierungsaufgaben aus der Praxis zu lösen, die wir gemeinsam mit unseren Partnern ausgewählt hatten.",
    ],
  },
  "robotics-community-meetup-october-2025": {
    title: "Robotics Community Meetup 2025",
    tagline: "Pitches, Projektstände und Networking mit dem Aachener Robotik-Ökosystem.",
    intro: [
      "Nach der großen Beteiligung und dem positiven Feedback unserer bisherigen Events kehrte das Robotics Community Meetup in die Digital Church zurück.",
      "Unsere Meetups bringen Forschung und Industrie zusammen und stärken so das Robotik-Ökosystem in Aachen. Ob Expertin, Enthusiast oder einfach neugierig auf Robotik: Hier lernst du die Community kennen.",
    ],
    sections: [
      {
        heading: "Was dich erwartet",
        items: [
          { title: "Kurze Pitches von Innovatoren" },
          {
            title: "Interaktive Stände",
            body: "Mit den neuesten Robotikprojekten.",
          },
          {
            title: "Networking",
            body: "Mit Studierenden, Forschenden und Industriepartnern.",
          },
          { title: "Kostenlose Getränke und Pizza" },
        ],
      },
    ],
  },
  "ai-robotics-hackathon-november-2025": {
    title: "AI + Robotics Hackathon",
    tagline: "Zwei Tage echte Roboter und echte Aufgaben in den Robotiklaboren des WZL.",
    intro: [
      "Die nächste Ausgabe unseres AI + Robotics Hackathons, von der Community für die Community: echte Roboter, echte Aufgaben, hilfsbereite Mentorinnen und Mentoren und Teams, die gemeinsam schnell dazulernen.",
      "Die Teams arbeiteten praktisch an Franka Emika, Hanwha, UR, LeRobot, AgileX und weiteren Plattformen. Die Aufgaben kamen von Partnern und spiegeln echten Bedarf in der Automatisierung wider. Zum Abschluss zeigten alle in einer Demo-Stunde, was sie gebaut hatten.",
    ],
    sections: [
      {
        heading: "Schwerpunkte",
        items: [
          {
            title: "Datenerfassung und KI-Modelltraining",
            body: "Für konkrete Aufgaben, mit einer Mischung aus Simulations- und Realdaten.",
          },
          { title: "Multi-Task-Modelltraining" },
          {
            title: "Hardware-Integration",
            body: "Neue Hardware für Manipulation und Teleoperation zur Datenerfassung.",
          },
        ],
      },
    ],
  },
  "robotics-happy-hour-ctrl-june-2026": {
    title: "Robotics Happy Hour × CTRL Open Doors",
    tagline:
      "Construction Robotics Edition: Live-Demos und Einblicke ins CTRL-Labor, gemeinsam mit dem ICoM.",
    intro: [
      "Die Robotics Happy Hour trifft auf Baurobotik, gemeinsam mit dem ICoM und den CTRL Open Doors. Ein Abend darüber, wie Robotik, Automatisierung und angewandte KI das Bauen verändern.",
      "Gastgeber dieser Ausgabe war das Construction Technology and Robotics Laboratory (CTRL), zusammen mit dem ICoM (Chair and Institute for Construction Management, Digital Engineering and Robotics in Construction).",
    ],
    sections: [
      {
        heading: "Was dich erwartet",
        items: [
          { title: "Live-Demos aus der Baurobotik" },
          { title: "Ein Blick hinter die Kulissen des CTRL-Labors" },
          { title: "Einblicke in aktuelle Forschung und Praxisprojekte" },
          { title: "Getränke, Networking und offene Gespräche" },
        ],
      },
    ],
  },
  "robotics-happy-hour-august-2026": {
    title: "Robotics Happy Hour: Brunch & Bring Your Own Robots",
    tagline:
      "Brunch, Show & Tell und jeder Roboter, an dem du gerade baust, ob er funktioniert oder nicht.",
    intro: [
      "Das Robotics Collective lädt dich zur nächsten Ausgabe der Robotics Happy Hour ein. Diesmal feiern wir unseren neuen Space, den uns die Gateway Factory möglich gemacht hat.",
      "Der Space entsteht gerade erst und soll ein Zuhause für die Robotik-Community in Aachen werden. Sei dabei, wenn wir mit dem Einrichten beginnen, werde Teil dieser Reise und erfahre, was dieser Ort aus unserer Sicht werden kann.",
      "Freu dich auf einen entspannten Brunch, Gespräche mit der Aachener Robotik-Community und vor allem: Bring deinen eigenen Roboter mit.",
    ],
    sections: [
      {
        heading: "Bring deinen eigenen Roboter mit",
        body: "Bring jeden Roboter mit, an dem du baust, mit dem du experimentierst oder den du einfach zeigen willst. Ob voll funktionsfähig, halb fertig oder nur von Klebeband und Optimismus zusammengehalten: Alles ist willkommen. Keine Keynote, keine Pitches, kein Druck.",
      },
      {
        heading: "Was dich erwartet",
        items: [
          {
            title: "Roboter-Show & Tell",
            body: "Alle Roboter sind willkommen, ob sie funktionieren oder nicht.",
          },
          {
            title: "Brunch und Erfrischungen",
            body: "Snacks, Getränke und gute Gespräche.",
          },
          {
            title: "Entspanntes Networking",
            body: "Lerne Studierende, Forschende, Start-ups und Leute aus der Industrie kennen.",
          },
          {
            title: "Eine wachsende Robotik-Community",
            body: "Triff Menschen, die in Aachen die Zukunft der Robotik bauen.",
          },
        ],
      },
      {
        heading: "Für wen ist das?",
        body: "Ob du einen Sechs-Achs-Roboterarm baust, mit Sensoren experimentierst, ein Start-up gründest oder einfach neugierig auf Robotik bist: Komm vorbei und werde Teil der Community.",
      },
    ],
  },
  "fokusgruppe-robotics-automation-september-2026": {
    title: "Kick-off: Fokusgruppe Robotics & Automation",
    tagline: "Start der neuen Fokusgruppe Robotics & Automation im digitalHUB Aachen.",
    intro: [
      "Es geht los! Gemeinsam mit dir wollen wir die neue Fokusgruppe Robotics & Automation im digitalHUB Aachen starten. Triff das Ökosystem aus Start-ups, Forschung und Industrie.",
      "Beim ersten Treffen geht es ums Kennenlernen, den Austausch von Ideen und die gemeinsame Frage: Welche Themen, Ideen und Projekte rund um Robotik und Automatisierung wollen wir voranbringen?",
      "Komm vorbei, bring deine Perspektive mit und gestalte die Fokusgruppe mit. Wir freuen uns auf dich!",
    ],
  },
  "robotics-happy-hour-igmr-september-2026": {
    title: "Robotics Happy Hour x IGMR",
    tagline:
      "Robotik, Forschung und Praxis: Laborführungen und Networking am IGMR der RWTH.",
    intro: [
      "Komm zur Robotics Happy Hour mit dem Institut für Getriebetechnik, Maschinendynamik und Robotik (IGMR) der RWTH Aachen. Entdecke akademische Robotikforschung, lerne das Team kennen und vernetze dich mit der Aachener Robotik-Community.",
      "Es gibt nur 30 Plätze. Wir wählen die Teilnehmenden danach aus, wer am besten passt und was er oder sie in die Community einbringen kann. Bitte melde dich nur an, wenn du auch wirklich kommst.",
      "Bei Getränken und Snacks kommst du in entspannter Atmosphäre mit anderen über Robotik ins Gespräch.",
    ],
    sections: [
      {
        heading: "Programm",
        items: [
          { title: "Begrüßung durch das Robotics Collective" },
          { title: "IGMR im Fokus", body: "Stefan Bezrucav" },
          {
            title: "Laborführungen",
            body: "Zwei Gruppen mit je 20 Personen, jeweils 20–30 Minuten.",
          },
          { title: "Networking" },
        ],
      },
      {
        heading: "Gut zu wissen",
        items: [
          {
            title: "Check-in im Foyer",
            body: "Die Anmeldung muss vom Veranstalter bestätigt werden.",
          },
          {
            title: "Keine Fotos oder Videos im Labor",
            body: "In den Versuchsbereichen sind Kameras nicht erlaubt. Fotos und Videos, die an anderer Stelle während des Events entstehen, kann das Robotics Collective für seine Kommunikation verwenden.",
          },
        ],
      },
    ],
  },
};
