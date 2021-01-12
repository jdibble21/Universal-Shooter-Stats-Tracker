const API = require('call-of-duty-api')();
const util = require('util');

const CODMW_API_Service = class{

    constructor(username,password,gamertag,platform) {
        this.username = username;
        this.password = password;
        this.gamertag = gamertag;
        this.platform = platform;

    }

    async loginService() {
        let promise;
        try {
            promise = await API.login(this.username, this.password);
        } catch (Error) {
            console.log(Error);
        }
        return promise;
    }

    async getWeeklyStats() {
        await this.loginService();
        try {
            let data = await API.MWweeklystats(this.gamertag, this.platform);
            console.log(util.inspect(data, {depth: null}));
        } catch (Error) {
            console.log(Error);
        }
    }
};

let api_service = new CODMW_API_Service('jakeers98@icloud.com','Shooter27$','Andsnew','xbl');
api_service.getWeeklyStats();

