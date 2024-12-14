/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'whiteColor' :'var(--white-color)',
        tealCustom: {
            500 : 'var(--color-teal)',
            400 : 'var(--bg-teal)'
        },
        zincCustom:{
            800 : 'var(--text-zincCustom-800)',
            900 : 'var(--text-zincCustom-900)',
        },
        neutralCustom: {
            800: 'var(--bg-neutralCustom)',
            700: 'var(--bg-neutralCustom-700)',
        },
        grayCustom : {
            100:'var(--text-grayCustom-100)',
            200:'var(--text-grayCustom-200)',
            300:'var(--text-grayCustom-300)',
            400:'var(--text-grayCustom-400)',
            500:'var(--text-grayCustom-500)',
            600:'var(--text-grayCustom-600)',
            700:'var(--text-grayCustom-700)',
            800:'var(--text-grayCustom-800)',
            900:'var(--text-grayCustom-900)'
        },
        warmGray:'#32363ead',
        redCustom : {
            500:'#ef4444'
        },
        yellow: {
            100: 'var(--text-yellow-100)',
            300: 'var(--text-yellow-300)',
            400: 'var(--text-yellow-400)',
            500: 'var(--text-yellow-500)',
            600: 'var(--text-yellow-600)',
            950: 'var(--text-yellow-950)'
        },
        slate: {
            50: 'var(--text-slate-50)',
            400: 'var(--text-slate-400)',
        },
        red: {
            400: 'var(--text-red-400)',
            500: 'var(--text-red-500)',
            600: 'var(--text-red-600)'
        },
        green: {
            400: 'var(--text-green-400)',
            500: 'var(--text-green-500)'
        },
        purple: {
            50: 'var(--text-purple-50)'
        },
        zinc: {
            900: 'var(--text-zinc-900)'
        },
        violet: {
            100: 'var(--text-violet-100)',
            200: 'var(--text-violet-200)',
            500: 'var(--text-violet-500)',
        },
        indigo: {
            500: 'var(--text-indigo-500)',
            600: 'var(--text-indigo-600)',
        },
        emerald: {
            500: 'var(--text-emerald-500)'
        },
        sky: {
            500: 'var(--text-sky-500)'
        },
        amber: {
            50: 'var(--text-amber-50)',
            500: 'var(--text-amber-500)'
        },
        gray: {
            50: 'var(--text-gray-50)',
            100: 'var(--text-gray-100)',
            200: 'var(--text-gray-200)',
            300: 'var(--text-gray-300)',
            400: 'var(--text-gray-400)',
            500: 'var(--text-gray-500)',
            600: 'var(--text-gray-600)',
            700: 'var(--text-gray-700)',
            800: 'var(--text-gray-800)',
            900: 'var(--text-gray-900)',
            950: 'var(--text-gray-950)'
        },
        'ask-light': '#f6465d',
        'bid-light': '#0ecb81',
        'darkBody' : 'var(--bg-dark-body)',
        'dark-card': 'var(--bg-dark-card)',
        'bg-dark-footer': 'var(--bg-dark-footer)',
        'light-pink': '#FFFDFD',
        'button' :'#528BFF'
    },
    },
  },
  plugins: [],
}
