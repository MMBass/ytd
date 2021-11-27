const { generateTemplateFiles } = require('generate-template-files');

// const config = require('./package.json');

generateTemplateFiles([
  {
    option: 'c',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './src/templates/component' ,
    },
    stringReplacers: ['name', { question: 'Insert model name', slot: 'name' }],
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
    stringReplacers: ['name', { question: 'Insert model name', slot: 'name' }],
    output: {
      path: './src/pages/name',
      pathAndFileNameDefaultCase: '(pascalCase)',
      overwrite: true,
    },
  },
]);