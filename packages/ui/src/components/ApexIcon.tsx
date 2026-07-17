import type { LucideIcon } from "lucide-react";

type ApexIconProps = {
  icon: LucideIcon;
  size?: number;
  strokeWidth?: number;
  color?: string;
};

export function ApexIcon({
  icon: Icon,
  size = 20,
  strokeWidth = 2,
  color = "currentColor",
}: ApexIconProps) {
  return (
    <Icon
      size={size}
      strokeWidth={strokeWidth}
      color={color}
    />
  );
}