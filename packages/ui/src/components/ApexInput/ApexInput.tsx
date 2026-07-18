import type { InputHTMLAttributes } from "react";

import { animations } from "../../tokens/animations";
import { colors } from "../../tokens/colors";
import { radius } from "../../tokens/radius";
import { spacing } from "../../tokens/spacing";
import { typography } from "../../tokens/typography";

type ApexInputProps = InputHTMLAttributes<HTMLInputElement>;

export function ApexInput({
  className,
  style,
  ...props
}: ApexInputProps) {
  return (
    <input
      {...props}
      className={className}
      style={{
        width: "100%",

        padding: `${spacing.md}px ${spacing.md}px`,

        borderRadius: radius.md,

        border: `1px solid ${colors.border}`,

        background: colors.surface,

        color: colors.text,

        fontFamily: typography.fontFamily,
        fontSize: typography.body.fontSize,
        fontWeight: typography.body.fontWeight,
        lineHeight: typography.body.lineHeight,

        outline: "none",

        transition: animations.transition.fast,

        ...style,
      }}
    />
  );
}