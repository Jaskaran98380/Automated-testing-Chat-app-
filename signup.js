const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

async function testSignUp() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {

        await driver.get('http://localhost:5173/login');  

      
        await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div[1]/main/div/form/button[2]')), 5000);
        await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/main/div/form/button[2]')).click();

        await driver.wait(until.elementLocated(By.name('name')), 5000);
        await driver.wait(until.elementLocated(By.name('bio')), 5000);
        await driver.wait(until.elementLocated(By.name('username')), 5000);
        await driver.wait(until.elementLocated(By.name('password')), 5000);
        await driver.wait(until.elementLocated(By.css('input[type="file"]')), 5000);

     
        await driver.findElement(By.name('name')).sendKeys('Suresh');
        await driver.findElement(By.name('bio')).sendKeys('Software Developer');
        await driver.findElement(By.name('username')).sendKeys('Suresh123');
        await driver.findElement(By.name('password')).sendKeys('Suresh@123');

   
        let avatarInput = await driver.findElement(By.css('input[type="file"]'));
        let avatarPath = process.cwd() + '/test.png';
        await avatarInput.sendKeys(avatarPath);

     
        await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/main/div/form/button[1]')).click();

     
        await driver.wait(until.urlIs('http://localhost:5173/'), 10000); 

        let currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'http://localhost:5173/');  

        console.log("Sign-Up test passed! Redirected to the home page.");
    } catch (error) {
        console.error('Sign-Up test failed:', error);
    } finally {
        await driver.quit();
    }
}

testSignUp();
