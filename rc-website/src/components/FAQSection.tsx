"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

const defaultItems: FAQItem[] = [
  {
    id: "what-is-rc",
    question: "What is Robotics Collective Aachen?",
    answer:
      "Robotics Collective Aachen is a non-profit organisation that unites individuals, researchers, and industry partners to accelerate robotics adoption and intelligent robotics system development. We are a founding member of ESRA, the European Student Robotics Association.",
  },
  {
    id: "how-to-join",
    question: "How can I join the collective?",
    answer:
      "Fill out the membership form or schedule a call with us if you are a company or research institute.",
  },
  {
    id: "need-experience",
    question: "Do I need technical experience to join?",
    answer:
      "Not at all. We welcome everyone from curious beginners to experienced roboticists. Beyond the technical side, skills in organization, marketing, and partnership management are essential to keeping things running and growing — so if that's your strength, we'd love to have you on board.",
  },
  {
    id: "project-types",
    question: "What types of projects do you incubate?",
    answer:
      "We work on all kinds of projects that push embodied AI forward — mobile robots, machine learning for perception, mechanical design, and human-robot interaction. From building something new to improving existing systems. We also encourage everyone to explore their own ideas, with the support and inspiration of the community.",
  },
  {
    id: "events",
    question: "How often do you host events & workshops?",
    answer:
      "We host a community meetup in Aachen every six months, usually at the beginning of each semester. In addition, we meet weekly on Saturdays and sometimes during the week for smaller sessions. We also organize ad-hoc hackathons and deep-dive workshops throughout the year.",
  },
  {
    id: "orm-status",
    question: "What happened to open robotic metaverse?",
    answer:
      "open robotic metaverse has transitioned from an independent association into a dedicated open-source project, continuing to develop the vision of browser-based simulation.",
  },
];

export const FAQSection = ({ items = defaultItems }: { items?: FAQItem[] }) => {
  return (
    <section
      id="faq"
      className="relative bg-light text-dark"
      style={{ padding: "12vh 5vh", minHeight: "100vh" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 right-[5vh]"
        style={{
          fontSize: "40vh",
          fontWeight: 500,
          lineHeight: 1,
          color: "#d8d8d8",
        }}
      >
        04
      </div>

      <div className="relative max-w-[120vh] mx-auto">
        <p
          className="uppercase mb-4"
          style={{
            letterSpacing: "0.3vh",
            color: "#666",
            fontSize: "1.8vh",
            fontWeight: 500,
          }}
        >
          04 — FAQ
        </p>
        <h2
          className="mb-[6vh]"
          style={{ fontSize: "8vh", fontWeight: 700, lineHeight: 1.05 }}
        >
          Frequently Asked Questions.
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {items.map(({ id, question, answer }) => (
            <AccordionItem
              key={id}
              value={id}
              className="border-b border-dark/20"
            >
              <AccordionTrigger
                className="text-left hover:no-underline"
                style={{
                  fontSize: "2.7vh",
                  fontWeight: 500,
                  padding: "3vh 0",
                  color: "#212121",
                }}
              >
                {question}
              </AccordionTrigger>
              <AccordionContent
                style={{
                  fontSize: "2vh",
                  lineHeight: 1.5,
                  color: "#333",
                  paddingBottom: "3vh",
                }}
              >
                {typeof answer === "string" ? <p>{answer}</p> : answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
