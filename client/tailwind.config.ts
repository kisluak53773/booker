import { COLORS } from './src/constants';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: COLORS,
      fontFamily: {
        inter: ['var(--font-inter)'],
        ubuntu: ['var(--font-ubuntu)'],
      },
    },
  },
  plugins: [],
};
export default config;
