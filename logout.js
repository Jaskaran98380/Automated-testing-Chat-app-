const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

async function testLogout() {
  
    let driver = await new Builder().forBrowser('chrome').build();

    try {
     
        await driver.get('http://localhost:5173/login');

        await driver.wait(until.elementLocated(By.name('username')), 5000);
        await driver.findElement(By.name('username')).sendKeys('mummyji');
        await driver.findElement(By.name('password')).sendKeys('Jassi@2301');
        await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/main/div/form/button[1]')).click();

        await driver.wait(until.urlIs('http://localhost:5173/'), 10000);

        await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div[1]/div[1]/header/div/div[3]/button[5]')), 5000);
        await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/div[1]/header/div/div[3]/button[5]')).click();

        console.log("Logout successfully!");
    } catch (error) {
        console.error('Logout test failed:', error);
    } finally {
        await driver.quit();
    }
}

testLogout();
