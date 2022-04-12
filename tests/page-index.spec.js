const cheerio = require('cheerio');
const PageIndex = require('../middleware/page-index');

const config = {
  baseURL: 'http://localhost',
  env: 'development',
  port: 3000,
};

test('test parse page description', () => {
  const pageIndex = new PageIndex(config);
  const pageData = '<meta name="description" content="Design and build digital services for the Department for Education NHS.">';
  const $ = cheerio.load(pageData);

  expect(pageIndex.parseDescription($)).toBe('Design and build digital services for the Department for Education NHS.');
});

