import type { HTMLAttributes, ReactNode } from "react";

import { spacing } from "../tokens/spacing";

type ApexSectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  paddingY?: number;
};

export function ApexSection({
  children,
  paddingY = spacing["3xl"],
  style,
  ...props
}: ApexSectionProps) {
  return (
    <section
      {...props}
      style={{
        paddingTop: paddingY,
        paddingBottom: paddingY,
        ...style,
      }}
    >
      {children}
    </section>
  );
}