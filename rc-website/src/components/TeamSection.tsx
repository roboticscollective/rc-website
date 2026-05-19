import Image from "next/image";
import { leadership, partners, type TeamMember } from "@/lib/team";

export const TeamSection = () => {
  return (
    <section
      id="team"
      className="relative bg-dark text-white overflow-hidden"
      style={{
        padding: "14vh 5vh",
        minHeight: "100vh",
        borderTopLeftRadius: "7vh",
        borderTopRightRadius: "7vh",
        borderBottomLeftRadius: "7vh",
        borderBottomRightRadius: "7vh",
        marginTop: "-7vh",
        marginBottom: "-7vh",
        zIndex: 2,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 right-[5vh]"
        style={{
          fontSize: "40vh",
          fontWeight: 500,
          lineHeight: 1,
          color: "#ffffff14",
        }}
      >
        05
      </div>

      <div className="relative max-w-[150vh] mx-auto">
        <p
          className="uppercase mb-4"
          style={{
            letterSpacing: "0.3vh",
            color: "#ffffff99",
            fontSize: "1.8vh",
            fontWeight: 500,
          }}
        >
          05 — Team
        </p>
        <h2
          className="mb-[3vh] max-w-[110vh]"
          style={{ fontSize: "8vh", fontWeight: 700, lineHeight: 1.05 }}
        >
          The People Behind the Collective.
        </h2>
        <p
          className="mb-[8vh] max-w-[100vh]"
          style={{ fontSize: "2.5vh", color: "#ffffff99", lineHeight: 1.4 }}
        >
          Our mission is to accelerate robotics adoption and the development of
          intelligent systems that interact harmoniously with humans and their
          environment.
        </p>

        <h3
          className="mb-[4vh]"
          style={{
            fontSize: "3vh",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          Leadership
        </h3>
        <div
          className="grid gap-[4vh] mb-[12vh]"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(24vh, 1fr))",
          }}
        >
          {leadership.map((m) => (
            <MemberCard key={m.name} member={m} />
          ))}
        </div>

        <h3
          className="mb-[4vh]"
          style={{ fontSize: "3vh", fontWeight: 700, color: "#fff" }}
        >
          Partners
        </h3>
        <div
          className="grid gap-[2vh]"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(20vh, 1fr))",
          }}
        >
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center bg-white-10 border border-white-10"
              style={{
                aspectRatio: "16/9",
                borderRadius: "2vh",
                padding: "3vh",
              }}
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={120}
                height={60}
                style={{
                  maxHeight: "60%",
                  width: "auto",
                  filter: "brightness(0) invert(1) opacity(0.8)",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="relative overflow-hidden bg-white-10"
        style={{
          width: "18vh",
          height: "18vh",
          borderRadius: "50%",
          marginBottom: "2vh",
        }}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="20vh"
          className="object-cover"
        />
      </div>
      <div style={{ fontSize: "2.4vh", fontWeight: 700 }}>{member.name}</div>
      <div
        style={{ fontSize: "1.7vh", color: "#ffffff99", marginTop: "0.4vh" }}
      >
        {member.role}
      </div>
    </div>
  );
}

export default TeamSection;
