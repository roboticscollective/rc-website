# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences the site serves in parallel; neither is subordinate to the other.

**Builders — students, researchers and hobbyists in and around Aachen.** Typically
arriving from a talk, a poster, a LinkedIn post or word of mouth, checking whether
this is a real group worth their Saturday. They range from curious beginners to
experienced roboticists, and non-technical contributors (organization, marketing,
partnerships) are explicitly welcome.

**Backers — companies, research institutes and potential sponsors.** Evaluating
whether the collective is credible and established enough to fund, partner with,
or send people to. They arrive already knowing what robotics is and are looking
for evidence of substance, not explanation.

Not primarily an event-attendee funnel. Events are a listing surface (upcoming
and past), not the site's reason to exist.

## Product Purpose

Robotics Collective Aachen is a non-profit organization uniting individuals,
researchers and industry partners to accelerate robotics adoption and intelligent
robotic system development. Founded 2023 as *open robotic metaverse*, refounded
as Robotics Collective. Founding member of ESRA, the European Student Robotics
Association.

The website's job is **credibility, not conversion.** Success is that anyone who
looks the collective up — a professor, a sponsor, a student, a journalist — comes
away certain this is a real, serious, active organization. There is no single
funnel to optimize and no conversion metric that should override that.

## Positioning

Aachen's robotics community was already booming but fragmented: research
institutes, startups, companies and student teams solving the same problems in
parallel. The collective's mechanism is *bridging* — it does not compete with
those groups, it connects them. Stated at the European scale in the site's own
words: Europe does not have a talent problem, it has a fragmentation problem.

A neighboring robotics club could copy the activities but not the position:
founding membership of ESRA plus a cross-institutional Aachen network spanning
RWTH institutes, industry and independents.

## Operating Context

- Weekly meetups on Saturdays, plus smaller ad-hoc weekday sessions.
- A community meetup in Aachen roughly every six months, at the start of each semester.
- Ad-hoc hackathons and deep-dive workshops through the year.
- The *Robotics Happy Hour* series (brunch, show & tell, bring your own robot).
- A physical space at Campus-Boulevard 55, Aachen, enabled by the Gateway Factory
  and still being built out as of August 2026.
- Event registration is hosted on Luma, not on this site. The site markets events
  and links out; Luma owns RSVP and its own consent flow.

## Capabilities and Constraints

- Static Next.js 15 site on Netlify, deployed from `main`. No CMS and no backend.
  All content lives in TypeScript files under `rc-website/src/`, edited by hand
  and shipped by redeploy.
- GA4 with opt-in cookie consent. As a German e.V., DSGVO/TTDSG apply.
- Landing page is anchor-based; the `#about`, `#network`, `#projects`, `#faq`,
  `#team` section IDs are a stable contract for the navbar.
- **Language:** English now, German later. German is not a current requirement,
  but nothing should be built in a way that makes adding it expensive. The
  existing German-language legal pages are a compliance obligation, not evidence
  of a bilingual commitment.

## Brand Commitments

- **Public brand:** "Robotics Collective Aachen".
- **Legal entity, imprint only:** "open robotic metaverse e.V." (registered in
  Aachen, VR6426). The two-name split is deliberate and must be preserved.
- *open robotic metaverse* now continues as an open-source project pursuing
  browser-based simulation, not as an independent association. Do not describe it
  as defunct.
- Satoshi is the site's typeface, self-hosted.
- Voice in existing copy is plain, warm and unhyped — "held together by duct tape
  and optimism", "no keynote, no pitches, no pressure". Avoid corporate register
  and avoid hype adjectives.

## Evidence on Hand

Real and usable:

- Named partners with logos in `public/partners/`: Vectioneer, INFORM, Gateway
  Factory, Vorwerk, Hugging Face.
- Event supporters: Gateway Factory, Digitalhub Aachen, WZL RWTH Aachen,
  IGMR RWTH Aachen, Institut für Unternehmenskybernetik e.V.
- Named leadership with photos in `public/team/`.
- ESRA founding membership alongside 10+ named European student robotics orgs,
  with a public launch announcement on LinkedIn.
- Real project imagery in `public/build-*.webp` and a teleoperation video.
- Real event artwork, e.g. the Robotics Happy Hour poster.

Absent — future work must not invent these:

- No testimonials, quotes or case studies.
- No member counts, event attendance figures, funding amounts or any metric.
- No press coverage.
- Project images exist but the projects themselves are undocumented: no titles,
  descriptions, outcomes or links anywhere in the repo.

## Product Principles

1. **Credibility over conversion.** When a design choice trades trust for clicks,
   trust wins. There is no funnel to protect.
2. **Serve builders and backers at once.** Neither audience gets a dedicated site;
   the same evidence must read as "worth my Saturday" and "worth our money."
3. **Bridge, never compete.** The collective's value is connection between
   existing groups. Copy and design should never position it against RWTH
   institutes, startups or other student teams.
4. **Show the work, unpolished.** The community's own register is honest and
   slightly scrappy. Overproduced, corporate presentation would misrepresent it.
5. **Content is code.** Every content change is a commit and a redeploy. Prefer
   structures a non-author can safely edit in a TypeScript file.

## Accessibility & Inclusion

No formal standard has been established for this project. One product-specific
need is on record: participation must stay open to non-technical contributors, so
language should not assume a robotics background.

## Open Decisions

- The FAQ tells companies and institutes to "schedule a call with us," but no
  scheduling link, contact form or email exists anywhere on the site. Backers are
  a stated primary audience with no route to make contact. Unresolved.
- The public contact address in `README.md` is a personal Gmail account rather
  than an org domain address.
