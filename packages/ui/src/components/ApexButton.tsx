import type { ReactNode } from "react";
import { colors } from "../tokens/colors";

type ApexButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
};

export function ApexButton({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}: ApexButtonProps) {
  const style =
    variant === "primary"
      ? {
          backgroundColor: colors.primary,
          color: colors.text,
        }
      : {
          backgroundColor: "transparent",
          color: colors.primary,
          border: `2px solid ${colors.primary}`,
        };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={style}
      className="rounded-full px-6 py-3 font-medium transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {children}
    </button>
  );
}