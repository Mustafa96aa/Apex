import type { HTMLAttributes, ReactNode } from "react";

import { colors } from "../tokens/colors";
import { typography } from "../tokens/typography";

type ApexTextProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
  variant?: "title" | "subtitle" | "body" | "caption";
};

export function ApexText({
  children,
  variant = "body",
  style,
  ...props
}: ApexTextProps) {
  const variants = {
    title: {
      ...typography.h2,
      color: colors.text,
    },

    subtitle: {
      ...typography.h3,
      color: colors.textSecondary,
    },

    body: {
      ...typography.body,
      color: colors.text,
    },

    caption: {
      ...typography.small,
      color: colors.muted,
    },
  };

  return (
    <p
      {...props}
      style={{
        fontFamily: typography.fontFamily,
        margin: 0,
        ...variants[variant],
        ...style,
      }}
    >
      {children}
    </p>
  );
}