import { COLORS } from './src/constants';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: COLORS,
    },
  },
  plugins: [],
};
export default config;
