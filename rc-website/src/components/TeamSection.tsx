import Image from "next/image";
import { leadership, partners, type TeamMember } from "@/lib/team";

export const TeamSection = () => {
  return (
    <section
      id="team"
      className="relative bg-dark text-white overflow-hidden"
      style={{
        padding: "14svh 5svh",
        minHeight: "100svh",
        borderTopLeftRadius: "7svh",
        borderTopRightRadius: "7svh",
        borderBottomLeftRadius: "7svh",
        borderBottomRightRadius: "7svh",
        marginTop: "-7svh",
        marginBottom: "-7svh",
        zIndex: 2,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 right-[5svh]"
        style={{
          fontSize: "40svh",
          fontWeight: 500,
          lineHeight: 1,
          color: "#ffffff14",
        }}
      >
        05
      </div>

      <div className="relative max-w-[150svh] mx-auto">
        <p
          className="uppercase mb-4"
          style={{
            letterSpacing: "0.3svh",
            color: "#ffffff99",
            fontSize: "1.8svh",
            fontWeight: 500,
          }}
        >
          05 · Team
        </p>
        <h2
          className="mb-[3svh] max-w-[110svh]"
          style={{ fontSize: "8svh", fontWeight: 700, lineHeight: 1.05 }}
        >
          The People Behind the <span className="text-brand">Collective</span>.
        </h2>
        <p
          className="mb-[8svh] max-w-[100svh]"
          style={{ fontSize: "2.5svh", color: "#ffffff99", lineHeight: 1.4 }}
        >
          Our mission is to accelerate robotics adoption and the development of
          intelligent systems that interact harmoniously with humans and their
          environment.
        </p>

        <h3
          className="mb-[4svh]"
          style={{
            fontSize: "3svh",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          Leadership
        </h3>
        <div
          className="grid gap-[4svh] mb-[12svh]"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(24svh, 1fr))",
          }}
        >
          {leadership.map((m) => (
            <MemberCard key={m.name} member={m} />
          ))}
        </div>

        <h3
          className="mb-[4svh]"
          style={{ fontSize: "3svh", fontWeight: 700, color: "#fff" }}
        >
          Partners
        </h3>
        <div
          className="grid items-center gap-x-[6svh] gap-y-[4svh]"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(16svh, 1fr))",
          }}
        >
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center"
              style={{ height: "8svh" }}
            >
              {p.wordmark ? (
                <span
                  className="group inline-flex items-baseline gap-[0.05em] font-medium leading-none text-white"
                  style={{
                    fontFamily: "'Afacad', 'Inter', ui-sans-serif, sans-serif",
                    fontSize: "3.4svh",
                    letterSpacing: "-0.035em",
                  }}
                >
                  <span>{p.name}</span>
                  <span className="text-[#e9b872] transition-transform duration-300 group-hover:translate-y-[2px]">
                    .
                  </span>
                </span>
              ) : (
                <Image
                  src={p.logo!}
                  alt={p.name}
                  width={200}
                  height={100}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              )}
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
          width: "18svh",
          height: "18svh",
          borderRadius: "50%",
          marginBottom: "2svh",
        }}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="20svh"
          className="object-cover"
        />
      </div>
      <div style={{ fontSize: "2.4svh", fontWeight: 700 }}>{member.name}</div>
      <div
        style={{ fontSize: "1.7svh", color: "#ffffff99", marginTop: "0.4svh" }}
      >
        {member.role}
      </div>
    </div>
  );
}

export default TeamSection;
