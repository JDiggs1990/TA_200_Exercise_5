import CheckboxPage from '../pageobjects/checkbox.page.js'

describe('My Checkbox application', () => {
    it('should determine whether boxes are checked', async () => {
        await CheckboxPage.open()
        await browser.pause(3000)
    })

/*
        let var x = 0;
        let var y = 1;
 */       

    xit('should check for checkboxOne status', async () => {    

        if(CheckboxPage.checkboxOne.isSelected==(FALSE)){
            await (CheckBoxPage).checkboxOne.click();
            await browser.pause(3000)
        }
    })

        
    it('should check for checkboxTwo status', async () => {

        if(CheckboxPage.checkboxTwo.isSelected==FALSE){ 
            await CheckboxPage.checkboxTwo.click();
            await browser.pause(3000);

        }
    }


/*

        expect(checkboxOne.isSelected) != TRUE{
            await return console.log ("Checkbox One not selected")
        }

        expect(checkboxTwo.isSelected) != TRUE{
            await return console.log ("Checkbox Two not selected")
        }

*/



        
//    })
})




/*
Their code

tobeselected()







*/








