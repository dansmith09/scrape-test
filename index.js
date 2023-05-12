const puppeteer = require('puppeteer');

async function main() {

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
    Array.from(document.querySelectorAll('#monetary-premium .leading-normal'), (e) => e.innerHTML))

    console.log(text[40].split('').splice(0,3).join('')) // Prints: 6.6 // ETH staking APY
    const apy = parseFloat(text[40].split('').splice(0,3).join('')) // Prints: 6.6 // ETH staking APY // number

    console.log(`
    ---------------------------------------
    Base Validator Rewards
    ---------------------------------------
    Solo Staking: ${apy}%
    ---------------------------------------
    Node Opperator Rewards
    ---------------------------------------    
    Rocket Pool Minipool (16 ETH): ${(apy * 1.15).toFixed(2)}%
    Rocket Pool LEB8 (8 ETH): ${(apy * 1.42).toFixed(2)}%
    Stader NO: ${(apy * 1.22).toFixed(2)}%
    ---------------------------------------
    Liquid Staking Tokens Rewards
    ---------------------------------------    
    Stader ETHx LST ${(apy * 0.9).toFixed(2)}%
    stETH LST ${(apy * 0.9).toFixed(2)}%
    rETH LST: : ${(apy * 0.86).toFixed(2)}%
    shgETH Unit Trust: : ~${(((apy*1.42)*(1/(11/8)))*0.85).toFixed(2)}%
    `)

    await browser.close();
}

main();