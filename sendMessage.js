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

        await driver.wait(until.elementLocated(By.css('#root > div > div:nth-child(1) > div.MuiGrid-root.MuiGrid-container.css-3hjtes-MuiGrid-root > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-sm-4.MuiGrid-grid-md-3.css-92n7g7-MuiGrid-root > div > a:nth-child(3) > div > div.MuiStack-root.css-nen11g-MuiStack-root > p')), 5000);
        await driver.findElement(By.css('#root > div > div:nth-child(1) > div.MuiGrid-root.MuiGrid-container.css-3hjtes-MuiGrid-root > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-sm-4.MuiGrid-grid-md-3.css-92n7g7-MuiGrid-root > div > a:nth-child(3) > div > div.MuiStack-root.css-nen11g-MuiStack-root > p')).click();

        await driver.wait(until.elementLocated(By.name('message')), 5000);
        await driver.findElement(By.name('message')).sendKeys('Hello');

        // await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div[1]/div[2]/div[2]/form/div/button[2]/svg')), 5000);
        // await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/div[2]/div[2]/form/div/button[2]/svg')).click();
        await driver.wait(until.elementLocated(By.css('#root > div > div:nth-child(1) > div.MuiGrid-root.MuiGrid-container.css-3hjtes-MuiGrid-root > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-8.MuiGrid-grid-md-5.MuiGrid-grid-lg-6.css-1466erx-MuiGrid-root > form > div > button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-19nxrb1-MuiButtonBase-root-MuiIconButton-root')), 5000);
        await driver.findElement(By.css('#root > div > div:nth-child(1) > div.MuiGrid-root.MuiGrid-container.css-3hjtes-MuiGrid-root > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-8.MuiGrid-grid-md-5.MuiGrid-grid-lg-6.css-1466erx-MuiGrid-root > form > div > button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-19nxrb1-MuiButtonBase-root-MuiIconButton-root')).click();

        console.log("Message sent successfully!");
    } catch (error) {
        console.error('Message request test failed:', error);
    } finally {
        await driver.quit();
    }
}

testSendFriendRequest();
