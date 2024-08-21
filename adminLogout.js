const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

async function testLogin() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:5173/admin'); 

 
        await driver.wait(until.elementLocated(By.name('adminL')), 5000);

      
        await driver.findElement(By.name('adminL')).sendKeys('sdjcsdkncdsjcdskcm');

      
        await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/main/div/form/button')).click();

    

      
        await driver.wait(until.urlIs('http://localhost:5173/admin/dashboard'), 5000); 
        
        await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div[1]/div[2]/div/a[5]')), 5000);
        await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/div[2]/div/a[5]')).click();

        await driver.wait(until.urlIs('http://localhost:5173/admin'), 5000); 

        console.log("Admin Logout test passed! Redirected to the chat page.");
    } catch (error) {
        console.error('Logout test failed:', error);
    } finally {
      
        await driver.quit();
    }
}

testLogin();
