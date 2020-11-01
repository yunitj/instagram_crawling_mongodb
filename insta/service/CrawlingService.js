const {Builder, By, Key, until} = require('selenium-webdriver');
const  {ServiceBuilder, setDefaultService, Options} = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;

(async function example() {
    const service = new ServiceBuilder(path).build()
    setDefaultService(service)
    const opts = new Options()
    opts.addArguments(['user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36"'])

    let driver  = await new Builder()
        .withCapabilities({browserName: 'chrome', chromeOptions: {args:['user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36"'] } })
        .build()
    // let driver = await new Builder()
    //     .withCapabilities(opts.)
    //     .getChromeOptions()
        // .forBrowser('chrome')
        // .build();
    try {
        // Navigate to Url
        await driver.get('https://www.instagram.com/?hl=ko');
        // let loginArr = await driver.findElements(By.className('_2hvTZ pexuQ zyHYP')).sendKeys('cheese');
        // Enter text "cheese" and perform keyboard action "Enter"
        //await driver.findElement(By.name('q')).sendKeys('cheese', Key.ENTER);

        //let firstResult = await driver.wait(until.elementLocated(By.css('h3>div')), 10000);

        //console.log(await firstResult.getAttribute('textContent'));
        // await driver.get('https://www.google.com');
        // await driver.findElement(By.className('_2hvTZ pexuQ zyHYP')).sendKeys("webElement");
        await driver.findElement(By.xpath('//*[@id="react-root"]/section/main/article/div[2]/div[1]/div/form/div[2]/div/label/input')).sendKeys('cn3085@gmail.com')
        // Get attribute of current active elemen
        let attr = await driver.switchTo().activeElement().getAttribute("title");
        console.log(`${attr}`)
    }
    finally{
        //driver.quit();
    }
})();



