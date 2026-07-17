import type { HTMLAttributes, ReactNode } from "react";

import { spacing } from "../tokens/spacing";

type ApexContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  maxWidth?: number;
};

export function ApexContainer({
  children,
  maxWidth = 1280,
  style,
  ...props
}: ApexContainerProps) {
  return (
    <div
      {...props}
      style={{
        width: "100%",
        maxWidth,
        margin: "0 auto",
        padding: `0 ${spacing.xl}px`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}