import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['IBM Plex Serif', 'serif'],
            },
            colors: {
                'customGray': "#475467",
                'customblue': '#0179FE',
            },
          
     animation: {
      'infinite-scroll-l': 'infinite-scroll-l 10s linear infinite',
      'infinite-scroll-r': 'infinite-scroll-r 10s linear infinite',
    },
    keyframes: {
      'infinite-scroll-l': {
        from: { transform: 'translateX(50)' },
        to: { transform: 'translateX(-50%)' },
      },
      'infinite-scroll-r':{
        from:{ transform: 'translateX(-50%)' },
        to: { transform: 'translateX(50)' }
      }
        },

    },
    plugins: [],
}

export default config
