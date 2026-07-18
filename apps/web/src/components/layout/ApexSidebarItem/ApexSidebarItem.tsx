"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";

import {
  colors,
  spacing,
  radius,
  typography,
  animations,
} from "@apex/ui";

type ApexSidebarItemProps = {
  icon: LucideIcon;
  label: string;
  href: string;
};

export function ApexSidebarItem({
  icon: Icon,
  label,
  href,
}: ApexSidebarItemProps) {
  const pathname = usePathname();

  const active =
    pathname === href;

  const style: CSSProperties = {
    display: "flex",
    alignItems: "center",

    gap: spacing.md,

    width: "100%",

    padding: `${spacing.md}px ${spacing.lg}px`,

    borderRadius: radius.md,

    textDecoration: "none",

    transition: animations.transition.default,

    background: active
      ? colors.primarySoft
      : "transparent",

    color: active
      ? colors.primary
      : colors.textSecondary,

    fontFamily: typography.fontFamily,

    fontSize: typography.body.fontSize,

    fontWeight: active ? 600 : 500,
  };


  return (
    <Link
      href={href}
      style={style}
    >
      <Icon
        size={20}
        strokeWidth={active ? 2.5 : 2}
      />

      <span>
        {label}
      </span>
    </Link>
  );
}