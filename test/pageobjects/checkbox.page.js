

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckboxPage extends Page {
    /**
     * define selectors using getter methods
     */

    
    get checkboxOne() {

        // choose selector
        //return $('#checkbox');
        //return $('//*[@id="checkboxes"]/input[1]')
        //return $('#checkboxes > input[type=checkbox]:nth-child(1)')
        // xpath = //*[@id="checkboxes"]/input[1]
        // full xpath  /html/body/div[2]/div/div/form/input[1]
        return $('/html/body/div[2]/div/div/form/input[1]')
    }
    
    
    /*
    get checkboxTwo () {
                return $('#checkboxes > input[type=checkbox]:nth-child(3)'); 
    }
    */

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    //async login (username, password) {
    //    await this.inputUsername.setValue(username);
    //    await this.inputPassword.setValue(password);
    //    await this.btnSubmit.click();
    //}

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('checkboxes');
    }
}

export default new CheckboxPage();
