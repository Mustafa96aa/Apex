"use client";

import { sidebarNavigation } from "@/lib/navigation/sidebar.navigation";
import { sidebarIcons } from "@/lib/navigation/icons";

import ApexLogo from "@/components/branding/ApexLogo";

import { ApexSidebarItem } from "../ApexSidebarItem";

import styles from "./ApexSidebar.module.css";

export function ApexSidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <ApexLogo size="sm" />
      </div>

      <nav className={styles.navigation}>
        {sidebarNavigation.map((item) => (
          <ApexSidebarItem
            key={item.href}
            icon={sidebarIcons[item.icon]}
            label={item.label}
            href={item.href}
          />
        ))}
      </nav>
    </aside>
  );
}