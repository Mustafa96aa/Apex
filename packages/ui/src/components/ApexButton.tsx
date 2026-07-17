import type { ButtonHTMLAttributes, ReactNode } from "react";

import { colors } from "../tokens/colors";
import { radius } from "../tokens/radius";
import { spacing } from "../tokens/spacing";
import { typography } from "../tokens/typography";
import { animations } from "../tokens/animations";
import { shadows } from "../tokens/shadows";

type ApexButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ApexButton({
  children,
  variant = "primary",
  disabled = false,
  style,
  ...props
}: ApexButtonProps) {
  const baseStyle = {
  borderRadius: radius.full,
  padding: `${spacing.md}px ${spacing.xl}px`,

  fontFamily: typography.fontFamily,
  fontSize: typography.body.fontSize,
  fontWeight: 600,
  lineHeight: typography.body.lineHeight,

  cursor: disabled ? "not-allowed" : "pointer",

  transition: animations.transition.default,

  boxShadow: shadows.xs,

  border: "none",

  opacity: disabled ? 0.5 : 1,
};

  const variantStyle =
    variant === "primary"
      ? {
          background: colors.primary,
          color: colors.white,
        }
      : {
          background: colors.surface,
          color: colors.primary,
          border: `1px solid ${colors.border}`,
        };

  return (
    <button
      {...props}
      disabled={disabled}
      style={{
        ...baseStyle,
        ...variantStyle,
        ...style,
      }}
    >
      {children}
    </button>
  );
}