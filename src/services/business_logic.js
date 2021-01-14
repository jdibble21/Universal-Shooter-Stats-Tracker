
var datalayer = require('../db/datalayer')

class business_logic{
     dl;

    constructor() {
        this.dl = datalayer;
    }

    static checkEmail(email){
        //call datalayer to check email
    }


    static createAccount(email, password1) {

    }
}
exports.createBL = business_logic;



