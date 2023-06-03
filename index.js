const puppeteer = require('puppeteer');

(async () => {
  // Запускаем браузер
  const browser = await puppeteer.launch();

  // Создаем новую страницу
  const page = await browser.newPage();

  // Настраиваем размер окна (необязательно)
  await page.setViewport({ width: 1280, height: 800 });

  // Переходим на нужную веб-страницу
  await page.goto('https://vc.ru/');

  // Создаем скриншот страницы
  await page.screenshot({ path: 'screenshot.png' });

  // Закрываем браузер
  await browser.close();

  console.log('Скриншот сохранен как screenshot.png');
})();
