/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "faint":"#EAEAEA",
        "greenbg":"#244034",
        "activebtn":"#D2F34C",
        "ash":"#424242",
        "lightBlue":"#EEF3FF",
      },
      fontFamily:{
        Lexend:["Lexend", "sans-serif"],
        Poppins:["Poppins", "sans-serif"],
        Inter:["Inter", "sans-serif"]
      },
      fontSize:{
        "dd": "13px",
        "md": "16px"
      },
    },
  },
  plugins: [],
}

