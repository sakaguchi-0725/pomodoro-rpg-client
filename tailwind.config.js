/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
        animation: {
            "slide-in-fwd-center": "slide-in-fwd-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
            "slide-in-top": "slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both"
        },
        keyframes: {
            "slide-in-fwd-center": {
                "0%": {
                    transform: "translateZ(-1400px)",
                    opacity: "0"
                },
                to: {
                    transform: "translateZ(0)",
                    opacity: "1"
                }
            },
            "slide-in-top": {
                "0%": {
                        transform: "translateY(-1000px)",
                        opacity: "0"
                },
                to: {
                        transform: "translateY(0)",
                        opacity: "1"
                }
            }
        }
    }
  },
  plugins: [],
}

