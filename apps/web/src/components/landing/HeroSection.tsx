import { ApexButton, ApexText, colors } from "@apex/ui";

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "80px 24px",
      }}
    >
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: colors.primary,
          boxShadow: `0 0 80px ${colors.primary}`,
          marginBottom: 32,
        }}
      />

      <div style={{ maxWidth: 850 }}>
        <h1
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: colors.text,
            lineHeight: 1.1,
            marginBottom: 24,
            letterSpacing: "-0.04em",
          }}
        >
          The Intelligent Operating System
          <br />
          for Your Life & Work
        </h1>

        <p
          style={{
            fontSize: 20,
            color: colors.muted,
            lineHeight: 1.8,
            marginBottom: 48,
          }}
        >
          Apex brings your projects, knowledge, goals, decisions and AI
          together into one intelligent workspace built for focus,
          productivity and growth.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <ApexButton>
          Begin Journey
        </ApexButton>

        <ApexButton variant="secondary">
          Learn More
        </ApexButton>
      </div>
    </section>
  );
}