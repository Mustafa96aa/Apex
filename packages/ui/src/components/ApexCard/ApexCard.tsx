import type { HTMLAttributes, ReactNode } from "react";

import { colors } from "../../tokens/colors";
import { radius } from "../../tokens/radius";
import { shadows } from "../../tokens/shadows";
import { spacing } from "../../tokens/spacing";

type ApexCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function ApexCard({
  children,
  style,
  ...props
}: ApexCardProps) {
  return (
    <div
      {...props}
      style={{
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        borderRadius: radius.lg,
        boxShadow: shadows.sm,
        padding: spacing.lg,
        ...style,
      }}
    >
      {children}
    </div>
  );
}