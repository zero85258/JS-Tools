
const puppeteer = require('puppeteer');

const sleep = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms)
  })
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://tip.railway.gov.tw/tra-tip-web/tip/tip001/tip123/query');
  await page.click('#queryForm > div.basic-info > div:nth-child(2) > div.btn-group > label:nth-child(2)')

  // 身分證
  await page.click('#pid')
  await page.focus('input[id=pid]')
  await page.keyboard.type('請填身分證字號');

  await page.focus('input[id=startStation1]')
  await sleep(100)
  await page.keyboard.type('0980-南港');

  await page.focus('input[id=endStation1]')
  await sleep(100)
  await page.keyboard.type('7030-新城');

  page.$eval('#normalQty1', e => {
    e.value = 2
  })

  page.$eval('#rideDate1', e => {
    e.value = "2019/09/13"
  })

  page.$eval('#trainNoList1', e => {
    e.value = 218
  })
  //====
  await page.focus('input[id=startStation2]')
  await sleep(100)
  await page.keyboard.type('7030-新城');

  await page.focus('input[id=endStation2]')
  await sleep(100)
  await page.keyboard.type('0980-南港');

  page.$eval('#normalQty2', e => {
    e.value = 2
  })

  page.$eval('#rideDate2', e => {
    e.value = "2019/09/15"
  })

  page.$eval('#trainNoList4', e => {
    e.value = 223
  })

  await page.click("#queryForm > div.btn-sentgroup > input")
})();
