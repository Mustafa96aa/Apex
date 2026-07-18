import type { ReactNode } from "react";

import ApexHeader from "./ApexHeader";
import { ApexSidebar } from "./ApexSidebar";

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
        display: "flex",
      }}
    >
      <ApexSidebar />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ApexHeader />

        <main
          style={{
            flex: 1,
            padding: "32px",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}