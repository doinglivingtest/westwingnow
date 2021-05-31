const HomePage = require('../pageobjects/home.page');
const ResultPage = require('../pageobjects/result.page');

describe('Westwingnow test', () => {

    const user = 'alejandrotellezm12@gmail.com'
    const pwd = 'Qwerty9910'

    it('should search for a product and see results', async () => {
      await HomePage.open('');
      await browser.maximizeWindow();
      await HomePage.acceptCookies();
      await HomePage.searchProduct('möbel');
      //Hit Enter key
      await browser.keys("\uE007");
      await HomePage.waitRegisterPopUpVisible_Refresh();
      //Refreshing the page to avoid the register pop up
      await browser.refresh();
      await ResultPage.validateResults();
    });
    
    it('should click wish icon and log in', async () => {
      await ResultPage.clickFirstWishIcon();
      await HomePage.login(user, pwd);
    });

    it('wish icon should be filled in and wishlist counter in the website header shows 1 ', async () => {
      await ResultPage.validateIcon();
      await HomePage.validateWishListCounter();
    });

    it('should go to the wishlist page and delete the product from my wishlist ', async () => {
      await HomePage.goToWishList();
      await ResultPage.deleteItem_wishList();
    });
    
});


