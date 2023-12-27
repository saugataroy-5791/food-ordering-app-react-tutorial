/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/**/*.{html,js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            'footer-blue': 'rgb(2, 6, 12)',
            'restaurant-card': '#F4F4F4',
            'shimmer-line': '#bbbbbb',
         }
      },
   },
   plugins: [],
}

