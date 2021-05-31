const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
     get searchBar () { return $('//div[@data-testid="search-wrapper"]//div[@role="search"]//form//input') }
     get registerPopUp () { return $('//div[@data-testid="shop_to_club_registration_single_step_overlay"]') }
     get inputEmail_login_popup () { return $('//form//div[@class="StyledInputWrapper___default-sc-1wire28-0 krcQBZ"]//input[@data-testid="long-register-email-field"]') }
     get inputPassword_login_popup () { return $('//input[@data-testid="long-register-password-field"]') }
     get termsAccepted() { return $('//input[@name="isTermsAccepted"]') }
     get acceptCookiesButton () { return $('#onetrust-accept-btn-handler') }
     get btnSubmit () { return $('//button[@data-testid="login_reg_submit_btn"]') }
     get wishListCounter () { return $('//span[@data-testid="wishlist-counter"]') }
     get wishListButton_header () { return $('//div[@data-testid="wishlist-bubble"]') }
     

    async login (username, password) {
        await (await this.inputEmail_login_popup).setValue(username);
        await (await this.inputPassword_login_popup).setValue(password);
        await (await this.termsAccepted).click();
        await (await this.btnSubmit).click();
    }

    async waitRegisterPopUpVisible_Refresh () {
        await expect(await this.registerPopUp).toBeDisplayed();  
    }


    async acceptCookies () {
        await expect(await this.acceptCookiesButton).toBeDisplayed();        
        await (await this.acceptCookiesButton).click();
    }
    async searchProduct(product){
        await (await this.searchBar).setValue(product);
    }

    async validateWishListCounter () {
        await expect(await this.wishListCounter).toHaveText('1')
    }

    async goToWishList () {
        await (await this.wishListButton_header).click();
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        //return super.open('login');
        return super.open('');
    }
}

module.exports = new HomePage();
