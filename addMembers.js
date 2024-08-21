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

        await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div[1]/div[2]/div[3]/button[2]')), 5000);
        await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/div[2]/div[3]/button[2]')).click();

        await driver.wait(until.elementLocated(By.xpath('/html/body/div[2]/div[3]/div/div/ul/li[1]/div/button')), 5000);
        await driver.findElement(By.xpath('/html/body/div[2]/div[3]/div/div/ul/li[1]/div/button')).click();

       
        await driver.wait(until.elementLocated(By.xpath('/html/body/div[2]/div[3]/div/div/ul/li[2]/div/button')), 5000);
        await driver.findElement(By.xpath('/html/body/div[2]/div[3]/div/div/ul/li[2]/div/button')).click();

       
        await driver.wait(until.elementLocated(By.xpath('/html/body/div[2]/div[3]/div/div/div/button[2]')), 5000);
        await driver.findElement(By.xpath('/html/body/div[2]/div[3]/div/div/div/button[2]')).click();

        console.log("Added successfully!");
    } catch (error) {
        console.error('Added test failed:', error);
    } finally {
     
        await driver.quit();
    }
}

testEditGrp();
