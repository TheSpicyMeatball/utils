/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const ejs = require('ejs');
const { copyFileSync, existsSync, readdirSync, readFileSync, writeFileSync, exists } = require('fs');
const { join, resolve } = require('path');
const { parseTags, removeTags } = require('jsdoc-parse-plus');
const { capitalize, first, isNotNilOrEmpty } = require('../dist/lib/es5/index');
const htmlEncode = require('js-htmlencode').htmlEncode;

/**
 * Available docgen tags:
 * @docgen_types - code wrapped display of supported types
 * @docgen_note - note about the util (blockquote)
 * @docgen_details - Any extra details to say about the function that you don't want in a note blockquote
 * @docgen_import - override for the import
 */
const docgenTags = [
  '@docgen_types', 
  '@docgen_note',
  '@docgen_details',
  '@docgen_import',
  '@docgen_import_note',
];

const index = async () => {
  console.log('Generating README.md...');
  
  const root = join(__dirname, '..');
  const src = join(__dirname, '..', 'src');
  const dist = join(__dirname, '..', 'dist');
  const lib = join(__dirname, '..', 'dist', 'lib');

  const categories = readdirSync(src).filter(x => !x.includes('.') && !x.startsWith('_') && x !== 'types');
  
  let utils = [];
  let outDirs = [];

  const tags = [
    '@description',
    '@since',
    '@category',
    '@param', 
    '@returns', 
    '@example', 
    '@see', 
    '@deprecated',
    ...docgenTags,
  ];

  for (const category of categories) {
    const functions = Array.from(readdirSync(join(src, category))).filter(x => !x.startsWith('_'));
    
    for (const func of functions) {
      const file = readFileSync(join(src, category, func, 'index.ts'), 'utf8');
      utils = [...utils, { name: func, generic: getGetGeneric(file), ...parseTags(file, tags) }];
      outDirs = [
        ...outDirs,
        join(lib, 'es5', category, func),
        join(lib, 'es6', category, func),
      ];
    }
  }

  const packageData = require(join(dist, 'package.json'));
  const templateData = {
    categories,
    utils,
    package: packageData,
    generateSummary,
  };

  const file = await resolve(__dirname, './readme.ejs');

  ejs.renderFile(file, templateData, (err, output) => {
    if (err) {
      console.log(err);
    }
    writeFileSync(join(dist, 'README.md'), output);
    writeFileSync(join(root, 'README.md'), output);
  });

  generateIndividualReadMes(utils, packageData.name);

  sanitizeDTS(outDirs);

  if (existsSync(join(__dirname, '..', 'LICENSE'))) {
    copyFileSync(join(__dirname, '..', 'LICENSE'), join(__dirname, '..', 'dist', 'LICENSE'));
  }

  if (existsSync(join(__dirname, '..', 'CHANGELOG.md'))) {
    copyFileSync(join(__dirname, '..', 'CHANGELOG.md'), join(__dirname, '..', 'dist', 'CHANGELOG.md'));
  }
  
  console.log('Done');
};

const generateIndividualReadMes = (utils, packageName) => utils.forEach(util => {
  const src = join(__dirname, '..', 'src', util.category.value, util.name, 'README.md');
  writeFileSync(src, generateTable(util, packageName));
});

