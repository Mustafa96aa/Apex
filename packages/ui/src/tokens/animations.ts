export const animations = {
  duration: {
    fast: "150ms",
    normal: "220ms",
    slow: "320ms",
  },

  easing: {
    default: "cubic-bezier(0.4, 0, 0.2, 1)",
    smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
  },

  transition: {
    default: "all 220ms cubic-bezier(0.4, 0, 0.2, 1)",
    fast: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
    smooth: "all 320ms cubic-bezier(0.16, 1, 0.3, 1)",
  },
} as const;