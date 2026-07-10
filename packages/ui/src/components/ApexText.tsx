import type { ReactNode } from "react";
import { colors } from "../tokens/colors";

type ApexTextProps = {
  children: ReactNode;
  variant?: "title" | "subtitle" | "body" | "caption";
};

export function ApexText({
  children,
  variant = "body",
}: ApexTextProps) {
  const styles = {
    title: {
      fontSize: "32px",
      fontWeight: 700,
      color: colors.text,
    },
    subtitle: {
      fontSize: "20px",
      fontWeight: 600,
      color: colors.text,
    },
    body: {
      fontSize: "16px",
      fontWeight: 400,
      color: colors.text,
    },
    caption: {
      fontSize: "14px",
      fontWeight: 400,
      color: colors.muted,
    },
  };

  return <p style={styles[variant]}>{children}</p>;
}