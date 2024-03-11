const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/**/*.{html,js,ts,jsx,tsx,mdx}",
        "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    darkMode: "class",
    plugins: [nextui()]
}
