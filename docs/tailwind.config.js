/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        zaagl: {
          orange: {
            50: "#FFF7ED",
            100: "#FFEDD5",
            500: "#FF5E1E", // Base Brand
            600: "#EA4E10",
            700: "#C23A08",
          },
          navy: {
            50: "#F0F4F8",
            500: "#2D3E50",
            900: "#0F172A", // Deep Base
          },
          status: {
            success: "#10B981",
            warning: "#F59E0B",
            danger: "#EF4444",
            info: "#3B82F6",
          },
        },
      },
    },
  },
};
