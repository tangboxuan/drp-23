/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        alertYellow: "#FFDB49",
        alertRed: "#A92D2D",
        alertTextRed: "#C53737",
        backgroundBeige: "#FFE8C7",
        cancelRed: "#C53737",
        expirationRed: "#CD0000",
        interactiveText: "#555555",
        outlineGray: "#ADADAD",
        safeGreen: "#3D8A00",
        selectedRed: "#FF3434",
        warningOrange: "#F16B0A",
      },
    },
  },
  plugins: [],
}