const generateTable = (util, packageName) => {
  const getValue = key => {
    if (util[key]?.value?.length > 0) {
      const startsWithTag = new RegExp(/^ *<.*?>/g);
      const endsWithTag = new RegExp(/<\/.*?>$/g);
      return startsWithTag.test(util[key].value) && endsWithTag.test(util[key].value) ? util[key].value : `<p>${util[key].value}</p>\n`;
    }

    return '';
  };

  const getNotes = key => {
    if (util[key] && Array.isArray(util[key])) {
      return util[key].map(note => `<blockquote><p>${note.value}</p></blockquote>`).join('');
    } else if (util[key]) {
      return `<blockquote><p>${util[key].value}</p></blockquote>`;
    }

    return '';
  };

  const description = getValue('description');
  const since = util.since ? `<p>Since ${util.since.value}</p>\n` : '';
  const hasDefault = util.param.some(x => x.defaultValue !== undefined);
  const types = util.docgen_types ? `<h4>Supporting Types</h4>\n\n\`\`\`\n${util.docgen_types.value}\n\`\`\`` : '';
  const details = getValue('docgen_details');

  const notes = getNotes('docgen_note');
  const descriptionNote = getNotes('docgen_description_note');
  const importNote = getNotes('docgen_import_note');

  let examples = existsSync(join(__dirname, '..', 'src', util.name, 'EXAMPLES.md')) ? '\n\n' + readFileSync(join(__dirname, '..', 'src', util.name, 'EXAMPLES.md'), 'utf8') + '\n\n' : '';

  if (isNotNilOrEmpty(util.example)) {
    examples = examples + '\n\n' + `

\`\`\`    
${util.example.map(x => x.value).join('\n')}
\`\`\`

    `;
  }

  if (isNotNilOrEmpty(examples)) {
    examples = '<h4>Examples</h4>\n' + examples;
  }

  const _import = `
<h4>Import</h4>

\`\`\`
import ${isNotNilOrEmpty(util.docgen_import) ? util.docgen_import.value : `{ ${util.name} }`} from '${packageName}';
\`\`\`

  `;

  return (
    `<h2>${util.name}${util.generic ? `&lt;${htmlEncode(util.generic)}&gt;` : ''}</h2>` +
    '\n' +
    description +
    descriptionNote +
    since +
    `<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th>` +
        (hasDefault ? '<th>Default</th>' : '') +
      `</tr>
      </thead>
      <tbody>` +
      util.param.map(x => (
        `<tr><td><p><b>${x.name}${x.optional ? ' <span>(optional)</span>' : ''}</b></p>${x.description}</td>` +
        `<td>${htmlEncode(x.type)}</td>` + 
        (hasDefault ? `<td>${x.optional && x.defaultValue !== undefined ? x.defaultValue : ''}</td>` : '') + 
        '</tr>'
      )).join('') +
    `</tbody>
    </table>` +
    `<p><b>Returns:</b> ${htmlEncode(util.returns.raw.replace('@returns', '').trim())}</p>` +
    notes +
    types +
    details +
    _import +
    importNote +
    examples
  );
};

const generateSummary = (categories, utils) => categories.reduce((accumulator, category) => accumulator + generateCategorySummary(category, utils.filter(util => util.category.value.toLowerCase() === category)), '');

const generateCategorySummary = (category, utils) => (
  '\n\n' +
  `<h2>${capitalize(category)}</h2>` +
  '\n' +
  `<table>
    <thead>
    <tr>
      <th>Function</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>` +
    utils.map(x => (
      `<tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/${category}/${x.name}/README.md">${x.name}</a></td>` +
      `<td>${x.description ? x.description.value : ''}</td></tr>`
    ))
    .join('') +
  `</tbody>
  </table>`
);

/**
 * Remove anything from jsdoc comments that is used for documentation generation only
 *
 * @param {string[]} dtsPaths The paths to all the .d.ts files
 */
const sanitizeDTS = (dtsPaths) => {
  console.log('Sanitizing *.d.ts...');

  for (const dts of dtsPaths) {
    let file = readFileSync(join(dts, 'index.d.ts'), 'utf8');
    const matches = Array.from(file.matchAll(/@docgen_default +(.*)/g));

    for (const match of matches) {
      file = file.replace(match[0], ' ');
    }

    file = removeTags(file, docgenTags);
    writeFileSync(join(dts, 'index.d.ts'), file);
  }
};

/**
 * Gets the generics information from the file
 * @param {string} file - The source code of the file
 * @returns {string}
 */
const getGetGeneric = file => {
  const genericMatch = file.match(/export const (.*?) = <(.*?)>\(/);

  return genericMatch && genericMatch[2].replace(/ ?= ?unknown/g, '') || undefined;
};

index();