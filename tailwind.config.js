/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}", // Adjust paths based on your project structure
        "./public/index.html",
    ],
    theme: {
        extend: {
            colors: {
                customBlue: "#1E40AF", // Example of adding a custom color
            },
            spacing: {
                128: "32rem", // Example of adding custom spacing
            },
        },
    },
    plugins: [],
};
