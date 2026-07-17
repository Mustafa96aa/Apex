import type { ReactNode } from "react";
import ApexHeader from "./ApexHeader";
import { colors } from "@apex/ui";

type ApexLayoutProps = {
  children: ReactNode;
};

export default function ApexLayout({
  children,
}: ApexLayoutProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: colors.background,
        color: colors.text,
      }}
    >
      <ApexHeader />

      <main
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "48px 32px",
        }}
      >
        {children}
      </main>
    </div>
  );
}