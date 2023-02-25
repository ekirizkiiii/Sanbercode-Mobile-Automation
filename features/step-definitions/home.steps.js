//import { Given, When, Then } from '@wdio/cucumber-framework';
const {Given, When, Then} = require('@wdio/cucumber-framework')

const HomePage = require('../pageobjects/home.page');

Given(/^I am on the home page$/, async () => {
    await HomePage.verifyHomepage();
});

When(/^I fill all field$/, async () => {
    await HomePage.fillName();
    await HomePage.fillWeight();
    await HomePage.fillHeight();
    await HomePage.chooseGender();
});

Then(/^I click "(.*)" button$/, async (button) => {
    switch (button) {
        case 'Next':
            await HomePage.clickNext();
            break;

        case 'Selesai':
            await HomePage.clickSelesai();
            break;
    
        default:
            break;
    }
});

Then(/^I choose activity$/, async () => {
    await HomePage.chooseActivity();
});

Then(/^I should see calories card$/, async () => {
    await HomePage.verifyCaloriesCard()
});

