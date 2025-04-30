/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E5',
        'rose-gold': '#D4A59A',
        burgundy: {
          light: '#8E4A43',
          DEFAULT: '#5C2018',
          dark: '#3A1510'
        },
        sage: {
          light: '#B5C4AE',
          DEFAULT: '#8D9F87',
          dark: '#5A6854'
        },
        sand: {
          light: '#E8DCC5',
          DEFAULT: '#D4C5A8',
          dark: '#A39784'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', 'sans-serif']
      },
      backgroundImage: {
        'paper-texture': "url('https://images.pexels.com/photos/7486894/pexels-photo-7486894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: [],
};