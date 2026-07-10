import type { CSSProperties } from "react";
import { colors } from "../tokens/colors";

type ApexAvatarProps = {
  name?: string;
  size?: number;
};

export function ApexAvatar({
  name = "A",
  size = 48,
}: ApexAvatarProps) {
  const style: CSSProperties = {
    width: size,
    height: size,
    borderRadius: "9999px",
    background: colors.primary,
    color: colors.text,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 700,
    fontSize: size / 2.4,
    userSelect: "none",
  };

  return <div style={style}>{name.charAt(0).toUpperCase()}</div>;
}