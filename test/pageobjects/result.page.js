const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResultPage extends Page {
    /**
     * define selectors using getter methods
     */
     get searchResultList () { return $$('//div[@class="ListingPageElements__StyleGridWrapper-sc-1fa9r1e-0 jpWxJQ"]//div[@data-testid="plp-products-grid"]//div[@data-testid="generic-product"]') }
     get firstElement_likeButton () { return $('//div[@class="BadgesGrid__BadgesTopRight-kqvz9j-3 gytrGh"]//div[@class="WishlistIcon__StyledWishlistIconWrapper-sc-75dklq-0 jujCBZ"]/*[contains(@class, "ww-uikit_StyledHeartIcon-sc-1jh2r08 bAkSCb")]') }
     get wishList_ul_element () { return $('//ul[@class="listProducts"]') }
     get deleteButton_wishList () { return $('//button[@class="blockListProduct__delete qaBlockListProduct__delete"]') }
     get wishList_NoProducts_text () { return $('//div[@class="wishlistNoProducts__info"]//p[1]') }
     
     
    async validateResults () {
        await expect(await this.searchResultList).toHaveChildren();
    }

    async clickFirstWishIcon () {
        await (await this.firstElement_likeButton).click();
    }

    async validateIcon () {
        await expect(await this.firstElement_likeButton).toHaveAttribute('data-is-selected', 'true')
    }

    async acceptCookies () {
        await (await this.acceptCookiesButton).click();
    }

    async searchProduct(product){
        await (await this.searchBar).setValue(product);
    }

    async deleteItem_wishList () {
        await expect(await this.wishList_ul_element).toBeDisplayed();  
        await (await this.deleteButton_wishList).click();
        await expect(await this.wishList_NoProducts_text).toExist();  
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new ResultPage();
