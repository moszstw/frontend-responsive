/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            mobile: "320px",
            laptop: "768px",
        },
        extend: {
            borderColor: {
                purple_custom: "#603EBE",
                gray_custom: "#F5F4F9",
                navy_custom: "#090C35",
            },
            textColor: {
                purple_custom: "#603EBE",
                gray_custom: "#F5F4F9",
                navy_custom: "#090C35",
            },
            backgroundColor: {
                purple_custom: "#603EBE",
                gray_custom: "#F5F4F9",
                navy_custom: "#090C35",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
        },
    },
    plugins: [],
};
