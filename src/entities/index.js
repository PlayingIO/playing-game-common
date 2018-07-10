import { camelCase } from 'mostly-func';
import glob from 'glob';
import path from 'path';

// load all entities
const entityFiles = glob.sync(path.join(__dirname, './*.entity.js'));
module.exports = Object.assign({}, ...entityFiles.map(file => {
  const name = camelCase(path.basename(file, '.entity.js'));
  return { [name]: require(file) };
}));
