import { ApexText, colors } from "@apex/ui";

type ApexLogoProps = {
  size?: "sm" | "md" | "lg";
};

export default function ApexLogo({
  size = "md",
}: ApexLogoProps) {
  const fontSize = {
    sm: 28,
    md: 36,
    lg: 48,
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <div
        style={{
          width: 14,
          height: 14,
          borderRadius: 9999,
          background: colors.primary,
          boxShadow: `0 0 20px ${colors.primary}`,
        }}
      />

      <div
        style={{
          fontSize: fontSize[size],
          fontWeight: 700,
          color: colors.text,
          fontFamily: "Inter",
          letterSpacing: "-0.04em",
        }}
      >
        Apex
      </div>
    </div>
  );
}