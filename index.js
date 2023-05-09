const puppeteer = require('puppeteer');

async function run() {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://ultrasound.money/')

    // await page.screenshot({ path: 'example.png', fullPage: true})
    // await page.pdf({ path: 'example.pdf', format: 'A4'})
    // const html = await page.content();
    // console.log(html); // logs all page html
    // const title = await page.evaluate(() => document.title);
    // console.log(title) // logs page title
    const text = await page.evaluate(() =>
    Array.from(document.querySelectorAll('#monetary-premium .leading-normal'), (e) => ({
        text: e.innerHTML,
    })))

    console.log(text.length)    
    console.log(text[40].text)

    // '//*[@id="monetary-premium"]/div[2]/div[1]/div[2]/div[2]/a[4]/span[3]'

    await browser.close();
}

run();