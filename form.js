const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser'
  });
  const page = await browser.newPage();
  await page.goto('https://fill.dev/form/credit-card-simple'); // Replace this with the target URL


  let selector = 'input[id="cc-name"]';
  await page.waitForSelector(selector);
  await page.type(selector, 'swstk swxstxkxx');

  selector = 'select[id="cc-type"]';
  await page.waitForSelector(selector);
  await page.select(selector, 'visa');

  selector = 'input[id="cc-number"]';
  await page.type(selector, '4242424242424242');

  selector = 'input[id="cc-csc"]';
  await page.type(selector, '123');

  selector = 'select[id="cc-exp-month"]'
  await page.select(selector, '12');

  selector = 'select[id="cc-exp-year"]';
  await page.select(selector, '2025');

  selector = 'button[type="submit"]';
  await page.waitForSelector(selector);
  await page.evaluate((selector) => {
    document.querySelector(selector).click();
  }, selector);
}

run();
