import type { ReactNode } from "react";
import { radius } from "../tokens/radius";
import { shadows } from "../tokens/shadows";
import { colors } from "../tokens/colors";

type ApexCardProps = {
  children: ReactNode;
};

export function ApexCard({ children }: ApexCardProps) {
  return (
    <div
      style={{
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        borderRadius: radius.lg,
        boxShadow: shadows.sm,
        padding: "24px",
      }}
    >
      {children}
    </div>
  );
}