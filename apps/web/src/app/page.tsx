import {
  ApexAvatar,
  ApexButton,
  ApexCard,
  ApexInput,
  ApexText,
  colors,
} from "@apex/ui";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: colors.background,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
      }}
    >
      <ApexCard>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <ApexAvatar name="Mustafa" />
        </div>

        <div
          style={{
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          <ApexText variant="title">
            Apex
          </ApexText>

          <div style={{ marginTop: "8px" }}>
            <ApexText variant="caption">
              Your intelligent workspace
            </ApexText>
          </div>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <ApexInput
            type="email"
            placeholder="Enter your email..."
          />
        </div>

        <ApexButton>
          Begin Journey
        </ApexButton>
      </ApexCard>
    </main>
  );
}