const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

async function testLogin() {

    let driver = await new Builder().forBrowser('chrome').build();

    try {
      
        await driver.get('http://localhost:5173/login');  

      
        await driver.wait(until.elementLocated(By.name('username')), 5000);

        await driver.findElement(By.name('username')).sendKeys('mummyji');

        await driver.findElement(By.name('password')).sendKeys('Jassi@2301');


        await driver.findElement(By.name('password')).sendKeys(Key.RETURN);

        await driver.wait(until.urlIs('http://localhost:5173/'), 5000);  
        let currentUrl = await driver.getCurrentUrl();
        console.log(currentUrl);
        assert.strictEqual(currentUrl, 'http://localhost:5173/');

        console.log("Login test passed! Redirected to the chat page.");
    } catch (error) {
        console.error('Login test failed:', error);
    } finally {
        await driver.quit();
    }
}

testLogin();
