const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

async function testSendFriendRequest() {

    let driver = await new Builder().forBrowser('chrome').build();

    try {
     
        await driver.get('http://localhost:5173/login');

        await driver.wait(until.elementLocated(By.name('username')), 5000);
        await driver.findElement(By.name('username')).sendKeys('mummyji');
        await driver.findElement(By.name('password')).sendKeys('Jassi@2301');
        await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/main/div/form/button[1]')).click();

        await driver.wait(until.urlIs('http://localhost:5173/'), 10000);

        await driver.wait(until.elementLocated(By.css('#root > div > div:nth-child(1) > div.MuiBox-root.css-1odx36v > header > div > div:nth-child(4) > button:nth-child(1) > svg')), 5000);
        await driver.findElement(By.css('#root > div > div:nth-child(1) > div.MuiBox-root.css-1odx36v > header > div > div:nth-child(4) > button:nth-child(1) > svg')).click();

        await driver.wait(until.elementLocated(By.name('search')), 5000);
        await driver.findElement(By.name('search')).sendKeys('Ramesh');

        await driver.wait(until.elementLocated(By.css('body > div.MuiDialog-root.MuiModal-root.css-zw3mfo-MuiModal-root-MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper.css-hz1bth-MuiDialog-container > div > div > ul > li > div > button > svg')), 5000);
        await driver.findElement(By.css('body > div.MuiDialog-root.MuiModal-root.css-zw3mfo-MuiModal-root-MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper.css-hz1bth-MuiDialog-container > div > div > ul > li > div > button > svg')).click();

        console.log("Friend request sent successfully!");
    } catch (error) {
        console.error('Friend request test failed:', error);
    } finally {
        await driver.quit();
    }
}

testSendFriendRequest();
