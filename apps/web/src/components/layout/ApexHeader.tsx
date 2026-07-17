import ApexLogo from "../branding/ApexLogo";
import { ApexButton, colors } from "@apex/ui";

export default function ApexHeader() {
  return (
    <header
      style={{
        width: "100%",
        height: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        background: colors.surface,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <ApexLogo size="sm" />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <ApexButton variant="secondary">
          Sign In
        </ApexButton>

        <ApexButton>
          Begin Journey
        </ApexButton>
      </div>
    </header>
  );
}