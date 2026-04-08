/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "15px",
    },

    screens: {
      ms: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },

    extend: {
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },
      },

      fontFamily: {
        primary: ["var(--font-jetbrains-mono)"],
      },

      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-in": {
          from: {
            transform: "translateY(10px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-in-out",
        "slide-in": "slide-in 0.4s ease-out",
      },

      boxShadow: {
        soft: "0 2px 10px rgba(0,0,0,0.1)",
        strong: "0 10px 25px rgba(0,0,0,0.25)",
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};
