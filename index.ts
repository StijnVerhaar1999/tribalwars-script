const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

(async () => {
    puppeteer.use(StealthPlugin())

    const login = async () : Promise<void> => {
        const browser = await puppeteer.launch({ headless: false, slowMo: 250 });
        const page = await browser.newPage();
        
        await page.goto('https://www.tribalwars.nl');
        await page.evaluate(() => {

            let username = (<HTMLInputElement>document.getElementById('user'));
            let password = (<HTMLInputElement>document.getElementById('password'));
            
            username.value = 'pietertje1235';
            password.value = 'p8SVrAiLrnJd45Z';

            const loginBtn = document.getElementsByClassName('btn-login')[0] as HTMLElement;
            loginBtn.click();
        })
        
        await page.waitForNavigation();
        
        await page.evaluate(() => {
            let currentWorld = document.getElementsByClassName('world_button_active')[0] as HTMLElement;
            currentWorld.click();
        })
        return;
        // await browser.close();

    }
    
    login();

    
})();

