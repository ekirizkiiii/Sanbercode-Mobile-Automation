//const { expect } = require('chai');

class HomePage{

    get headerWelcome(){
        return $('//*[contains(@resource-id, "header_welcome")]');
    }

    get headerDesc(){
        return $('//*[contains(@resource-id, "tv_header_desc")]');
    }

    get fieldName(){
        return $('//*[contains(@resource-id, "et_name")]');
    }

    get fieldWeight(){
        return $('//*[contains(@resource-id, "et_weight")]');
    }

    get fieldHeight(){
        return $('//*[contains(@resource-id, "et_height")]');
    }

    get radioBtnMale(){
        return $('//*[contains(@resource-id, "rb_male")]');
    }

    get radioBtnFemale(){
        return $('//*[contains(@resource-id, "rb_female")]');
    }

    get btnNext(){
        return $('//*[contains(@resource-id, "bt_next")]');
    }

    get radioBtnAllActivity(){
        return $$('//*[contains(@resource-id, "rg_activity")]/android.widget.RadioButton');
    }

    get btnSelesai(){
        return $('//*[contains(@resource-id, "bt_finish")]');
    }

    get caloriesCard(){
        return $('//*[contains(@resource-id, "cardView")]');
    }

    async verifyHomepage(){
        await this.headerWelcome.waitForDisplayed();
        await expect(this.headerWelcome).toBeDisplayed;
        await expect(this.headerDesc).toBeDisplayed;
    }

    async fillName(){
        await expect(this.fieldName).toBeDisplayed;
        await this.fieldName.addValue('test');
    }

    async fillWeight(){
        await expect(this.fieldWeight).toBeDisplayed;
        await this.fieldWeight.addValue('75');
    }

    async fillHeight(){
        await expect(this.fieldHeight).toBeDisplayed;
        await this.fieldHeight.addValue('175');
    }

    async chooseGender(){
        await expect(this.radioBtnMale).toBeDisplayed;
        await this.radioBtnMale.click();
    }

    async clickNext(){
        await expect(this.btnNext).toBeDisplayed;
        await this.btnNext.click();
    }

    async chooseActivity(){
        await expect(this.radioBtnAllActivity).toBeDisplayed;
        const arrActivity = await this.radioBtnAllActivity.map((elm) => elm.getText());
        let randomActivity = Math.floor(Math.random() * await arrActivity.length)
        await this.radioBtnAllActivity[randomActivity].click();
    }

    async clickSelesai(){
        await expect(this.btnSelesai).toBeDisplayed;
        await this.btnSelesai.click();
    }

    async verifyCaloriesCard(){
        await expect(this.caloriesCard).toBeDisplayed;
    }
}

module.exports = new HomePage();