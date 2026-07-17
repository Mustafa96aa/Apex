import type { CSSProperties, HTMLAttributes } from "react";

import { colors } from "../tokens/colors";
import { radius } from "../tokens/radius";
import { typography } from "../tokens/typography";

type ApexAvatarProps = HTMLAttributes<HTMLDivElement> & {
  name?: string;
  size?: number;
};

export function ApexAvatar({
  name = "A",
  size = 48,
  style,
  ...props
}: ApexAvatarProps) {
  const avatarStyle: CSSProperties = {
    width: size,
    height: size,

    borderRadius: radius.full,

    background: colors.primary,
    color: colors.white,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    fontFamily: typography.fontFamily,
    fontWeight: typography.h3.fontWeight,
    fontSize: size / 2.4,

    userSelect: "none",

    ...style,
  };

  return (
    <div {...props} style={avatarStyle}>
      {name.charAt(0).toUpperCase()}
    </div>
  );
}