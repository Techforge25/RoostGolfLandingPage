/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2fbf4",
          100: "#dff7e5",
          200: "#b8efc8",
          300: "#7fdfa1",
          400: "#3ecb71",
          500: "#16a34a",
          600: "#0f7a38",
          700: "#0c5f2d",
          800: "#0a4c25",
          900: "#083d1f"
        }
      },
      boxShadow: {
        soft: "0 20px 60px -30px rgba(10, 76, 37, 0.6)",
        glow: "0 0 0 1px rgba(62, 203, 113, 0.35), 0 20px 50px -25px rgba(22, 163, 74, 0.7)",
        card: "0 10px 30px -20px rgba(8, 61, 31, 0.5)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        rise: "rise 0.8s ease forwards"
      }
    }
  },
  plugins: []
};
