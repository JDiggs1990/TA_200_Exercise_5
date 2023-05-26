import CheckboxPage from '../pageobjects/checkboxes.page.js'

describe('My Checkbox application', () => {
    it('should open the page', async () => {
        await CheckboxPage.open();
        await browser.pause(3000);
    })

/*
        let var x = 0;
        let var y = 1;
 */       

    it('should check for checkboxOne status, then clicks it', async () => {    

        if(await CheckboxPage.checkboxOne.isSelected() == false){
            console.log ('enterd loop line17',await CheckboxPage.checkboxOne.isSelected());
            await CheckboxPage.checkboxOne.click();
            await browser.pause(3000);
        }
        //else {await console.log('line21');
        //        }
        })
        
     it('should check for checkboxTwo status, then click if appropriate', async () => {
        
         if(await CheckboxPage.checkboxTwo.isSelected() == true){ 
            console.log ('entered loop line28',await CheckboxPage.checkboxTwo.isSelected());
            // await CheckboxPage.checkboxTwo.click();
            // console.log ('entered loop line30');
            // await browser.pause(3000);
         }
    //     else{console.log('Error2')}
         })



    // xit('verifies that both boxes are unchecked', async () => {

    //     expect checkboxOne.isSelected != true{
    //         console.log ('Checkbox One not selected');
    //     }

    //     expect checkboxTwo.isSelected != (true){
    //         console.log ('Checkbox Two not selected');
    //     }
    //     })
        
//    })
})


/*
Their code

tobeselected()

*/
