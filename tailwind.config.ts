import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',

    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green:{
          10:"#01FB34",
        },
        blue:{
          10:"#0138FB",
          20:"#292e44",
          30:"#252437",
          40:"#131226"
          
        },
        gray:{
          10:"#ADB0B6",
          40:"#30333C"
        },
        white:{
          10:"#ffff",
          20:"#F8F8FF"
        },
        black:{
          10:"#000000"
        },
      },
      boxShadow:{
        xl: '0 20px 25px -5px #131226, 0 10px 10px -5px #292e44',
        ml: '2px 3px 0 1px #ffff',
        lg: '20px 20px 0 3px #131226',
       
      },
    },
  },
  plugins: [],
}
export default config
