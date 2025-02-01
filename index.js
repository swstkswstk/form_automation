const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const os = require('os');
const path = require('path');
puppeteer.use(StealthPlugin());
async function run() {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
      userDataDir: path.join(os.tmpdir(), 'puppeteer_temp'), // Use a temporary directory
    });
    const page = await browser.newPage();
    await page.goto('https://www.flipkart.com/poco-m7-pro-5g-lavender-frost-128-gb/p/itmf76d7942d780f?pid=MOBH7443JBKHRPGW&lid=LSTMOBH7443JBKHRPGWOC2RGL&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_1&otracker=browse&fm=organic&iid=7141f01f-88ec-49a1-8393-e020a384afbe.MOBH7443JBKHRPGW.SEARCH&ppt=hp&ppn=homepage&ssid=steeqe9i0g0000001738407169490');
    let selector = ".QqFHMw";
    await page.waitForSelector(selector);
    await page.evaluate((selector) => {
      document.querySelector(selector).click();
    }, selector);
    console.log("Flipkart opened with saved login session!");
  } catch (error) {
    console.error("Error launching browser:", error);
  }
}
run();