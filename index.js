var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
(() => __awaiter(this, void 0, void 0, function* () {
    puppeteer.use(StealthPlugin());
    const login = () => __awaiter(this, void 0, void 0, function* () {
        const browser = yield puppeteer.launch({ headless: false, slowMo: 250 });
        const page = yield browser.newPage();
        yield page.goto('https://www.tribalwars.nl');
        yield page.evaluate(() => {
            let username = document.getElementById('user');
            let password = document.getElementById('password');
            username.value = 'pietertje1235';
            password.value = 'p8SVrAiLrnJd45Z';
            const loginBtn = document.getElementsByClassName('btn-login')[0];
            loginBtn.click();
        });
        yield page.waitForNavigation();
        yield page.evaluate(() => {
            let currentWorld = document.getElementsByClassName('world_button_active')[0];
            currentWorld.click();
        });
        return;
        // await browser.close();
    });
    login();
}))();
//# sourceMappingURL=index.js.map