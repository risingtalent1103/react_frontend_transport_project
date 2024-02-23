/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html", 
      "./src/**/*.{js,ts,jsx,tsx}",
      "./src/**/**/*.{js, ts, jsx, tsx}"
    ],
  theme: {
    // colors: {
    //   'primary1': '#FFBE34',
    //   'primary2': '#4D8137',
    //   'secondary1': '#F4F4F4',
    //   'heading': '#1C1F35',
    //   'paragraph': '#666C89',
    //   'gradient1': '#FFB629',
    //   'gradient2': '#FFDA56',
    //   'gradient3': '#FFD7A6',
    //   'border_gray': '#D6D6D6',
    //   'input_border': '#69BD46'
    // },
      colors: {
          primary1: 'var(--color-primary1)',
          primary2: 'var(--color-primary2)',
          primary3: '#2E581C',
          banner: 'var(--color-banner)',
          primary5: 'var(--color-primary5)',
          secondary1: 'var(--color-secondary1)',
          heading: 'var(--color-heading)',
          paragraph: 'var(--color-paragraph)',
          gradient1: 'var(--color-gradient1)',
          gradient2: 'var(--color-gradient2)',
          gradient3: 'var(--color-gradient3)'      
      },
    fontFamily: {
      'myRubic': ['Rubik'],
      'myKrub': ['Krub']
    },
    extend: {
      // colors: {
      //   primary1: 'var(--color-primary1)',
      //   primary2: 'var(--color-primary2)',
      //   secondary1: 'var(--color-secondary1)',
      //   heading: 'var(--color-heading)',
      //   paragraph: 'var(--color-paragraph)',
      //   gradient1: 'var(--color-gradient1)',
      //   gradient2: 'var(--color-gradient2)',
      //   gradient3: 'var(--color-gradient3)'      
      // }  
    },
  },
  plugins: [require("daisyui")],
};
