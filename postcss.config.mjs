/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    'postcss-pxtorem': {
      rootValue: 16,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: ['inset'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 3,
      exclude: /node_modules/i,
    },
  },
}

export default config
