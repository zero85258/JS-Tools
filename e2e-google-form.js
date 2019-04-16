const puppeteer = require('puppeteer');

const sleep = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms)
  })
}

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSdHE23KJxcDcyUKEdVhVqzxDlhcOiYwjGzCPDzx4e8Ln07-sA/viewform');
//  await page.screenshot({path: 'example.png'});

// await page.click('div.quantumWizMenuPaperselectOptionList')
  await page.focus('input[type=email]')
  await page.keyboard.type('xxxxx@xxxxxx.com.tw');

  await page.click('#identifierNext')
//identifierNext

  await page.focus('input[type=password]')

  await sleep(1000) 
  await page.keyboard.type('xxxxxxx');

  await page.click('#passwordNext')

  await sleep(1000) 

  await page.waitForSelector('div.quantumWizMenuPaperselectOptionList')
  await page.click('div.quantumWizMenuPaperselectOptionList')
//document.querySelector('div.exportSelectPopup.quantumWizMenuPaperselectPopup').scrollTop= 300
  await sleep(1000)

//gene = 300 fu = 240
  page.$eval('div.exportSelectPopup.quantumWizMenuPaperselectPopup', e => {
	e.scrollTop = 300
  })

//await sleep(3000)
//  await page.waitForSelector('div[data-value="技術部/AD078/xxxx"]')
//  await page.click('div[data-value="技術部/AD078/xxx"]')

  await page.waitForSelector('div[data-value="上班"]')
  await page.click('div[data-value="上班"]')


  await sleep(1000)
  await page.waitForSelector('div[data-value="下班"]')
  await page.click('div[data-value="下班"]')


  await page.click('div[role="button"]')

//上班

//  await browser.close();
})();

