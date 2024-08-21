const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

async function testEditGrp() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
     
        await driver.get('http://localhost:5173/login');

        await driver.wait(until.elementLocated(By.name('username')), 5000);
        await driver.findElement(By.name('username')).sendKeys('mummyji');
        await driver.findElement(By.name('password')).sendKeys('Jassi@2301');
        await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/main/div/form/button[1]')).click();

        await driver.wait(until.urlIs('http://localhost:5173/'), 10000);

        await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div[1]/div[1]/header/div/div[3]/button[3]')), 5000);
        await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/div[1]/header/div/div[3]/button[3]')).click();

        await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div[1]/div[1]/div/a[1]/div')), 5000);
        await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/div[1]/div/a[1]/div')).click();

        await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div[1]/div[2]/div[1]/button')), 5000);
        await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/div[2]/div[1]/button')).click();

        await driver.wait(until.elementLocated(By.name('fieldName')), 5000);
        await driver.findElement(By.name('fieldName')).sendKeys('Changed GroupName');

        await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div[1]/div[2]/div[1]/button')), 5000);
        await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/div[2]/div[1]/button')).click();

        console.log("Group name updated successfully!");
    } catch (error) {
        console.error('Group name test failed:', error);
    } finally {
    
        await driver.quit();
    }
}

testEditGrp();
