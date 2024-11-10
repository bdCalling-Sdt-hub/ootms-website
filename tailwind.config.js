/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color": "#FAFAFA",
        "secondary-color": "#F5382C",
        "base-color": "#222222",
        "highlight-color": "#2F87FC",
        "input-color": "#FCC1BE",
        "gray-color":"#2B4257",
        "same-gray":"#BDC4CB",
        "next-btn": "#1A2834",
        "next-text": "#EAECEE",
        "contact-input":"#2B4257",
        "profile-text-color":"#2B4257"


      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        skia: ["var(--skia)", "sans-serif"], // Skia local font
      },
    
      width: {
        'wid': '900px', 
        'city': '300px', 
        'next-btn-wid': '800px',
      
      },
    },
  },
  plugins: [],
};


