const fs = require('fs');
const os = require('os');
const path = require('path');
const askJSON = require('ask-json');
const JSONschema = require('./schema');
const logger = require('../../../config/utils/logger')('Check credentials');

const GFX_DIR = path.join(os.homedir(), '.reuters-graphics/');

if (!fs.existsSync(GFX_DIR)) fs.mkdirSync(GFX_DIR);

const checkSecrets = async() => {
  const filePath = path.resolve(GFX_DIR, 'secrets.json');

  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, '{}');

  const metadata = JSON.parse(fs.readFileSync(filePath));

  logger.info('Graphics secrets');

  const data = await askJSON(JSONschema, metadata);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

module.exports = checkSecrets;
