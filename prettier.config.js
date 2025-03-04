module.exports = {
  tabWidth: 2, // indent_size = 2
  useTabs: false, // indent_style = space
  endOfLine: 'lf', // end_of_line = lf
  semi: false, // default: true
  singleQuote: true, // default: false
  printWidth: 100,
  bracketSpacing: true,
  overrides: [
    {
      files: '*.js',
      options: {
        parser: 'flow',
      },
    },
  ],
  tailwindConfig: './tailwind.config.js',
}
