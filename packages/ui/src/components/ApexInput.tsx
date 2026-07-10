import type { InputHTMLAttributes } from "react";
import { colors } from "../tokens/colors";
import { radius } from "../tokens/radius";

type ApexInputProps = InputHTMLAttributes<HTMLInputElement>;

export function ApexInput({
  className = "",
  ...props
}: ApexInputProps) {
  return (
    <input
      {...props}
      className={className}
      style={{
        width: "100%",
        padding: "12px 16px",
        borderRadius: radius.md,
        border: `1px solid ${colors.border}`,
        background: colors.surface,
        color: colors.text,
        outline: "none",
        fontSize: "16px",
        transition: "all 150ms ease",
      }}
    />
  );
}