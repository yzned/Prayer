module.exports = {
  outDir: 'src/7_shared/assets/icons/components',
  filenameCase: 'kebab',
  template: require('./svgr-template.cjs'),
  prettierConfig: {
    parser: 'typescript',
    arrowParens: 'always',
    bracketSameLine: false,
    bracketSpacing: true,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 110,
  },
  svgoConfig: {
    plugins: [
      {
        name: 'removeViewBox',
        active: false,
      },
      {
        name: 'removeXMLNS',
        active: true,
      },
    ],
  },
};
