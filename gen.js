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
      overwrite: true,
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
      overwrite: true,
    },
  },
]);