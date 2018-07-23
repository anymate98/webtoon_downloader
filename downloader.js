const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const login = false;

  // 로그인 기능
  if (login === true) {
    // await page.goto('https://nid.naver.com/nidlogin.login');
    // await page.type('#id', '');
    // await page.type('#pw', '');
  }

  const comics = [[], [], [], [], [], [], []];

  await page.goto('https://comic.naver.com/webtoon/weekday.nhn');
  const x = await page.$eval('#content > div.list_area.daily_all > div:nth-child(1) > div > ul > li:nth-child(1) > a', a => a.title);
  if (await page.$('#content > div.list_area.daily_all > div:nth-child(1) > div > ul > li:nth-child(100) > a') === null) {
    console.log('not available');
  }
  console.log(x);

  // 네이버 웹툰 다운로드용 url 변수
  const titleId = 183559;
  const no = 392;
  const comicLink = `https://comic.naver.com/webtoon/detail.nhn?titleId=${titleId}&no=${no}`;

  await page.goto(comicLink);

  await browser.close();
})();
