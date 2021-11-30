const { generateTemplateFiles } = require('generate-template-files');

// run 'node gen' to start use

generateTemplateFiles([
  {
    option: 'c',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './src/templates/component' ,
    },
    stringReplacers: ['name'],
    output: {
      path: './src/components/name',
      pathAndFileNameDefaultCase: '(pascalCase)',
    },
  },
  {
    option: 'p',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './src/templates/component' ,
    },
    stringReplacers: ['name'],
    output: {
      path: './src/pages/name',
      pathAndFileNameDefaultCase: '(pascalCase)',
    },
  },
  {
    option: 'reducer',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './src/templates/redux/reducer/name.js' ,
    },
    stringReplacers: ['name'],
    output: {
      path: './src/store/reducers/name.reducer.js',
      pathAndFileNameDefaultCase: '(camelCase)',
    },
  },
  {
    option: 'action',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './src/templates/redux/action/name.js' ,
    },
    stringReplacers: ['name'],
    output: {
      path: './src/store/creators/name.creator.js',
      pathAndFileNameDefaultCase: '(camelCase)',
    },
  },
]);